import React from "react";
import { EmailConfirmContainer } from "./containers";

type Props = {
  email: string;
  hash: string;
};

const EmailConfirmModule = (props: Props) => {
  return <EmailConfirmContainer email={props.email} hash={props.hash} />;
};
export default EmailConfirmModule;
