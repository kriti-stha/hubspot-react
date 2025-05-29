import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import JokeFetcher from "../../islands/Joke.jsx?island";

export const meta = {
    label: "My Joke Module",
    icon: "text", 
  };
  
  export const fields = 
    <ModuleFields>
        <TextField
        name="joke"
        label="joke"
        default="joke"
        />
  </ModuleFields>
  
  
  export function Component() {

    return (
        <div>
            <Island module={JokeFetcher} defaultCount={1} />
        </div>
    )
  }