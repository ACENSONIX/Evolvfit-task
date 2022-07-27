// {
//     "name":"milk",
//     "calories":65 ,
//     "carbs":5,
//     "protien":3.3,
//     "fat":4,
//     "acceptedUnits":"ml",
//     "itemWeight":100
// },
// {
//     "name":"eggs",
//     "calories":150 ,
//     "carbs":0,
//     "protien":12,
//     "fat":11,
//     "acceptedUnits":"item",
//     "itemWeight":100
// },
// {
//     "name":"chicken",
//     "calories":150 ,
//     "carbs":0,
//     "protien":25,
//     "fat":25,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },
// {
//     "name":"apple",
//     "calories":56 ,
//     "carbs":12,
//     "protien":0.3,
//     "fat":0,
//     "acceptedUnits":"g"
//     "itemWeight":100
// }
// {
//     "name":"banana",
//     "calories":80 ,
//     "carbs":20,
//     "protien":1,
//     "fat":0,
//     "acceptedUnits":"g",
//     "itemWeight":100
// },
// {
//     "name":"rice",
//     "calories":120 ,
//     "carbs":30,
//     "protien":2,
//     "fat":0,
//     "acceptedUnits":"g"
//     "itemWeight":100
// }
// {
//     "name":"bread",
//     "calories":230 ,
//     "carbs":50,
//     "protien":8,
//     "fat":2,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },
// {
//     "name":"fish",
//     "calories":200 ,
//     "carbs":8,
//     "protien":20,
//     "fat":10,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },
// {
//     "name":"cucumber",
//     "calories":10,
//     "carbs":2,
//     "protien":0.6,
//     "fat":0,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },

function OptimiseMeal(maxcalories, foodItems) {
  let maxprotien = 0.25 * maxcalories;
  var meal = {
    mealItems: [],
  };
  let curr_calories = 0;
  let curr_protien = 0;
  for (var i = 0; i < foodItems.length && meal.mealItems.length <= 4; i++) {
    var foodItem = foodItems[i];
    if (curr_calories <= maxcalories && curr_protien <= maxprotien) {
      meal.mealItems.push(foodItem);
      curr_calories += foodItem.calories;
      curr_protien += foodItem.protien;
    }
  }

  while (curr_calories < maxcalories) {
    var foodItem = foodItems[0];
    meal.mealItems.push(foodItem);
    curr_calories += foodItem.calories;
    curr_protien += foodItem.protien;
  }

  console.log(curr_calories, curr_protien);
  return meal;
}

export default OptimiseMeal;
