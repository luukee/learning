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

  speak() {
    console.log(this.sound);
  }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip', 'badass');
const spoon = new Pet('cat', 5, 'panther', 'meow', 'weiner');

console.log(spoon);
//ernie.speak();
//spoon.speak();
