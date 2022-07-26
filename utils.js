const ingredients = require("./ingredients");

function convertToGrams(weight, unit) {
  const table = {
    oz: 28.35,
    lb: 454,
  };
  return weight * table[unit];
}

function getNutrients(item) {
  let [weight, unit, ingredient] = item;

  if (unit !== "g") {
    weight = convertToGrams(weight, unit);
    unit = "g";
  }
  const { calories, protein, fat, carbohydrates } = ingredients[ingredient];
  const multiplier = weight / 100;
  return {
    calories: calories * multiplier,
    protein: protein * multiplier,
    fat: fat * multiplier,
    carbohydrates: carbohydrates * multiplier,
  };
}

function sumMacros(...rest) {
  const sum = {
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
  };
  rest.forEach((item) => {
    Object.keys(rest[0]).forEach((macro) => {
      sum[macro] = sum[macro] + item[macro];
    });
  });
  return sum;
}

function makeLabel(recipe, portions) {
  let macros = {
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
  };
  recipe.forEach((item) => {
    const itemMacros = getNutrients(item);
    macros = sumMacros(macros, itemMacros);
  });

  return {
    calories: macros.calories / portions,
    protein: macros.protein / portions,
    fat: macros.fat / portions,
    carbohydrates: macros.carbohydrates / portions,
  };
}

function printDay(label, macros) {
  console.log(label);
  console.log(`Calories:      ${macros.calories}`);
  console.log(`Carbohydrates: ${macros.carbohydrates}`);
  console.log(`Protein:       ${macros.protein}`);
  console.log(`Fat:           ${macros.fat}`);
}

module.exports = {
  makeLabel,
  sumMacros,
  printDay,
};
