import React from 'react';
import logo from './logo.svg';
import './App.css';

const recipes = [
  {
    name: 'Beef Stroganoff',
    description: 'A classic Russian dish made with tender beef, onions, and mushrooms in a rich sour cream sauce.',
    image: 'BeefStroganoff.jpg',
    url: 'BeefStroganoffRecipe'
  },
  {
    name: 'Chicken Parmesan',
    description: 'A delicious Italian-American dish made with breaded chicken, marinara sauce, and melted cheese.',
    image: 'ChickenParmesan.jpg',
    url: 'ChickenParmesanRecipe'
  },
  {
    name: 'Pork Fried Rice',
    description: 'A flavorful Chinese-inspired dish made with tender pork, rice, and mixed vegetables.',
    image: 'PorkFriedRice.jpg',
    url: 'PorkFriedRiceRecipe'
  },
  {
    name: 'Fish Tacos',
    description: 'A popular Mexican dish made with crispy fish, tangy cabbage slaw, and a creamy sauce.',
    image: 'FishTacos.jpg',
    url: 'FishTacosRecipe'
  }
  ,
  {
    name: 'Beef Stroganoff',
    description: 'A classic Russian dish made with tender beef, onions, and mushrooms in a rich sour cream sauce.',
    image: 'BeefStroganoff.jpg',
    url: 'BeefStroganoffRecipe'
  },
  {
    name: 'Chicken Parmesan',
    description: 'A delicious Italian-American dish made with breaded chicken, marinara sauce, and melted cheese.',
    image: 'ChickenParmesan.jpg',
    url: 'ChickenParmesanRecipe'
  },
  {
    name: 'Pork Fried Rice',
    description: 'A flavorful Chinese-inspired dish made with tender pork, rice, and mixed vegetables.',
    image: 'PorkFriedRice.jpg',
    url: 'PorkFriedRiceRecipe'
  },
  {
    name: 'Fish Tacos',
    description: 'A popular Mexican dish made with crispy fish, tangy cabbage slaw, and a creamy sauce.',
    image: 'FishTacos.jpg',
    url: 'FishTacosRecipe'
  }
];

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card" onClick={() => window.open(`/${recipe.url}`, '_blank')}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-description">
        <p>{recipe.description}</p>
        <a href={`/${recipe.url}`} className="recipe-link">View Recipe</a>
      </div>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recetas de cocina</h1>
        <input type="text" className="recipe-name-input" value="Nombre de la receta" disabled />
      </header>
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;