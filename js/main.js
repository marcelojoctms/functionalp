const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

// con Jquery
// let description = $('#description')
// let calories = $('#calories')
// let carbs = $('#carbs')
// let protein = $('#protein')


// VARIABLES DE LOS INPUTS
let Description = document.getElementById('Descripcion');
let Calories = document.getElementById('Calorias'); 
let Carbs = document.getElementById('Carbs');
let Proteinas = document.getElementById('Protein');

// VALORES DE LOS INPUTS
Description.value;
Calories.value;
Carbs.value;
Proteinas.value;