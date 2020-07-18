const citiesUkraine = ['Kiev', 'Vinnitsya', 'Lviv', 'Chernigiv'];
const citiesEurope = ['Berlin', 'Warszaw', 'Krakow', 'Lodz'];

const citiesUkraineWithPopulation = {
  Kiev: 5,
  Vinnitsya: 1,
  Lviv: 2,
  Chernigiv: 0.8
};
const citiesEuropeWithPopulation = {
  Kiev: 7,
  Berlin: 6,
  Warszaw: 2,
  Krakow: 3,
  Lodz: 4
};

/// Spread
const allCities = [...citiesUkraine, 'Vashingtot',...citiesEurope]
/*
  [
    'Kiev',       'Vinnitsya',
    'Lviv',       'Chernigiv',
    'Vashingtot', 'Berlin',
    'Warszaw',    'Krakow',
    'Lodz'
  ]
 */
console.log({...citiesUkraineWithPopulation}); // => { Kiev: 5, Vinnitsya: 1, Lviv: 2, Chernigiv: 0.8 }
console.log({...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation})
/*
  {
    Kiev: 7, // !!! 7 not 5
    Vinnitsya: 1,
    Lviv: 2,
    Chernigiv: 0.8,
    Berlin: 6,
    Warszaw: 2,
    Krakow: 3,
    Lodz: 4
  }
 */

const numbers = [5, 37, 25, 14];
console.log(Math.max(...numbers)); // => 37
