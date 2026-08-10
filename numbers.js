
// UI elements to display lotto numbers
const numberEls = [
    document.getElementById('number1'),
    document.getElementById('number2'),
    document.getElementById('number3'),
    document.getElementById('number4'),
    document.getElementById('number5'),
    document.getElementById('number6'),
    document.getElementById('number7'),
];

// Array of all Lotto numbers (1 - 52)
const lottoNumbers = Array.from({ length: 52 }, (_, i) => i + 1);

// Users current lucky numbers
let luckyNumbers;

function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function get7LuckyNumbers() {
    const pool = [...lottoNumbers];
    fisherYatesShuffle(pool);

    const main = pool.slice(0, 6).sort((a, b) => a - b);
    const bonus = pool[6];

    return [...main, bonus];
}

function spin() {
    luckyNumbers = get7LuckyNumbers();

    numberEls.forEach((el, index) => {
        el.textContent = luckyNumbers[index];
    });
}

document.querySelector('.btn').addEventListener('click', spin);
