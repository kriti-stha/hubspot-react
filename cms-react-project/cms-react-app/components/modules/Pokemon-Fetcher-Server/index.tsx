import axios from 'axios';
import { request as graphqlRequest, gql } from 'graphql-request';
import { FileSystemCache, NodeFetchCache } from 'node-fetch-cache';
import {
  withUrlAndQuery,
  logInfo,
  ModuleDataFetchResult,
  ModulePropsWithoutSSP,
} from '@hubspot/cms-components';
import componentStyles from '../../../styles/component.module.css';
import PokeCard from '../../PokeCard';

import { DataFetchingLibs, settlePromise, transformPokemonData } from '../../../utils/index.js';
import { useState } from 'react';


type FieldValues = {
  fetchUrl: string;
  useCustomFetchUrl: boolean;
  pokemon: 'bulbasaur' | 'charizard' | 'eevee' | 'mew' | 'mewtwo' | 'pikachu' | 'squirtle';
  dataFetchingLib: DataFetchingLibs;
};

type CustomModulePropsWithoutSSP = Omit<
  ModulePropsWithoutSSP,
  'fieldValues'
> & {
  fieldValues: FieldValues | Record<string, any>;
};

const POKEMON_GRAPHQL_SCHEMA_URL = 'https://beta.pokeapi.co/graphql/v1beta/';

const pokemonQuery = gql`
  query samplePokeAPIquery($pokemonName: String) {
    pokemon_v2_pokemon(where: { name: { _eq: $pokemonName } }) {
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

// Using node-fetch-catch can optimize your data fetching by caching data locally within the
// Lambda function's file system which will help improve performance and reduce latency.
const nodeFetchCache = NodeFetchCache.create({
  cache: new FileSystemCache({
    cacheDirectory: '/tmp/nodeFetchCache',
  }),
});

export function getDataPromise(fieldValues: FieldValues) {
  const { dataFetchingLib, useCustomFetchUrl } = fieldValues;
  const fetchUrl = urlToFetch(fieldValues);
  const start = Date.now();

  if (dataFetchingLib && !useCustomFetchUrl) {
    if (dataFetchingLib === 'axios') {
      return axios.get(fetchUrl).then((response: any) => {
        return {
          json: response.data,
          duration: Date.now() - start,
        };
      });
    }

    if (dataFetchingLib === 'graphql-request') {
      return graphqlRequest(POKEMON_GRAPHQL_SCHEMA_URL, pokemonQuery, {
        pokemonName: fieldValues.pokemon,
      }).then((value: any) => {
        return {
          json: value,
          duration: Date.now() - start,
        };
      });
    }

    if (dataFetchingLib === 'nodeFetchCache') {
      return nodeFetchCache(fetchUrl).then(async (response) => {
        return {
          json: await response.json(),
          duration: Date.now() - start,
        };
      });
    }

    if (dataFetchingLib === 'fetch') {
      logInfo('here');
      if (!fetch) {
        throw new Error(
          `Fetch API is not defined, node version = ${process.versions.node}`,
        );
      }

      return fetch(fetchUrl).then(async (response) => {
        return {
          json: await response.json(),
          duration: Date.now() - start,
        };
      });
    }
  } else {
    if (!fetch) {
      throw new Error(
        `Fetch API is not defined, node version = ${process.versions.node}`,
      );
    }

    return fetch(fetchUrl).then(async (response) => {
      return {
        json: await response.json(),
        duration: Date.now() - start,
      };
    });
  }
}

export const getServerSideProps = withUrlAndQuery(
  async (
    moduleProps: CustomModulePropsWithoutSSP,
    extraDeps,
  ): Promise<ModuleDataFetchResult> => {
    const fieldValues = moduleProps.fieldValues as FieldValues;
    const { url } = extraDeps;

    logInfo('before data fetch');
    const dataPromise = getDataPromise(fieldValues) as Promise<{
      json: JSON;
      duration: number;
    }>;

    const results = await settlePromise(dataPromise);
    logInfo('after data fetch');

    return {
      serverSideProps: { results, urlSearchParams: url.search },
      caching: {
        cacheControl: {
          maxAge: 60,
        },
      },
    };
  },
);

export function Component({
  fieldValues,
  serverSideProps = { results: {}, urlSearchParams: '' },
}: {
  fieldValues: FieldValues;
  serverSideProps: {
    results: Record<string, any>;
    urlSearchParams: string;
  };
}) {
  const [text, setText] = useState('');
  const { results } = serverSideProps;
  const { json, duration } = results.value;
  const { useCustomFetchUrl, dataFetchingLib, fetchUrl, pokemon } = fieldValues;
  const lib = useCustomFetchUrl ? 'fetch' : dataFetchingLib;

  console.log('Pokemon Field:', pokemon);

  return (
    <div className={componentStyles.summary}>
      <input 
        type="text" 
        placeholder="Enter text here..."
        onChange={(e) => setText(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '8px', 
          marginBottom: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      <h2>
        Fetched data from <code>{urlToFetch(fieldValues)}</code> via {lib} in{' '}
        {duration}ms
      </h2>
      {useCustomFetchUrl ? (
        <details>
          <summary>
            <h3 style={{ display: 'inline', cursor: 'pointer' }}>
              ...via {fetchUrl} <small>(duration = {duration}ms)</small>
            </h3>
          </summary>
          <br />
          <code>
            <pre>{JSON.stringify(results.value, null, 2)}</pre>
          </code>
        </details>
      ) : (
        json && (
          <PokeCard
            pokemonData={transformPokemonData(json, dataFetchingLib)}
            key={dataFetchingLib}
          />
        )
      )}
    </div>
  );
}

function urlToFetch(fieldValues: FieldValues) {
  if (fieldValues.useCustomFetchUrl) {
    return fieldValues.fetchUrl;
  }

  return `https://pokeapi.co/api/v2/pokemon/${fieldValues.pokemon}`;
}

export const meta = {
  label: 'Fetcher',
};

// @ts-ignore-next-line
export { fields } from './fields.js';
