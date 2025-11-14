import { Button, Dialog, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { Step1 } from "./form-step1";
import { Step2 } from "./form-step-2";
import { Step3 } from "./form-step-3";

const AddBrand = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(1);

  interface BrandFormData {
    brandName: string;
    rssFeed: string;
    profilePic: FileList | null; // For the file input
  }

  const {
    control,
    handleSubmit,
    trigger, // Used for step validation
    formState: { errors, isValid, isSubmitting },
    reset, // Used to clear the form
  } = useForm<BrandFormData>({
    defaultValues: {
      brandName: "",
      rssFeed: "",
      profilePic: null,
    },
    mode: "onChange", // Validate on change
  });

  {
    /* Handles step navigation */
  }
  const nextStep = () => setStep((prev: number) => prev + 1);
  const prevStep = () => setStep((prev: number) => prev - 1);
  const handleClose = () => {
    setStep(0); // Reset step to 0
    onClose();
    reset(); // Clears form data
  };

  const onSubmit = (data: BrandFormData) => {
    console.log("Form submitted with data:", data);
    // You would typically send data to an API here
    handleClose();
  };

  let Content;

  switch (step) {
    case 0:
      // Pass the nextStep function to the first screen
      Content = <Step1 nextStep={nextStep} />;
      break;
    case 1:
      // Pass prevStep and the custom handleClose to the second screen
      Content = <Step2 prevStep={prevStep} nextStep={nextStep} />;
      break;
    case 2:
      Content = <Step3 prevStep={prevStep} handleClose={handleClose} />;
      break;
    default:
      Content = <Step1 nextStep={nextStep} />;
  }

  return (
    <>
      <Button
        gap={"1rem"}
        bg={"white"}
        color={"black"}
        boxShadow="sm"
        onClick={onOpen}
      >
        Add Brand <CiCirclePlus />
      </Button>
      <Dialog.Root open={open} onOpenChange={onClose} placement="center">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>{Content}</Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

export default AddBrand;
