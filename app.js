
const dice = document.getElementById("btn");
const centralImg = document.getElementById("img");
const imgFisrt = document.getElementById("imgf");
const imgSecond = document.getElementById("imgs");
const imgCF = document.getElementById("imgcf");
const imgCS = document.getElementById("imgcs");
const pSum = document.getElementById("sum");
const pFirst = document.getElementById("first");
const pSecond = document.getElementById("2nd");
const cSum = document.getElementById("csum");
const cFirst = document.getElementById("cfirst");
const cSecond = document.getElementById("c2nd");
const finalYou = document.querySelector(".js-you");
const finalAi = document.querySelector(".js-ai");
const Arrow = document.querySelector(".arrow");
const initial = document.getElementById("initial");


centralImg.style.animationName = "None";

let player = '';
let computer = '';
let imgPlayer = '';
let imgComputer = '';

const diceNumbs = [
    "image/central1.png", 
    "image/central2.png", 
    "image/central3.png", 
    "image/central4.png", 
    "image/central5.png", 
    "image/central6.png", 
];
   
let randomNumber = '';
let randomNumberC = '';
let i = 0;
let sum = 0;
let csum = 0;
let you = 0;
let ai = 0;
let youScore = 0;
let aiScore = 0;

initial.disabled = true;

dice.addEventListener("click", () => {
    throwing();
})
initial.addEventListener("click", () => {
    playAgain(); 
})


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function throwing() {
    
    centralDisplayBefore();
    console.log("Waiting 2 seconds...");

    await delay(4000);

    centralDisplayAfter();
    console.log("Function executed after 2 seconds");
}

function centralDisplayBefore(){
    i++;
    centralImg.style.animationName = "diceMove";
    randomNumber = Math.floor(Math.random() * diceNumbs.length);
    randomNumberC = Math.floor(Math.random() * diceNumbs.length);
    console.log(randomNumber+1);
    console.log(randomNumberC+1);
    player = randomNumber;
    computer = randomNumberC;
    imgPlayer = diceNumbs[player];
    imgComputer = diceNumbs[computer]; 
    Arrow.style.display = "none";  
}

function centralDisplayAfter(){
    centralImg.style.animationName = "None";
    centralImg.src = `${imgPlayer}`; 
    if (i === 1) {
        imgFisrt.src = `${imgPlayer}`;
        imgCF.src = `${imgComputer}`;
        pFirst.textContent = `1st throw : ${player + 1}`;
        cFirst.textContent = `1st throw : ${computer + 1}`;
    } else
     {
        imgSecond.src = `${imgPlayer}`;
        imgCS.src = `${imgComputer}`;
        pSecond.textContent = `2nd throw : ${player + 1}`;
        cSecond.textContent = `2nd throw : ${computer + 1}`;
        dice.disabled = true;
        initial.disabled = false;
    } 
  
    sum += player +1;
    csum += computer +1;
    pSum.textContent = `Sum : ${sum}`;
    cSum.textContent = `Sum : ${csum}`;

}

//---------------------  réactualisation des compteurs après deux lancés de dés-------  

function playAgain() {
    if (i >= 2 && dice.disabled) {
        centralImg.style.animationName = "None"; 
        Arrow.style.display = "block";  
        centralImg.src = "image/diceh2.png";  
        if (sum < csum) {
            you = 0;
            ai = 1;
        } else 
        if (sum > csum) {
            you = 1;
            ai = 0;
        } else {
            you = 1;
            ai = 1;
        }
        youScore += you;
        aiScore += ai;
        finalAi.textContent = `AI : ${aiScore}`;
        finalYou.textContent = `YOU : ${youScore}`;
        //alert("check the final score");
        i = 0;
        imgFisrt.src = "image/diceh1.jpeg";
        imgSecond.src = "image/diceh1.jpeg";
        pFirst.textContent = "1st throw : 0";
        pSecond.textContent = "2nd throw : 0";
        sum = 0;
        pSum.textContent = `Sum : ${sum}`;
        imgCF.src = "image/diceh1.jpeg";
        imgCS.src = "image/diceh1.jpeg";
        cFirst.textContent = "1st throw : 0";
        cSecond.textContent = "2nd throw : 0";
        csum = 0;
        cSum.textContent = `Sum : ${csum}`;  
        dice.disabled = false;
        initial.disabled = true;
    }        
    }
