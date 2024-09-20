
// Fetching elements and saving as variables
const saveBtn = document.querySelector('.saveBtn');
const shareNum = document.querySelector('.shareBtn');
const listContainer = document.querySelector('ul');
const show = document.querySelector('.savedNumbers');


/* -- Saving and Loading Numbers*/

const storageKey = "lotto_app";   // Key to reference data throughout App

function saveCurrentNumbers(){
  if (localStorage.getItem(storageKey) === null){
    // storage does not yet exist
    localStorage.setItem(storageKey, JSON.stringify( new Object() ));
  };

  const data = JSON.parse(localStorage.getItem(storageKey));  // Get our data object

  const newid =  new Date().getTime();                        // create unique id value
  data[newid] = luckyNumbers;                                 // set to our "luckyNumbers" array
  localStorage.setItem(storageKey, JSON.stringify( data ));   // Save
  
  return newid;                                               // Get reference to ID
};

function deleteNumbers(obj_id){
  const data = JSON.parse(localStorage.getItem(storageKey));  // Get our data object
  delete data[obj_id];                                        // Remove object
  localStorage.setItem(storageKey, JSON.stringify( data ));   // Save
};

// Get saved numbers from localStorage and display on UI
function loadFromStorage(){
  if (localStorage.getItem(storageKey) === null){
    // storage does not yet exist - do nothing
    return;
  };

  const data = JSON.parse(localStorage.getItem(storageKey));  // Get our data object

  for (const [obj_id, value] of Object.entries(data)){
    // Create list item for each numbers array
    const display = document.createElement('li');
    listContainer.appendChild(display);
    display.classList.add('savedNumbers');
    display.innerHTML = value.join(' ,  ');

    // Method to remove saved luckyNumbers
    display.addEventListener('click', () => {

      listContainer.removeChild(display);
      deleteNumbers(obj_id);

    });
    
  };
};

loadFromStorage();    // Make sure this function is only called after DOM loaded

// Save Button, saves the current number generated
saveBtn.addEventListener('click', () => {

  const obj_id = saveCurrentNumbers();   // Save to localStorage

  // Add to display
  const saved = document.createElement('li');      
  listContainer.appendChild(saved); 
  saved.classList.add('savedNumbers')
  saved.innerHTML = luckyNumbers.join(' ,  ');

  // Method to remove newly created luckyNumbers
  saved.addEventListener('click', () => {
  
    listContainer.removeChild(saved);
    deleteNumbers(obj_id);
    
  });

  console.log(`saveing...`); // save icon works
});



/*______ SHARE BUTTON => TO THE WORLD ______*/

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




/* INFORM LISTS POPUP */

// Toggle visibility on click
// NOT WORKING - ERROR!!!!!!!!
function aboutPopUp() {
    document.getElementsByClassName('icon, popup').style.display = 'block';
}
//Strange must work on this more

