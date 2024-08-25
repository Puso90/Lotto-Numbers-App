
//Fetching elements and saving as variables
const saveBtn = document.querySelector('.saveBtn');
const shareNum = document.querySelector('.shareBtn');
//const storing = document.getElementById('storing');
const listContainer = document.querySelector('ul');
//const numbersGenerated = document.querySelector('.number-generator');
const popUp2 = document.getElementsByClassName('.icon2');


/*______ THE PROCESS - SAVE SHARE ______*/

// Save Button, saves the number generated
saveBtn.addEventListener('click', () => {

//If statement not working - MUST FIX - No save if numbers are not generated!
    if (!numbers) {
        window.alert('Coming soon!')
        return;
    }

    const saved = document.createElement('li');
        saved.textContent = numbers.slice(0,7).join(' ,  ');
        listContainer.appendChild(saved); 
        saved.classList.add('savedNumbers')
        localStorage.setItem(localStorage.length, numbers.slice(0,7).join(' ,  ') )

        
    saved.addEventListener('click', () => {
        listContainer.removeChild(saved);
       
    }) 

    // window.alert('Save button, coming soon!'); 
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



//_________________________________________________________________________________________________________
// ROADMAP:
/*
       
        3.  Should not be allowed to save, if number is not generated and not showing on user interface yet
        4.  What's missing is user logins feature
        5.  Previous winning lotto numbers - API
        6.  Must not be able to save same or duplicate numbers
        7.  Saving numbers generated must only be for users who pay subscription
        8.  Add a modal close (x) and click to open modal for mobile
        10. If statement not working - MUST FIX - No save if numbers are not generated!

//_________________________________________________________________________________________________________
// DONE SECTION
        1.  Including map() & filter() to first six numbers, (used: slice() method) | DONE 
        2.  Delete Saved Numbers | DONE
        9.  List decoration must be none | DONE
___________________________________________________________________________________________________________

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-H6X78M5G5Z"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H6X78M5G5Z');
</script>

___________________________________________________________________________________________________________*/



//_________________________________________________________________________________________________________
           // Creator: Puso Moses Ramoroa
//_________________________________________________________________________________________________________
           

/*__________________________________________________________________________________________________________

// TRIED AND TESTED 

// Considered to give the locale storage saved array by date or time
// It's giving value over same time without refreshing time

    1.      const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let second = date.getSeconds();

            // This arrangement can be altered based on how we want the date's format to appear.
            let currentDate = `${day}-${month}-${year}-${second}`;
            console.log(currentDate); // "17-6-2022"

    2.      Must probably consider using actual unique ID rather 
            then linking that to a date saved of day-month-year
_____________________________________________________________________________________________________________*/