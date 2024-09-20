const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');

// Create an array from 1 to 52
// Array.from initialises an array from an iterable object
// The iterable object in this case is '{ length : 52 }'
// This object creates an array with the length set to 52, however, all of the elements are still undefined
// Therefore, we use the map function ( _, i) => i + 1 to transform every element in the array
// The mapping function takes two arguments, '_' and 'i'
// '_' is ignored in this case, usually, it would represent the current value in the array, 
// but since we are creating new values for every element in the array, we don't use it
// 'i' is the index of the current element
// Therefore our mapping function is saying that each element is equal to the index, 'i', + 1
// This means, the first element will be equal to i + 1 or 0 + 1 = 1, and the second element will be 1 + 1 = 2,
// and so on and so forth until the index of 51 
// The length of our array is 52, but because it starts counting at 0, our last index will be 51
// This means the last element will be 51 + 1 = 52
const numbers = Array.from({ length: 52 }, (_, i) => i + 1);

//Declare the function to shuffle the array
function fisherYatesShuffle(array) {
    // initialise a for loop where we define i as the last indedx in the array
    // while 'i' is grater than 0, the loop will run
    // 'i' will decrement after each iteration thanks to 'i--', moving from the end of the array, to the start
    for (let i = array.length - 1; i > 0; i--) {
        // define a constant variable, j, set it equal to a random number between 0 (inclusive) and i (exclusive)
        const j = Math.floor(Math.random() * (i + 1));
        // shuffle i and j in the array
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function spin() {
    // Call fisherYates function to shuffle the array
    fisherYatesShuffle(numbers)

    // Define first 7 numbers of the shuffled array
    let randomNumber1 = numbers[0]
    let randomNumber2 = numbers[1]
    let randomNumber3 = numbers[2]
    let randomNumber4 = numbers[3]
    let randomNumber5 = numbers[4]
    let randomNumber6 = numbers[5]
    let randomNumber7 = numbers[6]

    // Set the innerhtml of our number h1's to the shuffled numbers above
    number1.innerHTML = randomNumber1;
    number2.innerHTML = randomNumber2;
    number3.innerHTML = randomNumber3;
    number4.innerHTML = randomNumber4;
    number5.innerHTML = randomNumber5;
    number6.innerHTML = randomNumber6;
    number7.innerHTML = randomNumber7;
}

