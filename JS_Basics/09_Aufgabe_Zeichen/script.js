console.log("Aufgabe 1:");
console.log("");

for (let index = 0; index < 4; index++) {
    if (index % 2 == 0) {
        console.log("OOOO")
    } else {
        console.log("XXXX")
    }
}

console.log("");
console.log("Aufgabe 2:");
console.log("");

let evenNumbers = 0;

for (let index = 1; index < 101; index++) {
    if (index % 2 == 0) {
        evenNumbers += index;
    }
}

console.log(evenNumbers);

console.log("");
console.log("Aufgabe 3:")
console.log("");

for (let index = 0; index < 5; index++) {
    if (index == 0) {
        console.log("XXXX")
    }
    if (index == 1) {
        console.log("X  X")
    }
    if (index == 2) {
        console.log("XXXX")
    }
    if (index == 3) {
        console.log("X X")
    }
    if (index == 4) {
        console.log("X  X")
    }
}