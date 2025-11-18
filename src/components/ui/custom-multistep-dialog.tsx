import { Dialog, Button, CloseButton, useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  DefaultValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export interface MultiStepDialogProps<FormValues extends FieldValues> {
  titleButton: ReactNode;
  steps: ((ctx: StepContext<FormValues>) => ReactNode)[];
  defaultValues: DefaultValues<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
}

export interface StepContext<FormValues extends FieldValues> {
  register: any;
  errors: any;
  control: any;
  setValue: UseFormSetValue<FormValues>;
  watch: UseFormWatch<FormValues>;
  nextStep: () => void;
  prevStep: () => void;
  isFirst: boolean;
  isLast: boolean;
  getValues: () => FormValues;
  close: () => void;
  submit: () => void;
}

export function MultiStepDialog<FormValues extends FieldValues>({
  titleButton,
  steps,
  defaultValues,
  onSubmit,
}: MultiStepDialogProps<FormValues>) {
  const { open, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(0);

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    control,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    mode: "onChange",
  });

  const closeAndReset = () => {
    setStep(0);
    reset();
    onClose();
  };

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      // Log current step data before moving
      //   console.log(`Step ${step + 1} data:`, getValues());
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmitWithLogging = (data: FormValues) => {
    // console.log("=== FINAL FORM DATA ===");
    // console.log(JSON.stringify(data, null, 2));
    onSubmit(data);
    closeAndReset();
  };

  const StepComponent = steps[step];

  return (
    <>
      <Button
        onClick={onOpen}
        gap="1rem"
        bg="white"
        color="black"
        boxShadow="sm"
      >
        {titleButton}
      </Button>

      <Dialog.Root
        closeOnInteractOutside={false}
        open={open}
        onOpenChange={closeAndReset}
        placement="center"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="40rem">
            {StepComponent({
              register,
              errors,
              control,
              setValue,
              watch,
              nextStep,
              prevStep,
              getValues,
              close: closeAndReset,
              isFirst: step === 0,
              isLast: step === steps.length - 1,
              submit: handleSubmit(onSubmitWithLogging),
            })}

            <Dialog.CloseTrigger top="0" insetEnd="-12" asChild>
              <CloseButton onClick={closeAndReset} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
}
