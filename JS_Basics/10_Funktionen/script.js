let a = 2;
let b = 3;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function supercalulation(a, b) {
    return (a + b) / 2 * a;
}

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(supercalulation(a, b));

function printEasterDate(year) {
    n = year - 1900
    a = n % 19
    b = ((7 * a + 1) / 19)
    m = (11 * a + 4 - b) % 29
    q = Math.floor (n / 4)
    w = (n + q + 31 - m) % 7
    p = Math.floor (25 - m - w)

    if (p > 0) {
        console.log("Ostersonntag ist der " + p + ". April");
    }
    else {
        console.log("Ostersonntag ist der " + p + 31 + ". März");
    }
}

printEasterDate(2023)