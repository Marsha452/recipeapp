import React, { useEffect, useState } from 'react'; 
import './App.css';
import Recipe from './components/Recipe';

const App = () =>{ 
const APP_ID = "632559c6";
const APP_KEY = "926e8c910afe16a7625bc0248e7d7ee3";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('tofu')

useEffect(() => {
  getRecipes();
 }, [query]);

const getRecipes = async () => {
  const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}


return (
    <div className= "App">
      <h1 className='header'>Get unlimited access to recipes that fits the way you eat.</h1>
      <form onSubmit= {getSearch} className = "search-form">
        <input className="search-bar" type="text" value= {search} onChange={updateSearch} placeholder='...Lookup Recipes' />
        <button className="search-button" type="submit">
          Search
          </button>
      </form>
      <div className="recipes">
      {recipes.map ( recipe => (
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        key={recipe.recipe.label}
        />
      ))}
      </div>
    </div>
  );

  }
export default App;
