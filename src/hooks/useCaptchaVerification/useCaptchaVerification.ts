import { useCallback, useEffect, useRef, useState } from "react";
import { validateEmail } from "@/utils/validations";
import {
  cleanupExpiredData,
  DEBOUNCE_TIMEOUT,
  getRateLimitData,
  MAX_FAILED_ATTEMPTS,
  RESET_TIMEOUT,
  setRateLimitData,
} from "@/components/layouts/MainLayout/Header/SignInModal/utils";

// ===== MAIN HOOK =====
export const useCaptchaVerification = (currentEmail: string) => {
  // ===== STATE =====
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | undefined>(undefined);

  // ===== REFS =====
  const debounceTimer = useRef<NodeJS.Timeout>();

  // ===== HANDLERS =====
  const incrementFailedAttempts = useCallback(() => {
    if (!currentEmail) return false;

    const data = getRateLimitData();
    const rateData = data[currentEmail.trim()] || { attempts: 0, lastFailedTime: 0 };
    const newAttempts = rateData.attempts + 1;

    data[currentEmail.trim()] = {
      attempts: newAttempts,
      lastFailedTime: Date.now(),
    };
    setRateLimitData(data);

    if (newAttempts >= MAX_FAILED_ATTEMPTS) {
      setShowCaptcha(true);
      return true;
    }

    return false;
  }, [currentEmail]);

  const resetFailedAttempts = useCallback((email: string) => {
    const rateLimitData = getRateLimitData();
    delete rateLimitData[email.trim()];
    setRateLimitData(rateLimitData);
    setShowCaptcha(false);
    setCaptchaToken(undefined);
  }, []);

  const onCaptchaChange = useCallback((token: string | null) => {
    setCaptchaToken(token || undefined);
  }, []);

  const onResetCaptchaToken = useCallback(() => {
    setCaptchaToken(undefined);
  }, []);

  // ===== EFFECTS =====
  useEffect(() => {
    if (!currentEmail || !validateEmail(currentEmail.trim())) return;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      cleanupExpiredData();
      const data = getRateLimitData();
      const rateData = data[currentEmail.trim()];

      if (!rateData) {
        setShowCaptcha(false);
        return;
      }

      const timeSinceLastFailed = Date.now() - rateData.lastFailedTime;
      if (timeSinceLastFailed >= RESET_TIMEOUT) {
        delete data[currentEmail.trim()];
        setRateLimitData(data);
        setShowCaptcha(false);
        return;
      }

      if (rateData.attempts >= MAX_FAILED_ATTEMPTS) {
        setShowCaptcha(true);
      }
    }, DEBOUNCE_TIMEOUT);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [currentEmail]);

  return {
    showCaptcha,
    captchaToken,
    onCaptchaChange,
    onResetCaptchaToken,
    incrementFailedAttempts,
    resetFailedAttempts,
  };
};

export default useCaptchaVerification;
