'use strict';

function User(firstName, lastName, email, age, isLoggedIn) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
}

const userProto = {
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  logout: function () {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  },
  login: function () {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  },
};

User.prototype = userProto;

const user1 = new User('Test', 'Testenko', 'examle@gmail.com', 55);

console.log(user1);