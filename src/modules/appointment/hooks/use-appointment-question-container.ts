import { useMemo } from "react";

export const useAppointmentQuestionContainer = () => {
  const questions = useMemo(
    () => [
      {
        id: "1",
        question: "Precision Moulding opened in 1989?",
        answer:
          "Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in hardwoods and carry an extensive inventory for home and marine construction",
      },
      {
        id: "2",
        question: "Precision Moulding opened in 1989?",
        answer:
          "Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in hardwoods and carry an extensive inventory for home and marine construction",
      },
      {
        id: "3",
        question: "Precision Moulding opened in 1989?",
        answer:
          "Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in hardwoods and carry an extensive inventory for home and marine construction",
      },
      {
        id: "4",
        question: "Precision Moulding opened in 1989?",
        answer:
          "Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in hardwoods and carry an extensive inventory for home and marine construction",
      },
      {
        id: "5",
        question: "Precision Moulding opened in 1989?",
        answer:
          "Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in hardwoods and carry an extensive inventory for home and marine construction",
      },
    ],
    []
  );

  return {
    questions,
  };
};
