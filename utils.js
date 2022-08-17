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

function makeLabel(recipe, portions = 1) {
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

function generateRow(items, sum, fieldName) {
  let row = "";
  items.forEach((item) => {
    row += `${Math.trunc(item[fieldName]).toString().padEnd(4)} + `;
  });
  row = row.slice(0, -2);
  row += `= ${Math.trunc(sum[fieldName]).toString().padEnd(4)}`;
  return row;
}

function printDay(label, macros) {
  const summed = sumMacros(...macros);
  console.log("\n\n" + label);
  console.log(`Calories:      ${generateRow(macros, summed, "calories")}`);
  console.log(`Carbohydrates: ${generateRow(macros, summed, "carbohydrates")}`);
  console.log(`Protein:       ${generateRow(macros, summed, "protein")}`);
  console.log(`Fat:           ${generateRow(macros, summed, "fat")}`);
}

module.exports = {
  makeLabel,
  sumMacros,
  printDay,
};
