// es una funcion que devuelve una funcion y puede  recordar los vaslores 
// ejemplo
// function buildSum(paramA){
//     return function (paramB){
//         return paramA + paramB;
//     }
// }
// se pueed  escribir

const buildSum = paramA => paramB => paramA + paramB ;

const add = buildSum(10)

let pepe = buildSum(5)

console.log(add(55))

console.log('este es pepe' + pepe(5))