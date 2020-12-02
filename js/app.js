// Global Variables 

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const lostHeart = document.querySelectorAll('.tries img')

// Initializer
let missed = 0;


// Array of Phrases
const phrases = [
    " Inner strength is not found its created",
    " Through self discipline comes freedom",
    " To bear trials with a calm mind robs misfortune of its strength and burden",
    " Patience is bitter but its fruit is sweet",
    "When you have somthing to say slience is a lie"
];

// This handler will hide overlay when you click 
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Randon phrase array function
const getRandomPhraseArray = (arr) => {
    let randomNumber = Math.floor(Math.random() * phrases.length );
    return phrases[randomNumber];
};

getRandomPhraseArray(phrases);



function addPhraseToDisplay(arr) {
    for ( let i = 0; i < arr.length; i++) {
      let liList = document.createElement('li');
      let ulList = document.querySelector('#phrase ul');
      liList.textContent = arr[i];
      ulList.appendChild(liList);
  
      if (liList.textContent === ' ') {
        liList.className = 'space';
      } else {
        liList.className = 'letter';
      }
    }
  };
  
  const phraseArray = getRandomPhraseArray(phrases);
  addPhraseToDisplay(phraseArray)
  
  function checkLetter(button) {
    let checkLetter = document.querySelectorAll('.letter');
    let match = null;
  
    for ( let i = 0; i < checkLetter.length; i++) {
      if (checkLetter[i].textContent.toUpperCase() === button.textContent.toUpperCase()) {
        checkLetter[i].classList.add('show');
        match = true;
      }
    }
    return match;
  };
  
  qwerty.addEventListener('click', (e) => {
    if( e.target.tagName === 'BUTTON' ) {
      e.target.className = 'chosen';
    } if ( e.target.className === 'chosen' ) {
      e.target.disabled = 'true';
      let letterFound = checkLetter(e.target);
      if ( letterFound === null ) {
        missed += 1;
        lostHeart[missed - 1].src = "images/lostHeart.png";
      }
    }
    checkWin();
  });
  
  function checkWin () {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
  
    if ( letter.length === show.length ) {
      overlay.className = 'win';
      document.querySelector('h2').innerHTML = 'You did it, great job!';
      overlay.style.display = 'flex';
    } else if ( missed > 4 ) {
      overlay.className = 'lose';
      document.querySelector('h2').innerHTML = "Sorry! Try again";
      overlay.style.display = 'flex';
    }
  };
  