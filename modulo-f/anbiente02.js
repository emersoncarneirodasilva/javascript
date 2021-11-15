/*
function parOuImpar(n) {
    if (n % 2 == 0) {
        return "Par!"
    } else {
        return "Impar!"
    }
}

let res = parOuImpar(6)
console.log(res)
*/

//---------------------------------------------------------------------------

/*
function soma(n1=0, n2=0) {
    return n1 + n2
}

let res = soma(5)
console.log(res)
*/

//---------------------------------------------------------------------------

/*
let v = function(n) {
    return n*2
}

let res = v(7)
console.log(res)
*/

//---------------------------------------------------------------------------

// 5! = 5 x 4 x 3 x 2 x 1
/*
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

let res = fatorial(5)
console.log(res)
*/
/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
n! = n x (n-1)!
1! = 1
*/ 

function fatorial(n) {             // forma recursiva
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

let res = fatorial(5)
console.log(res)
