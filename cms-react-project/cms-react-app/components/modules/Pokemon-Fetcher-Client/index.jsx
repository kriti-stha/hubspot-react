import { Island } from '@hubspot/cms-components';
import Pokemon from '../../islands/Pokemon.jsx?island';
import ErrorBoundary from '../../ErrorBoundary';

export function Component({pokemonField}) {

  return (
    <div>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Island module={Pokemon} pokemonField={pokemonField} pokemonList ={[
        ['bulbasaur', 'Bulbasaur'],
        ['charizard', 'Charizard'],
        ['eevee', 'Eevee'],
        ['mew', 'Mew'],
        ['mewtwo', 'Mewtwo'],
        ['pikachu', 'Pikachu'],
        ['squirtle', 'Squirtle'],
      ]}  />
      </ErrorBoundary>
    </div>
  );
}

export const meta = {
  label: 'Pokemon Fetcher',
};

export { fields } from './fields.jsx';


