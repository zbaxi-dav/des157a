(function(){
"use strict";
console.log("using JS");

// SCREENS
const scrSelect = document.querySelector("#screen-select");
const scrBattle = document.querySelector("#screen-battle");
const scrResult = document.querySelector("#screen-result");

// PLAYER UI
const pImg = document.querySelector("#player-img");
const pName = document.querySelector("#player-name");
const pHP_UI = document.querySelector("#player-hp");
const eHP_UI = document.querySelector("#enemy-hp");
const log = document.querySelector("#log");
const resultText = document.querySelector("#result-text");

// BUTTONS
const charBtns = document.querySelectorAll(".character-btn");
const playAgain = document.querySelector("#play-again");
const musicToggle = document.querySelector("#music-toggle");

// MUSIC
let music = [
    new Audio("audio/title.mp3"),   // index 0: title music
    new Audio("audio/battle.mp3"),  // index 1: battle music
];
let musicIndex = 0;

// loop all music
music.forEach(m => { m.loop = true; });

// WIN / LOSE SOUNDS
const winSound = new Audio("audio/win.mp3");
const loseSound = new Audio("audio/lose.mp3");

// DICE ROLL SOUND
const diceRollSound = new Audio("audio/diceroll.mp3");

// INTRO MUSIC AUTOPLAY (after first interaction)
let introStarted = false;
function startIntroMusic() {
    if(!introStarted){
        introStarted = true;
        music[0].play(); // title music
        window.removeEventListener("click", startIntroMusic);
        window.removeEventListener("mousemove", startIntroMusic);
        window.removeEventListener("keydown", startIntroMusic);
    }
}
window.addEventListener("click", startIntroMusic);
window.addEventListener("mousemove", startIntroMusic);
window.addEventListener("keydown", startIntroMusic);

// toggle music button
musicToggle.onclick = () => {
    let track = music[musicIndex];
    track.paused ? track.play() : track.pause();
};

// RULE POPUP CONTROLS
const infoBtn = document.querySelector("#info-btn");
const rulesPopup = document.querySelector("#rules-popup");
const closeRules = document.querySelector("#close-rules");
if(infoBtn){
    infoBtn.onclick = () => rulesPopup.classList.remove("hidden");
    closeRules.onclick = () => rulesPopup.classList.add("hidden");
}

// GAME VARIABLES
let playerHP = 10, enemyHP = 10;
function hearts(n){ return "❤︎".repeat(n); }

function showScreen(s){
    scrSelect.classList.remove("active");
    scrBattle.classList.remove("active");
    scrResult.classList.remove("active");
    s.classList.add("active");
}

// CHARACTER SELECT
charBtns.forEach(btn => {
    btn.onclick = () => {
        let raw = btn.dataset.name;
        let file = raw.toLowerCase().replace("the ","");

        pName.textContent = raw;
        pImg.src = "images/" + file + ".gif";

        switchMusic(1); // play battle music automatically
        showScreen(scrBattle);

        playerHP = enemyHP = 10;
        pHP_UI.textContent = hearts(10);
        eHP_UI.textContent = hearts(10);

        log.innerHTML = "<p>The battle begins...</p>";
    };
});

// DICE BATTLE SYSTEM
document.querySelector("#actions").innerHTML = `<button id="roll">Roll Dice</button>`;
const rollBtn = document.querySelector("#roll");
let pDef = false, eDef = false;
function rollDie(){ return Math.floor(Math.random() * 6) + 1; }

rollBtn.onclick = () => {
    if(playerHP <= 0 || enemyHP <= 0) return;

    // play dice roll sound
    diceRollSound.currentTime = 0;
    diceRollSound.play();

    let p = rollDie(), e = rollDie();
    const dmg = [1,1,2,3,2,4];
    let pD = dmg[p-1], eD = dmg[e-1];

    if(p == 5) playerHP = Math.min(playerHP + 1, 10);
    if(p == 2) pDef = true;
    if(e == 2) eDef = true;

    enemyHP -= eDef ? Math.floor(pD / 2) : pD;
    playerHP -= pDef ? Math.floor(eD / 2) : eD;

    pDef = eDef = false;

    pHP_UI.textContent = hearts(Math.max(playerHP,0));
    eHP_UI.textContent = hearts(Math.max(enemyHP,0));

    const dice = ["⚀","⚁","⚂","⚃","⚄","⚅"];
    log.innerHTML += `<p>You rolled <b>${dice[p-1]}</b> | Enemy <b>${dice[e-1]}</b></p>`;
    log.scrollTop = log.scrollHeight;

    if(playerHP <= 0 || enemyHP <= 0) endGame();
};

// END GAME
function endGame(){
    showScreen(scrResult);

    // switch to result music (pause any previous music)
    music[musicIndex].pause();

    if(playerHP > 0){
        resultText.textContent = "You Win!";
        winSound.play();
    } else {
        resultText.textContent = "You Fall...";
        loseSound.play();
    }
}

playAgain.onclick = () => location.reload();

// MUSIC SWITCH HELPER
function switchMusic(i){
    music[musicIndex].pause();
    musicIndex = i;
    music[musicIndex].play();
}

})();
