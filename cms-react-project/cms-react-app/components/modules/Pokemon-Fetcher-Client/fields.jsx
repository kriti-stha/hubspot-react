import React from 'react';
import {
  ChoiceField,
  ModuleFields,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <ChoiceField
      name="pokemonField"
      label="Pokemon"
      required={false}
      locked={false}
      multiple={true}
      display="select"
      default="pikachu"
      choices={[
        ['bulbasaur', 'Bulbasaur'],
        ['charizard', 'Charizard'],
        ['eevee', 'Eevee'],
        ['mew', 'Mew'],
        ['mewtwo', 'Mewtwo'],
        ['pikachu', 'Pikachu'],
        ['squirtle', 'Squirtle'],
      ]}
    />
  </ModuleFields>
); 

//[ERROR] There are 1 validation errors for build #70. Please view the details below.
//Error(s) in module `@projects/cms-react-project/cms-react-app/components/modules/Pokemon-Fetcher-Client` 
//*Not a valid choice for pokemonField

//above error occurs when i set default to be the array of choices as choices do not render for some reason.
//hence defaulting it to pikachu and hardcoding an array for now.

