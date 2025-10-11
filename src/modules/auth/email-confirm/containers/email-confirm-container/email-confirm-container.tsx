import { Card } from "@/components/ui/card";
import { EmailConfirmHeaderUI } from "../../components";
import { useEmailConfirm } from "../../hooks";

type Props = {
  email: string;
  hash: string;
};

const EmailConfirmContainer = (props: Props) => {
  const { isLoading } = useEmailConfirm(props);
  return (
    <Card className="w-full max-w-md auth-card">
      <EmailConfirmHeaderUI email={props.email} isLoading={isLoading} />
    </Card>
  );
};

export default EmailConfirmContainer;
