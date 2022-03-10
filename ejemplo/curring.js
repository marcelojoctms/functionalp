// descompone funciones  dentro de una funcion

// ejemplo

// Sin Currying
function sumThreeNumbers(a, b, c) {
    return a + b + c
}

console.log(sumThreeNumbers(1, 2, 3)) // 6

function sumThreeNumbers(a) {
    return function(b) {
            return function(c) {
                    return a + b + c
            }
    }
}

console.log(sumThreeNumbers(1)(2)(3)) // 6