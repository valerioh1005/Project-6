// Global Variables 

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementsByClassName('.btn_reset');
const overlay = document.getElementById('overlay');

// Initializer
let missed = 0;

// Array of Phrases
const phrases = [
    "Inner strength is not found it's created",
    "Through self-discipline comes freedom",
    "To bear trials with a calm mind robs misfortune of its strength and burden",
    "Patience is bitter, but its fruit is sweet",
    "Many a false step was made by standing still",
];

// This handler will hide overlay when you click 
startGame.addEventListener('click', () => {
    overlay.style.display = none;
});