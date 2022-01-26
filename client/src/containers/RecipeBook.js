import React, {useEffect, useState} from "react";
import RecipesList from "../components/RecipesList";
import Recipe from "./Recipe";
import RecipeDetail from "./RecipeDetail";

// import { useMatch } from "@reach/router"


// const RecipeID = useMatch("/films/:id").params.id;

const RecipeBook = () => {

    const RecipesApi = [
        {
          name: "recipes", 
          url: "http://localhost:5000/api/recipes"
        }
      ]

      const [recipesList, setRecipesList] = useState([]);
      const [selectedRecipe, setSelectedRecipe] = React.useState(null);


      useEffect(() => {
            loadRecipes(RecipesApi[0].url)
            return () => {
            }
        }, [])
      
      const loadRecipes = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipesList(recipesJson))
        }

      const onRecipeClick = function(recipe) {
        setSelectedRecipe(recipe);
      }

      const closeRecipe = function() {
        setSelectedRecipe(null);
    }

    return(
        <>
        <h1>Your Recipes</h1>
        {selectedRecipe ? <RecipeDetail recipe = {selectedRecipe} closeRecipe = {closeRecipe}/> : null};
        <RecipesList recipes={recipesList} onRecipeClick = {onRecipeClick} />
        </>
    );
};

export default RecipeBook;