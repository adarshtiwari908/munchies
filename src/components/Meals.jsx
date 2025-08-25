import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    //define the async function inside the effect
    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');
        if (!response.ok) {
            //....
        }
        const meals = await response.json();
        setLoadedMeals(meals);
    }

    fetchMeals();
  },[]);

    return (
        /*<ul id="meals">: This is an unordered list (<ul>).
        Think of it as a container that will hold a bunch of list items, each representing a meal.*/
        <ul id="meals">
            {loadedMeals.map(meal => 
            <MealItem key={meal.id} meal = {meal}></MealItem>
        )}
        </ul>
    );
}