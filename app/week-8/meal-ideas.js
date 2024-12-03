"use client";
import { useState, useEffect } from 'react';

// Function to fetch meal ideas based on an ingredient
async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || []; // Return an empty array if no meals are found
}

// Function to fetch details of a meal to get its ingredients
async function fetchMealDetails(idMeal) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState({});
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Load meal ideas whenever the ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      const mealList = await fetchMealIdeas(ingredient);
      setMeals(mealList);
      setMealDetails({}); // Reset details for new search
      setSelectedMeal(null); // Reset any selected meal
    }
    loadMealIdeas();
  }, [ingredient]);

  // Toggle display of ingredients for a meal
  const handleMealClick = async (meal) => {
    if (selectedMeal === meal.idMeal) {
      setSelectedMeal(null); // Deselect if clicked again
    } else {
      if (!mealDetails[meal.idMeal]) {
        const detail = await fetchMealDetails(meal.idMeal);
        setMealDetails(prev => ({ ...prev, [meal.idMeal]: detail }));
      }
      setSelectedMeal(meal.idMeal);
    }
  };

  return (
    <div className="meal-ideas bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Meal Ideas for "{ingredient}"</h2>
      <ul className="space-y-4">
        {meals.length > 0 ? (
          meals.map(meal => (
            <li 
              key={meal.idMeal} 
              onClick={() => handleMealClick(meal)} 
              style={{ cursor: "pointer" }} 
              className="p-4 border rounded hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-800">{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-24 h-24 object-cover rounded-md mt-2" />
              
              {/* Toggle ingredient display on click */}
              {selectedMeal === meal.idMeal && mealDetails[meal.idMeal] && (
                <div className="ingredients mt-2 p-2 bg-gray-100 rounded border border-gray-300">
                  <h4 className="font-semibold text-gray-800">Ingredients:</h4>
                  <ul className="list-disc pl-5">
                    {Object.keys(mealDetails[meal.idMeal])
                      .filter(key => key.startsWith("strIngredient") && mealDetails[meal.idMeal][key])
                      .map((key, index) => (
                        <li key={index} className="text-gray-600">
                          {mealDetails[meal.idMeal][key]} - {mealDetails[meal.idMeal][`strMeasure${index + 1}`]}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </li>
          ))
        ) : (
          <p className="text-gray-600">No meals found for "{ingredient}".</p>
        )}
      </ul>
    </div>
  );
}