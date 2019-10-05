// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions
// Code by Arvin Lleva 10/04/2019

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.
    console.log("\n1a.------------------------------")

    const doesBExist = mantra.indexOf('B') > -1;

    console.log("Does B exists?", doesBExist); // shows true in this case because 'B' is present

// 1b. Write the code that determines if there is an 'x' in mantra.
    console.log("\n1b.------------------------------")

    const doesXExist = mantra.indexOf('x') > -1;

    console.log("Does x exists?", doesXExist); // shows false in this case because 'x' is not present

// 1c. Write the code that determines if there is a 'v' in mantra.
    console.log("\n1c.------------------------------")

    const doesVExist = mantra.indexOf('v') >= 0;
    console.log("Does v exists?", doesVExist ); // shows true in this case because 'v' is present

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
    console.log("\n1d.------------------------------")

    const randomStr = 'Hello World';

    //utilized the ternary operator
    const doesLetterExist = (string, compareString) => {
        return string.includes(compareString) ? `${compareString} does exist in ${string}` : `${compareString} does not exist in ${string}`;
    };

    console.log(doesLetterExist(randomStr, 'o'));
    console.log(doesLetterExist(randomStr, 'x'));


// ------------------------------ Consider the following variables:

var myDog = "Snoopy";
var myCat = "Garfield";

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
  console.log("\n2a.------------------------------");

  const longerString = (string1, string2) => {
    return string1.length > string2.length ? `${string1} is the longer string than ${string2}`: `${string2} is the longer string than ${string1}`;
  };

  console.log(longerString(myDog, myCat));

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
  console.log("\n2b.------------------------------");

  const stringsToArr = (...strings) => {
    return [...strings];
  };
  console.log(stringsToArr(myDog, myCat));

// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"
  console.log("\n2c.------------------------------");

  const allLowerCase = (...strings) => {
    return ([...strings]).join(" ").toLowerCase();
  }

  console.log(allLowerCase(myDog, myCat));

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
  console.log("\n3a.------------------------------");
  
  const consoleForLoop = (message) => {
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      console.log(char);
    }
  }

  consoleForLoop(myMessage);

// 3b. Write the code that logs each letter of the message using map.
  console.log("\n3b.------------------------------");
  
  const consoleMap = (message) => {
    var myMessageArr = message.split('').map((element, index) => {
      console.log(message[index]);
    });
  }

  consoleMap(myMessage);

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.
  console.log("\n3c.------------------------------");
  
  const consoleWhileLoop = (message) => {
    let i = 0;
  
    while (i < message.length) {
      console.log(message[i]);
      i++
    }
  }
  
  consoleWhileLoop(myMessage);

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().
  console.log("\n3d.------------------------------");
  
  const consoleForEach = (messageStr) => {
    messageStr.split("").forEach(char => {
      console.log(char);
    });
  };
  
  consoleForEach(myMessage);
  
// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
console.log("\n4a.------------------------------");

const removeVowel = (string) => {
  const vowels = 'aeiou';

  return string.split("").filter(char => !vowels.includes(char)).join("");
};

// another way of approaching the problem
console.log("First way of solving this problem:", removeVowel(testString));

const removeVowel2 = (string) => {
  return string.replace(/[aeiou]/g,"");
};

console.log("Second way of solving this problem:", removeVowel2(testString));

// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
console.log("\n4b.------------------------------");

var notAString = 7

const removeVowelUpated = (string) => {
  try {
    console.log(string.replace(/[aeiou]/g,""));
  }

  catch(error) {
    console.log(error)
  }
};

removeVowelUpated(notAString);

// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
console.log("\n5a.------------------------------");

const onlyCats = toonsArr => {
  return toonsArr.filter(toonObj => {
    return toonObj.animal == "cat";
  });
};

console.log(onlyCats(toonimals));


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
console.log("\n5b.------------------------------");

const notCats = toonsArr => {
  return toonsArr.filter(toonObj => {
    return toonObj.animal != "cat";
  }).map(toonObj => {
    return toonObj.name;
  });
}

console.log(notCats(toonimals));

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
console.log("\n5c.------------------------------");

const toonimalsSentence = toonsArr => {
  toonsArr.forEach(toonObj => {
    const { name, animal} = toonObj;

    console.log(`${name} is a ${animal}`)
  });
};

toonimalsSentence(toonimals);
