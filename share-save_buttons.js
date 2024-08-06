
//Fetching values for numbers



//Fetching elements and saving as variables
const saveBtn = document.querySelector('.saveBtn');
const shareNum = document.querySelector('.shareBtn');

// Fetching Storing element
const storing = document.getElementById('storing');
const listContainer = document.querySelector('ul');
const numbersGenerated = document.querySelector('.number-generator');

//Listen to save icon clicks
saveBtn.addEventListener('click', () => {
/*    
    const saved = document.createElement('li');
    // Must add if statement here
    saved.textContent = numbers;
    listContainer.appendChild(saved);
// Hmm... Tricky but it's coming!
*/
    window.alert('Save button, coming soon!'); // Opens window for save button
    console.log(`saveing...`); // save icon works
    console.log(); // Trying to value of h1's in mother element

});

//Listen to share icon clicks
shareNum.addEventListener('click', () => {
    //Share numbers or app link on web with api
    navigator.share({
        url: document.URL,
        title: document.title,
        text: "Look up lucky lotto numbers, Boom.. Enjoy your luck!"
      });

    console.log(`sharing...`);
});


