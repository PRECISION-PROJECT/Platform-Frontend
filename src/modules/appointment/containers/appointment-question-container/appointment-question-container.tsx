import MaxWidthContainer from "@/components/containers/max-width-container";
import { AppointmentQuestionUI } from "../../components";
import { useAppointmentQuestionContainer } from "../../hooks";

const AppointmentQuestionContainer = () => {
  const { questions } = useAppointmentQuestionContainer();

  return (
    <div className="bg-paper text-background">
      <MaxWidthContainer className="py-10 md:py-20">
        <AppointmentQuestionUI questions={questions} />
      </MaxWidthContainer>
    </div>
  );
};

export default AppointmentQuestionContainer;
