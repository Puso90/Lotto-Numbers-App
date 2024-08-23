
//Fetching elements and saving as variables
const saveBtn = document.querySelector('.saveBtn');
const shareNum = document.querySelector('.shareBtn');
//const storing = document.getElementById('storing');
const listContainer = document.querySelector('ul');
//const numbersGenerated = document.querySelector('.number-generator');

// Save Button, saves the number generated
saveBtn.addEventListener('click', () => {
   /*     
    if (saved === numbers.slice(0,7)) {
        window.alert('Cannot save what you have not generated..!')
        return;
    }
    */

    const saved = document.createElement('li');
        saved.textContent = numbers.slice(0,7).join(' ,  ');
        listContainer.appendChild(saved); 
        
    saved.addEventListener('click', () => {
        listContainer.removeChild(saved);
    }) 

    // window.alert('Save button, coming soon!'); 
    console.log(`saveing...`); // save icon works
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


//_________________________________________________________________________________________________________
// ROADMAP:
/*
       
        3.  Should not be allowed to save, if number is not generated and not showing on user interface yet
        4.  What's missing is user logins feature
        5.  Previous winning lotto numbers - API
        6.  Must not be able to save same or duplicate numbers
        7.  Saving numbers generated must only be for users who pay subscription
        8.  Add a modal close (x) and click to open modal for mobile

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
           