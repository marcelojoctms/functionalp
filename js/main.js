const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

// con Jquery
// let description = $('#description')
// let calories = $('#calories')
// let carbs = $('#carbs')
// let protein = $('#protein')


// VARIABLES DE LOS INPUTS
let Description = document.getElementById('description');
let Calories = document.getElementById('calories'); 
let Carbs = document.getElementById('carbs');
let Proteinas = document.getElementById('protein');

// VALORES DE LOS INPUTS
// Description.value;
// Calories.value;
// Carbs.value;
// Proteinas.value;
Description.addEventListener('keydown', () => Description.classList.remove('is-invalid'))
Calories.addEventListener('keydown', () => Calories.classList.remove('is-invalid'))
Carbs.addEventListener('keydown', () => Carbs.classList.remove('is-invalid'))
Proteinas.addEventListener('keydown', () => Proteinas.classList.remove('is-invalid'))

const validateInputs = () =>{

  Description.value ? '' : Description.classList.add('is-invalid'); 
  Calories.value ? '' :  Calories.classList.add('is-invalid'); 
  Carbs.value ? '' : Carbs.classList.add('is-invalid'); 
  Proteinas.value ? '' : Proteinas.classList.add('is-invalid'); 

  if(Description.value && Calories.value && Carbs.value && Proteinas.value) {
    console.log('OK!')
  }

}

