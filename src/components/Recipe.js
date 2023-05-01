import React from "react";
import style from '../recipe.module.css'


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div data-testid="recipe-card" className= {style.recipe}>
            <h1>{title}</h1>

            {
                ingredients ? 
                <ol>
                    {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                    ))}
                </ol>
                :
                <h2>...Loading</h2>
            }

            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
} 


export default Recipe; 