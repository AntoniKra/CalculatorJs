// const miasto1 = "Warszawa";
// let miasto = "Kraków";
// miasto = "Sieradz";
// console.log(miasto);
// let byłeś_w_sklepie = true;
// let tablica = [];
// tablica.push(11, 72, 34, 14, 85, 46, 27);
// console.log(tablica);

// if (tablica.length > 5) {
//   tablica.length = 5;
// }

// console.log(tablica);
// if (tablica.length > 3) {
//   tablica.sort((a, b) => b - a);
//   tablica.length = 3;
// }
// console.log(tablica);

// for (let i = 0; i < tablica.length; i++) {
//   tablica[i] = tablica[i] + 5;
// }
// console.log(tablica);

// const funkcja = (parametr1, parametr2) => {
//   parametr1[0] = 10;
//   parametr1[1] = 25;
//   console.log(parametr2);
// };
// funkcja(tablica, miasto1);
// console.log(tablica);

// const funkcja2 = () => {
//   tablica[2] = 0;
// };
// funkcja2();
// console.log(tablica);

// const obj = {
//   imie: "Antoni",
//   wiek: 19,
//   zawód: "programista",
// };
// console.log(obj);

// let obj2 = {
//   imie: "Kuba",
// };
// console.log(obj2);

// obj2 = {
//   imie: "Jakub",
//   wiek: 20,
// };
// console.log(obj2);

let liczba1 = 77;
let liczba2 = 17;
const dodawanie = (a, b) => {
  return a + b;
};

const odejmowanie = (a, b) => {
  return a - b;
};

const mnożenie = (a, b) => {
  return a * b;
};

const dzielenie = (a, b) => {
  return a / b;
};

console.log(
  dodawanie(liczba1, liczba2),
  odejmowanie(liczba1, liczba2),
  mnożenie(liczba1, liczba2),
  dzielenie(liczba1, liczba2)
);
