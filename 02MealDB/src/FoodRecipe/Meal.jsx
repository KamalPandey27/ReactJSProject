import React, { useEffect, useState } from "react";

function Meal() {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState("All");
  function showFood(value) {
    setSelectedData(value);
    if (value === "All") {
      setFilteredData(apiData);
    } else {
      const updateData = apiData.filter((e) => e.strArea === value);
      setFilteredData(updateData);
    }
  }

  useEffect(() => {
    async function ApiFetch() {
      try {
        let response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        let responseData = await response.json();
        setApiData(responseData.meals);
        setFilteredData(responseData.meals); // Initialize filteredData with all meals
      } catch (error) {
        console.log("Check your code:", error);
      }
    }
    ApiFetch();
  }, []);

  return (
    <>
      <div className="flex gap-3 flex-wrap m-3">
        {["All", "Indian", "American", "British", "Chinese", "Thai"].map(
          (e) => (
            <button
              key={e}
              className={`border p-2 transition-all duration-300 ease-in-out ${
                selectedData === e
                  ? "bg-black text-white"
                  : " hover:bg-gray-400 hover:text-white"
              }`}
              onClick={() => showFood(e)}
            >
              {e}
            </button>
          )
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredData.map((meal) => (
          <div key={meal.idMeal} className="border p-4 rounded-md">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-[200px] rounded"
            />
            <p className="text-center font-semibold">{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Meal;
