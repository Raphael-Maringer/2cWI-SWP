let banana = "Banane";
apple = "Apple";
bananaPricePerKilo = 2.14;
applePricePerKilo = 3.43;
appleWeight = 0.34;
bananaWeight = 0.22;

pricePerApple = applePricePerKilo * appleWeight;
pricePerBanana = bananaPricePerKilo * bananaWeight;

console.log("Ein Apfel kostet " + pricePerApple + "€");

console.log("Eine Banane kostet " + pricePerBanana + "€");

result= 1/appleWeight;
console.log("Ein Kilogramm Äpfel entspricht " + result + " Äpfeln");

result= 1/bananaWeight;
console.log("Ein Kilogramm Bananen entspricht " + result + " Bananen");

result = pricePerApple * 8;
console.log("8 Äpfel kosten " + result + "€");

result = pricePerBanana * 17;
console.log("17 Bananen kosten " + result + "€");

result = applePricePerKilo * 1000;
console.log("1 Tonne Äpfel kosten " + result + "€");

result = bananaPricePerKilo * 1000;
console.log("1 Tonne Bananen kosten " + result + "€");
