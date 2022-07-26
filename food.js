const meals = require("./meals");
const { sumMacros, makeLabel, printDay } = require("./utils");

const beefStewPortion = makeLabel(meals.beefStew, 18);
const stirFryPortion = makeLabel(meals.stirFry, 14);
const ricePortion = makeLabel(meals.rice, 1);
const proteinShakePortion = makeLabel(meals.proteinShake, 1);
const cupOfCoffeePortion = makeLabel(meals.cupOfCoffee, 1);

const targetMacros = {
  calories: -1854,
  protein: -190,
  fat: -41,
  carbohydrates: -181,
};

const dailyIntake = [
  beefStewPortion,
  ricePortion,
  stirFryPortion,
  ricePortion,
  proteinShakePortion,
  proteinShakePortion,
  proteinShakePortion,
  proteinShakePortion,
  proteinShakePortion,
  cupOfCoffeePortion,
  cupOfCoffeePortion,
  cupOfCoffeePortion,
];

printDay(
  "Beef stew w/rice, stir fry w/rice, three cups of coffee, five scoops protein",
  sumMacros(...dailyIntake)
);

printDay(
  "difference from target macros",
  sumMacros(...dailyIntake, targetMacros)
);
