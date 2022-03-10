const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

// con Jquery
// let description = $('#description')
// let calories = $('#calories')
// let carbs = $('#carbs')
// let protein = $('#protein')

// funcion para crear elementos en el dom

//const tag = t => content => `<${t}>${content} </${t}>`;
const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = []

  for (let i = 0; i < keys.length; i++) {
    let attr = keys[i]
    attrs.push(`${attr}=“${obj[attr]}"`)
  }

  const string = attrs.join(' ')

  return string
}

const tagAttrs = obj => (content = '') =>
  `<${obj.tag}${obj.attrs ? ' ' :	 ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => {
  if(typeof t === 'string') {
    return tagAttrs({ tag: t })
  }
  return tagAttrs(t)
}



// VARIABLES DE LOS INPUTS
let Description = document.getElementById('description');
let Calories = document.getElementById('calories'); 
let Carbs = document.getElementById('carbs');
let Proteinas = document.getElementById('protein');

let list = [
    {
      description: 'wewe',
      calories: 'wewe',
      carbs: 'wewe',
      protein: 'wewe',
    }
]
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
    add();
  }

}

const add = () =>{ // hago un objeto con los datois que obtengo del form

  const newItem= {
    description: Description.value,
    calories: Calories.value,
    carbs: Carbs.value,
    protein: Proteinas.value,
  }

  list.push(newItem);
  console.log(list)
  cleanInputs();
  
}

const cleanInputs = () => {
Description.value = '';
Calories.value = '';
Carbs.value = '';
Proteinas.value = '';
}