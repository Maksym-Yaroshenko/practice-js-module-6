"use strict";

function fo() {
  return this;
}

console.log(fo());

function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Poly",
};

user.showContext = showThis;

// Викликаємо в контексті об'єкта
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"

const showThis2 = () => {
  console.log("this in showThis: ", this);
};

showThis2.call({});

let total = 0;

function isNanAudit(amount) {
  // const amount = "s";
  const numberAmount = Number(amount);

  if (isNaN(numberAmount)) {
    return "Помилка!";
  }

  if (numberAmount <= 0) {
    return "Від'ємне значення, або нуль!";
  }

  return (total += numberAmount);
}

console.log(isNanAudit(10));
console.log(isNanAudit(0));
console.log(isNanAudit(10));
console.log(isNanAudit("s"));

console.log("");

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(child);
console.log(parent.isPrototypeOf(child));
console.log("");

console.log(child.hasOwnProperty("name"));
console.log(child.hasOwnProperty("heritageeq1"));

console.log(child.surname);

console.log("");

const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

console.log("");

class User2 {
  constructor(name) {
    this.name = name;
  }
}

const mango11 = new User2("Maksym");

console.log(mango11);

console.log("");

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan", "Murano", 31700));

console.log("");

class User {
  name;
  #email;
  static myLoves = "Porshe";
  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (newEmail === "") {
      console.log("Помилка! Пошта не може бути порожнім рядком!");
      return;
    }

    if (!newEmail.includes("@")) {
      console.log("Помилка! Добавте @");
      return;
    }
    this.#email = newEmail;
  }

  // #validateEmail(email) {
  //   return email.includes("@");
  // }
}

const mango111 = new User({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango111.name);
console.log(mango111.email); // "mango@mail.com"
mango111.email = "mango@supermail.com";
mango111.email = "mangosupermail.com";
console.log(mango111.email); // "mango@supermail.com"

// console.log(Car.prototype);
console.log(User.prototype);

const maks = new User({
  name: "Maksym",
  email: "yiaroshenko.max@gmail.com",
});

console.log(maks.email);

maks.email = "ha2haha";

console.log(maks.email);

console.log(
  new User({
    name: "Maksym",
    email: "111221",
  })
);

console.log(User.myLoves);
const qwe = new User({
  name: "bmv",
  email: "y ne znau",
});
console.log(qwe.myLoves);

class Car {
  #price;
  static maxPrice = 50000;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice >= Car.maxPrice) {
      return;
    }
    this.#price = newPrice;
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

console.log("");

class NewUser {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends NewUser {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  blacklistedEmails = [];

  constructor({ email, access }) {
    super(email);
    this.access = access;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
