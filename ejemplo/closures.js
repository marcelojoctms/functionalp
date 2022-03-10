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




//Me parece mas practico e igual de legible hacer closures con arrow function , a continuación un ejemplo donde la primera función tiene 2 parámetros y la segunda uno solo :

const buildSum2 = (value1, valu2) => value3 => (value1 + valu2) * value3;
console.log(buildSum2(10, 20)(2));