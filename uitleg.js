// Array at() word gebruikt om een bepaald object in de lijst te printen zoals:
const fruits = ["Banaan", "Appel", "Annanas"]; // Dit is de lijst
let fruit = fruits.at(0); //Hier zeggen we dat een variable fruit moet gelijk zijn aan het 0de element in de lijst
console.log(fruit); //Hier print hij dat element
//Dit kan ook zo geschreven worden
let fruit2 = fruits[0];
console.log(fruit2);
// Array join() word gebruikt om element van de lijst tot een string te maken maar je kan er ook een scheidingsteken aan toevoegen zoals:
const Fruits = ["Banana", "Orange", "Apple", "Mango"]; // Dit is de lijst
console.log(Fruits.join(" * ")); //Hiermee print je alle elementen uit de lijst als een srting met * tussen de elementen
//Array pop() dit verwijderd de laaste element van de lijst zoals je kan zien in dit voorbeeld:
const FRUIT = ["Banana", "Orange", "Apple", "Mango"]; // Dit is de lijst
console.log(FRUIT.pop()); // Hier print je het element die is verwijderd.
// Array unshift() voegt een nieuwe element toe op de plaats van het  eerste element in de lijst en retourneert de lengte van de lijst zoals in dit voorbeeld:
const Merken = ["Audi", "Kia", "Volkswagen"]; //Dit is de lijst
console.log(Merken.unshift("Mercedes")); //Dit voegt het element "Mercedes" toe op de plaats van audi en print de lijstlengte
//Array delete() verwijderd een element in de lijst maar op de plek van het verwijderd element komt undefind te staan.
const cijfers = [1, 2, 3, 4, 5]; // dit is de lijst
delete cijfers[2]; // Hier verwijderd hij het element op plaats drie
console.log(cijfers); // als je de lijst print staat er op plaats 3 <1 empty item>
//Array concat() voegt 2 lijsten tesamen tot 1 lijst
const jongenPunten = [23, 83, 90]; // lijst 1
const meisjePunten = [22, 92, 0]; // lijst 2
totaalpunten = jongenPunten.concat(meisjePunten); // een nieuwe variable die lijst1 samenvoegt met lijst 2
console.log(totaalpunten); // printen van nieuwe lijst
// Array copyWithin() kopiëren van element van 1 plaats in de lijst naar een andere plaats in de lijst
const lijst1 = [1, 2, 8, 9]; // Dit is de lijst
lijst1.copyWithin(2, 0); //Kopieer naar index 2, de elementen van index 0 tot 2:
console.log(lijst1); //Printen lijst
