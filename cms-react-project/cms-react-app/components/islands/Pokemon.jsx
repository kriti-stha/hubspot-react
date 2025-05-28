import { useEffect, useState } from 'react';
import componentStyles from '../../styles/component.module.css';
import PokeCard from '../PokeCard.tsx';

const Pokemon = ({inputText, pokemonField, pokemonList }) => {
  const [text, setText] = useState("");
  const [item, setItem] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [debouncedText, setDebouncedText] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  const formatPokemonData = (data) => {
    const { name: pokemonName, weight, sprites, height } = data || {};
    const profileImage = sprites?.other?.dream_world?.front_default;
    return { pokemonName, weight, profileImage, height };
  };

  const fetchPokemon = async (searchParam) => {
    if (!searchParam) return;

    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchParam.toLowerCase()}`);
      
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      console.error('Error fetching pokemon:', err);
      setError(true);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedText) {
      setItem(null);
      setSelectedButton(null);
      fetchPokemon(debouncedText);
      return;
    }

    if (item) {
      setText('');
      setDebouncedText('');
      fetchPokemon(item);
      return;
    }

    setPokemon(null);
  }, [debouncedText, item]);

  const handleButtonClick = (pokemonName) => {
    setText('');
    setDebouncedText('');
    setItem(pokemonName);
    setSelectedButton(pokemonName);
  };

  return (
    <div className={componentStyles.summary}>
      <input
        type="text"
        placeholder="Enter Pokemon name..."
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      {(Array.isArray(pokemonField) ? pokemonField : Array.isArray(pokemonList) ? pokemonList : [['pikachu', 'pikachu!']]).map((item) => (
        <button 
          key={item[0]} 
          onClick={() => handleButtonClick(item[1])}
          style={{ 
            margin: '0 7px 7px 0',
            backgroundColor: selectedButton === item[1] ? '#4CAF50' : '#f0f0f0',
            color: selectedButton === item[1] ? 'white' : 'black',
            border: '1px solid #ccc',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          {item[1]}
        </button>
      ))}
      <h2>
        {loading ? 'Loading...' : pokemon ? `Result for Pokemon: ${pokemon?.name}` : 'Enter a Pokemon name or select from the list above'}
      </h2>

      {error ? (
        <div className={componentStyles.summary}>Error loading Pokemon data!</div>
      ) : pokemon ? (
        <PokeCard pokemonData={formatPokemonData(pokemon)} />
      ) : (
        <div>Search for a pokemon above!</div>
      )}
    </div>
  );
};

export default Pokemon;