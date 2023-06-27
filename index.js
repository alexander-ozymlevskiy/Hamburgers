// Клас Гамбургер
class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  // Мережа фастфудів пропонує кілька видів гамбургерів:

  // маленький (50 тугриків, 20 калорій);
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };

  // великий (100 тугриків, 40 калорій).
  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };

  //  Гамбургер може бути з одним із декількох видів начинок:

  //  сиром (+ 10 тугриків, + 20 калорій)
  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };
  // салатом (+ 20 тугриків, + 5 калорій)
  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };

  // картоплею (+ 15 тугриків, + 10 калорій)
  static STUFFING_POTATO = {
    price: 15,
    calories: 10,
  };

  // Можна додати добавки:
  addTopping(topping) {
    this.toppings.push(topping);
  }

  // посипати приправою (+15 тугриків, 0 калорій)
  static TOPPING_SAUCE = {
    price: 15,
    calories: 0,
  };
  // полити майонезом (+ 20 тугриків, +5 калорій)
  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };

  // Метод для розрахунку калорій
  calculate() {
    const sumCalories = this.toppings.reduce(
      (totalCalories, topping) => totalCalories + topping.calories,
      0
    );
    return this.size.calories + this.stuffing.calories + sumCalories;
  }

  // Метод для розрахунку вартості
  calculatePrice() {
    const sumPrice = this.toppings.reduce(
      (totalPrice, topping) => totalPrice + topping.price,
      0
    );
    return this.size.price + this.stuffing.price + sumPrice;
  }
}

// Приклад роботи коду:

// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Калорій: " + hamburger.calculate());

// скільки коштує
console.log("Ціна: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Ціна з добавками: " + hamburger.calculatePrice());

console.log("------------------------------");

let bigHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.SIZE_SMALL);

bigHamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Калорій: " + bigHamburger.calculate());
console.log("Ціна: " + bigHamburger.calculatePrice());
