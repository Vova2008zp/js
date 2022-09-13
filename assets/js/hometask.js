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
    if ((isLoggedIn= 'exit')) {
      return true;
    }
    return false;
  },
  login: function () {
    if ((isLoggedIn = 'entry')) {
      return true;
    }
    return false;
  },
};

User.prototype = userProto;

const user1 = new User('Test');
