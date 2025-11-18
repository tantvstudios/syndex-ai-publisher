import { CiCirclePlus } from "react-icons/ci";
import { MultiStepDialog } from "../../custom-multistep-dialog";
import { Step1 } from "./form-step-1";
import { Step2 } from "./form-step-2";
import { Step3 } from "./form-step-3";
import { Step4 } from "./form-step-4";

export interface Step1Data {
  brandName: string;
  rssFeed: string;
  profilePic: FileList | null;
}

export interface Step2Data {
  isLocalOutlet: string;
  communityServed: string[];
}

export interface Step3Data {
  topicsCovered: string[];
}

export interface Step4Data {
  regions: string[];
}

export type BrandFormData = Step1Data & Step2Data & Step3Data & Step4Data;

const AddBrand = () => {
  const defaultValues: BrandFormData = {
    brandName: "",
    rssFeed: "",
    profilePic: null,
    isLocalOutlet: "",
    communityServed: [],
    topicsCovered: [],
    regions: [],
  };

  const handleSubmit = (data: BrandFormData) => {
    console.log("RAW DATA:", data);
    console.log("CLEANED JSONIFIED DATA:", JSON.stringify(data, null, 2));
  };

  return (
    <MultiStepDialog<BrandFormData>
      titleButton={
        <>
          Add Brand <CiCirclePlus />
        </>
      }
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      steps={[
        (ctx) => <Step1 {...ctx} />,
        (ctx) => <Step2 {...ctx} />,
        (ctx) => <Step3 {...ctx} />,
        (ctx) => <Step4 {...ctx} />,
      ]}
    />
  );
};

export default AddBrand;
