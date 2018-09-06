/*
 * Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable.
 */

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

/*
 * Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.
 */

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder";
// or
myDog["name"] = "Happy Coder";


/*
 * Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
 */

 // Setup
 var myDog = {
   "name": "Happy Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["freeCodeCamp Campers"]
 };

 // Only change code below this line.

 myDog.bark = "woof";
 // or
 myDog["bark"] = "woof";


/*
 * Delete the "tails" property from myDog. You may use either dot or bracket notation.
 */

 // Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.

delete myDog.tails;

/*
 * Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
 * explained better here: https://forum.freecodecamp.org/t/using-objects-for-lookups-can-you-help-explain-whats-going-on/145039/5
 */

 // Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  return lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");


/*
 * Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".
 */

 // INITIAL Setup
 var myObj = {
   gift: "pony",
   pet: "kitten",
   bed: "sleigh"
 };

 function checkObj(checkProp) {
   // Your Code Here

   return "Change Me!";
 }

 // Test your code by modifying these values
 checkObj("gift");
 // INITIAL Setup END

 // SOLVED Setup
 var myObj = {
   gift: "pony",
   pet: "kitten",
   bed: "sleigh"
 };

 function checkObj(checkProp) {
   // Your Code Here
   if (myObj.hasOwnProperty(checkProp)) {
     return myObj[checkProp];
   } else {
     return "Not Found";
   }

 }

 // Test your code by modifying these values
 checkObj("pet");

 /*
  * Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
  */

  // original Code
  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
    // Add record here
  ];


  // solution Code
  var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
  {
    "artist": "caribu",
    "title": "Marino",
    "release_year": 2012,
    "formats": [
      "CD",
      "LP",
      "MP3"
    ]
  }
];

// Accessing Nested Objects
/*
 * Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name.
 */

 // Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line


/*
 * Accessing Nested Arrays
 * Retrieve the second tree from the variable myPlants using object dot and array bracket notation.
 */

 // Setup
 var myPlants = [
   {
     type: "flowers",
     list: [
       "rose",
       "tulip",
       "dandelion"
     ]
   },
   {
     type: "trees",
     list: [
       "fir",
       "pine",
       "birch"
     ]
   }
 ];

 // Only change code below this line

 var secondTree = myPlants[1].list[1]; // Change this line
