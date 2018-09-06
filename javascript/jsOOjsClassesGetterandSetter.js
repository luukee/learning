/* initial setup
class Pet {
// constructor method: goes at the top
//  link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Class_body_and_method_definitions
  constructor(){

  }
}
*/

//Understanding "this" in JavaScript:
//https://teamtreehouse.com/library/understanding-this-in-javascript

class Pet {
  constructor(animal, age, breed, sound, attitude){
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
    this.attitude = attitude;
  }
  //  getter method
  /*
  You learned previously that when a getter method is called, a property value
  is computed and returned, but this value is not ever updated or stored anywhere.
  */
  get activity() {
    const today = new Date();
    //variable using date object and the getHours method
    const hour = today.getHours();

    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }

  } // end getter

  /*
  A setter method, on the other hand, receives a value and
  can perform logic on that value if need be.
  Then it either updates an existing property with that value or
  stores the value to a new property.
  */
  get owner() {
   return this._owner;
  }
  set owner(owner) { // setter must have exactly one parameter "(owner)"
    this._owner = owner; // setter convention dictates that the underscore is before the setter function
    console.log('setter called: ${owner}');
  }


  speak() {
    console.log(this.sound);
  }

}


class Owner {
  constructor(name, address) { // setting up a constructor class to initialize the name and address properties
    this.name = name;
    this.address = address;
  }

  set phone(phone) { // (phone) is the phone parameter, which is the value being set for the phone number property
    // normalize the phone number
    const phoneNormalized = phone.replace(/[^0-9]/g, ''); //1st parameter (/[^0-9]/g) to identify all non-numeric properies, 2nd parameter an empty string to indicate that any non-numeric characters should be replaced with that string
    this._phone = phoneNormalized; // store the normalized phone number to the phone number backing property (._phone)
  }

  // create the associated getter method for the phone number
  get phone() {
   return this._phone;
  }

}





const ernie = new Pet('dog', 1, 'pug', 'yip yip', 'badass');
const spoon = new Pet('cat', 5, 'panther', 'meow', 'weiner');

//console.log(spoon);
//ernie.speak();
//spoon.speak();

//logging the activity getter method
//console.log(ernie.activity);

//setter
//ernie.owner = 'Ashley';
//console.log(ernie.owner);

//Owner setter
ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555) 555-5555';
console.log(ernie.owner.name);
console.log(ernie.owner.phone);
