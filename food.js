const meals = require("./meals");
const { sumMacros, makeLabel, printDay } = require("./utils");

const beefStewPortion = makeLabel(meals.beefStew, 18);
const stirFryPortion = makeLabel(meals.stirFry, 14);
const ricePortion = makeLabel(meals.rice);
const proteinShakeTriplePortion = makeLabel(meals.proteinShake, 0.3333);
const proteinShakeDoublePortion = makeLabel(meals.proteinShake, 0.5);
const cupOfCoffeeWithSugarDoublePortion = makeLabel(
  meals.cupOfCoffeeWithSugar,
  0.5
);
const cupOfCoffeeWithSugarPortion = makeLabel(meals.cupOfCoffeeWithSugar);
const cupOfCoffeeWithMilkPortion = makeLabel(meals.cupOfCoffeeWithMilk);
const cupOfCoffeeWithMilkTriplePortion = makeLabel(
  meals.cupOfCoffeeWithMilk,
  0.33333
);
const morningPreWorkoutPortion = makeLabel(meals.morningPreWorkout, 1);
const tunaRicePortion = makeLabel(meals.tunaRice);
const tripleMetamucil = makeLabel(meals.tripleMetamucil);
const doubleMetamucil = makeLabel(meals.tripleMetamucil, 1.5);

const targetMacros = {
  calories: -1854,
  protein: -190,
  fat: -41,
  carbohydrates: -181,
};

const dailyIntake1 = [
  beefStewPortion,
  ricePortion,
  stirFryPortion,
  ricePortion,
  proteinShakeTriplePortion,
  proteinShakeDoublePortion,
];

const dailyIntake2 = [
  tunaRicePortion,
  beefStewPortion,
  ricePortion,
  proteinShakeTriplePortion,
  proteinShakeDoublePortion,
];

const mealOptions = [
  beefStewPortion,
  stirFryPortion,
  ricePortion,
  proteinShakeTriplePortion,
  proteinShakeDoublePortion,
  cupOfCoffeeWithSugarDoublePortion,
  cupOfCoffeeWithMilkPortion,
  tunaRicePortion,
  tripleMetamucil,
];

const dailyIntake = [
  proteinShakeTriplePortion,
  tunaRicePortion,
  proteinShakeDoublePortion,
  tripleMetamucil,
  beefStewPortion,
  ricePortion,
  // beefStewPortion,
  // stirFryPortion,
  // ricePortion,
  // proteinShakeDoublePortion,
  // cupOfCoffeeWithMilkPortion,
];

const dailyIntake_0815 = [
  proteinShakeTriplePortion,
  cupOfCoffeeWithSugarPortion,
  // tunaRicePortion,
  proteinShakeDoublePortion,
  // tripleMetamucil,
  doubleMetamucil,
  beefStewPortion,
  ricePortion,
  stirFryPortion,
  ricePortion,
  // cupOfCoffeeWithMilkPortion,
];

const dailyIntake_0816 = [
  proteinShakeTriplePortion,
  // cupOfCoffeeWithSugarPortion,
  morningPreWorkoutPortion,
  // tunaRicePortion,
  // proteinShakeDoublePortion,
  // tripleMetamucil,
  // doubleMetamucil,
  // beefStewPortion,
  // ricePortion,
  // stirFryPortion,
  // beefStewPortion,
  // ricePortion,
  // cupOfCoffeeWithMilkPortion,
];

printDay("difference from target macros", [...dailyIntake_0816, targetMacros]);
