import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import CounterButton from "../../islands/CounterButton.jsx?island";
import { Island } from "@hubspot/cms-components";

export const meta = {
    label: "My Text Module",
    icon: "text", 
    description: "A simple module with one text field",
  };
  
  export const fields = 
    <ModuleFields>
        <TextField
        name="headline"
        label="Headline"
        default="Getting Started with CMS React"
        />
  </ModuleFields>
  
  
  export function Component() {
    return (
        <div>
            <Island module={CounterButton} defaultCount={7} />
            </div>
    )
  }