let name = "Norman Ray Sorenson"; //appropriately named variable containing my name

const states = 50;  //constant variable defining the number of states

let sum = 5 + 4;  //variable that adds 2 numbers

function sayHello() {                //function that logs 'Hello World!'
    console.log('Hello World!');
}
sayHello()                           //sayHello function called

function checkAge(name, age) {        //function display a message if age is less than 21
    if(age < 21) {                   //if statement in code block of checkAge function
        alert("Sorry " + name + ", you aren't old enough to view this page!")  //alert in code block of if statement
    }
}
checkAge("Charles", 21);       //checkAge function called 4 times
checkAge("Abby", 27);
//checkAge("James", 18);      //lines 19 & 20 commented out because alerts are annoying
//checkAge("John", 17);

let myFavoriteVeggies = ['potatoes', 'brussels sprouts', 'asparagus', 'onions', 'okra'] //array of 5 favorite vegetables
for(i = 0; i < myFavoriteVeggies.length; i++) {                               //for loop that logs all of the veggies in myFavoriteVeggies
    console.log(myFavoriteVeggies[i]);                                        //displays all veggies in myFavoriteVeggies at the index of i in the developers console
}

let pet = {                 //object named pet containing the properties 'name' and 'breed'
    name: 'Brinda',
    breed: 'Dag'
}
console.log(pet.name, pet.breed);    //logs the properties 'name' and 'breed' of the pet object to the developers console

let nameAge = [      //an array of objects
    {
        name: 'Jim',  //one of the objects in the nameAge array
        age: 3
    },
    {
        name: 'Joe',
        age: 20
    },
    {
        name: 'Jan',
        age: 21
    },
    {
        name: 'Jeremy',
        age: 22
    },
    {
        name: 'Jet',
        age: 17
    }
]
for(i = 0; i < nameAge.length; i++) {           //for loop that runs the checkAge function for each index of the nameAge array
    //checkAge(nameAge[i].name, nameAge[i].age);   //line 56 commented out because alerts are annoying
}

function getLength(string) {
    return string.length;
}

let num = getLength('Hello World')

if(num % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}