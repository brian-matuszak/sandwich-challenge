
const breads = [
    "Italian",
    "9-Grain Wheat",
    "Flatbread", 
    "Multigrain Flatbread",
    "Italian Herbs & Cheese"
];

const cheeses = [
   "American",
   "Monterey Cheddar", 
];

const sauces = [
    "Chipotle Southwest",
    "Mayonaise",
    "Ranch",
    "Oil",
    "Vinaigrette",
    "Mustard",
    "Vinegar",
    "Sweet Onion",
];

const meats = [
    "Ham",
    "Tuna",
    "Chicken",
    "Roast Beef",
    "Turkey",
    "None"
];

const veggies = [
    "Cucumbers",
    "Green Peppers",
    "Lettuce",
    "Tomatoes",
    "Red Onions",
    "Spinach",
    "Banana Peppers",
    "Jalapenos",
    "Black Olives",
    "Pickles",
];

const getRandomBoolean = () => {
    return Math.random() >= 0.5;
}

export const getRandomBread = () => {
    return breads[Math.floor(Math.random()*breads.length)];
}

export const getRandomCheese = () => {
    return cheeses[Math.floor(Math.random()*cheeses.length)];
}

export const getRandomFilling = () => {
    return meats[Math.floor(Math.random()*meats.length)];
}

export const getRandomToppingList = () => {
    let randomVeggieList = "";
    veggies.forEach((veggie) => {
        if(getRandomBoolean()){
            if(randomVeggieList.length > 0){
                randomVeggieList = randomVeggieList.concat(", ");
            }
            randomVeggieList = randomVeggieList.concat(veggie);
        }
    })
    return randomVeggieList;
}

export const getRandomSauceList = () => {
    let randomSauceList = "";
    sauces.forEach((sauce) => {
        if(getRandomBoolean()){
            if(randomSauceList.length > 0){
                randomSauceList = randomSauceList.concat(", ");
            }
            randomSauceList = randomSauceList.concat(sauce);
        }
    })
    return randomSauceList;
}