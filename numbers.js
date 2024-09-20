
// UI elements to display lotto numbers
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');


// Array of all Lotto numbers (1 - 52)
const lottoNumbers = Array.from(
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
    { length: 52 }, (_, i) => i + 1
);

// Users current lucky numbers
let luckyNumbers;


function fisherYatesShuffle(array) {
    // initialise a for loop where we define i as the last indedx in the array
    // while 'i' is grater than 0, the loop will run
    // 'i' will decrement after each iteration thanks to 'i--', moving from the end of the array, to the start
    for (let i = array.length - 1; i > 0; i--) {
        // define a constant variable, j, set it equal to a random number between 0 (inclusive) and i (exclusive)
        const j = Math.floor(Math.random() * (i + 1));
        // shuffle i and j in the array in place
        [array[i], array[j]] = [array[j], array[i]];
    };
};

function get7LuckyNumbers(){
    // Use Fisher-Yates shuffle to mutate the lottoNumbers array
    fisherYatesShuffle(lottoNumbers);

    return lottoNumbers.slice(0, 7);    // get first 7 numbers
};


function spin() {
    // Get new numbers
    luckyNumbers = get7LuckyNumbers();

    // Set the innerhtml of our number h1's to the shuffled numbers above
    number1.innerHTML = luckyNumbers[0];
    number2.innerHTML = luckyNumbers[1];
    number3.innerHTML = luckyNumbers[2];
    number4.innerHTML = luckyNumbers[3];
    number5.innerHTML = luckyNumbers[4];
    number6.innerHTML = luckyNumbers[5];
    number7.innerHTML = luckyNumbers[6];
};

