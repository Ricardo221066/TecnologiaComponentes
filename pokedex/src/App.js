// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        const data = await response.json();
        setPokemons([
          {
            name: data.name,
            image: data.sprites.front_default,
            baseExperience: data.base_experience,
            height: data.height,
            weight: data.weight,
            type: data.types.map((type) => type.type.name).join(', '),
            abilities: data.abilities.map((ability) => ability.ability.name).join(', '),
            stats: data.stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat })),
          },
        ]);
        setSelectedPokemon(null);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemon();
  }, [searchTerm]);

  const handleCardClick = (pokemon) => {
    if (selectedPokemon && selectedPokemon.name === pokemon.name) {
      setSelectedPokemon(null);
    } else {
      setSelectedPokemon(pokemon);
    }
  };

  return (
    <div className="pokedex">
      <header>
        <h1>Pokedex</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar Pokémon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <div className="content">
        <div className="card-container">
          {pokemons.map((pokemon) => (
            <div
              className="card"
              key={pokemon.name}
              onClick={() => handleCardClick(pokemon)}
            >
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="pokemon-image"
              />
            </div>
          ))}
        </div>
        <div className="stats-container">
          {selectedPokemon && (
            <div className="stats">
              <h2>Estadísticas de {selectedPokemon.name}</h2>
              <p>
                <strong>Base Experience:</strong> {selectedPokemon.baseExperience}
              </p>
              <p>
                <strong>Height:</strong> {selectedPokemon.height}
              </p>
              <p>
                <strong>Weight:</strong> {selectedPokemon.weight}
              </p>
              <p>
                <strong>Type:</strong> {selectedPokemon.type}
              </p>
              <p>
                <strong>Abilities:</strong> {selectedPokemon.abilities}
              </p>
              <p>
                <strong>Stats:</strong>
              </p>
              <ul>
                {selectedPokemon.stats.map((stat) => (
                  <li key={stat.name}>
                    <strong>{stat.name}:</strong> {stat.value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;













