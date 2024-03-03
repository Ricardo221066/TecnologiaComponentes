import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
        );
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemons();
  }, []);

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedPokemon({
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        baseExperience: data.base_experience,
        height: data.height,
        weight: data.weight,
      });
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  const handleCardClick = (pokemon) => {
    fetchPokemonDetails(pokemon.url);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="card-container">
        {filteredPokemons.map((pokemon) => (
          <div
            className={`card ${selectedPokemon &&
              selectedPokemon.name === pokemon.name
              ? 'selected'
              : ''}`}
            key={pokemon.name}
            onClick={() => handleCardClick(pokemon)}
          >
            <h2>{pokemon.name}</h2>
            {selectedPokemon && selectedPokemon.name === pokemon.name ? (
              <div className="details">
                <img
                  src={selectedPokemon.image}
                  alt={selectedPokemon.name}
                  className="pokemon-image"
                />
                <p>
                  <strong>Base Experience:</strong> {selectedPokemon.baseExperience}
                </p>
                <p>
                  <strong>Height:</strong> {selectedPokemon.height}
                </p>
                <p>
                  <strong>Weight:</strong> {selectedPokemon.weight}
                </p>
              </div>
            ) : (
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.indexOf(pokemon) + 1}.png`}
                alt={pokemon.name}
                className="pokemon-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


