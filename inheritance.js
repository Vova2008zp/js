'user strict';
function Phone (model, manufacturer) {
this.model = model;
this.manufacturer = manufacturer;

// this.call = function () {
//       console.log(1);
// };
}
// const phone1 = {
//     model: 'Pro',
//     manufacturer: 'Apple',
//     __proto__ : phoneProto,
//   };
  
//   const phone2 = {
//       model: 'Basic',
//       manufacturer: 'Google',
//     };

const phoneProto = {
  isOn: false,
  call: function (number) {
    console.log(`${this.manufacturer} ${this.model} is calling ${number}`);
  }
}
  const phone1 = new Phone('Pro');
  const phone2 = new Phone('Basic');


// phone1.__proto__ = phoneProto;
phone2.__proto__ = phoneProto;

    

const deviceProto = {
  turnOn: function () {
    console.log('device is turned on now');
  },
};

phoneProto.__proto__ = deviceProto;

Phone.prototype = phoneProto;

const arr1 = [1];
const arr2 = [1];

function push(data) {
  arr1.push(data);
}
