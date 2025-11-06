import MaxWidthContainer from "@/components/containers/max-width-container";
import { FormWrapper } from "@/components/ui/form";
import { HStack } from "@/components/utilities";
import { AppointmentCalendarUI, AppointmentFormUI } from "../../components";
import { useAppointmentFormContainer } from "../../hooks";

const AppointmentFormContainer = () => {
  const { form, isLoading, onSubmit } = useAppointmentFormContainer();
  return (
    <MaxWidthContainer className="py-10 md:py-20 w-full">
      <FormWrapper className="w-full" form={form} onSubmit={onSubmit}>
        <HStack
          spacing={44}
          align="default"
          className="flex-col-reverse md:flex-row w-full"
          noWrap
        >
          <AppointmentFormUI isLoading={isLoading} />
          <AppointmentCalendarUI isLoading={isLoading} />
        </HStack>
      </FormWrapper>
    </MaxWidthContainer>
  );
};

export default AppointmentFormContainer;
