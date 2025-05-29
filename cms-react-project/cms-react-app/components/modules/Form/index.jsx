import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import PersonalDetailsForm from "../../islands/PersonalDetailsForm.jsx?island";
import { Island } from "@hubspot/cms-components";

export const meta = {
  label: "Form",
  icon: "form",
  description: "A form to collect personal details",
};

export const fields = 
  <ModuleFields>
    <TextField
      name="title"
      label="Title"
      default="Personal Details"
    />
    <TextField
      name="description"
      label="Description"
      default="Please fill out your personal details below"
    />
    <TextField
      name="submitButtonText"
      label="Submit Button Text"
      default="Submit"
    />
    <TextField
      name="successMessage"
      label="Success Message"
      default="Thank you for submitting your details!"
    />
    <TextField
      name="errorMessage"
      label="Error Message"
      default="There was an error submitting your details. Please try again."
    />
  </ModuleFields>;

export function Component() {
  return (
    <div>
      <Island module={PersonalDetailsForm} />
    </div>
  );
}


