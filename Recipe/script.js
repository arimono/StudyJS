function searchFunction() {
    var searchClick = document.getElementById("search_text");
    if (searchClick.style.display === "block") {
        searchClick.style.display = "none";
    } else {
        searchClick.style.display = "block";
        
    }
  }

getRandomMeal();
const meals = document.getElementById('meals');

async function getRandomMeal(){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);
    addMeal(randomMeal, true);
}

async function getMealById(id){
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'+id);
}

async function getElementBySearch(term){
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'+term);
}

function addMeal(mealData, random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML =`
    
    ${random ? `
    <div class="meal_header">
    <span class="random">
    <i class="fas fa-angle-right"></i> Random Recipe
    </span>` : ''}
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>

    <div class="meal_body">
        <h4>${mealData.strMeal}</h4>
        <button class="love_react">
            <i class="far fa-heart"></i>
        </button>
    </div>
    `;
    meals.appendChild(meal);
}