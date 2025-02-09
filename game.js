// const { JSDOM } = require("jsdom");
// const dom = new JSDOM(`<!DOCTYPE html><html><body><button class="btn">Click</button></body></html>`);
import {getRandomInt} from './module.js'


const btns = document.getElementsByClassName('btn');

const headsBtn = document.querySelector('.heads')
const tailsBtn = document.querySelector('.tails')
const flip = document.querySelector('#flip');
const wonTd = document.querySelector('#won') 
const loseTd = document.querySelector('#lose') 

const NUM = 2
let heads = 0;
let tails = 0;

let won = 0;
let lose = 0;

wonTd.innerText = won;
loseTd.innerText = lose;

flip.addEventListener('click', play);

for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', activation)
}


function activation(){
  let active = document.getElementsByClassName('active')[0]
  
  if (active){
    active.classList.remove('active')
  }
  this.classList.add('active')
}

function play(){
  // get a random num: 1 - heads / 0 - tails
  let active = document.getElementsByClassName('active')[0]
  let result = getRandomInt()
  let headsTails = document.querySelector('.heads-tails')
  let winLose = document.querySelector('.win-lose')
  
  // can do switch
  // heads win
  if (!active){
    document.querySelector('.res-h1').innerText = 'Choose your side!';
    return -1;
  }
  
  document.querySelector('.res-h1').innerText = 'Results:';
  document.querySelector('.res-gif').src = '/media/penguin-flip.gif'
  
  if (result == 1){
    heads++;
    headsTails.innerText = "Heads"
    if (active.matches(".active.heads")){
      // the coin is heads and you win
      winLose.innerText = 'You Won!'
      won += 1;
    } else {
      lose += 1;
      winLose.innerText = 'You Lose!'
    }
  } else {
    tails++;
    headsTails.innerText = 'Tails'
    if (active.matches(".active.tails")){
      // the coin is heads and you win
      winLose.innerText = 'You Won!'
      won += 1;
    } else {
      lose += 1;
      winLose.innerText = 'You Lose!'
    }
    
  }
    wonTd.innerText = won;
    loseTd.innerText = lose;

  // if result == 1 -> heads win
  // and if headsBtn is active -> you win
  // otherwise -> you lose

  //if result == 0 -> tails win
  // and if tailsBtn is active -> you win

}



function getRandomint(){
  return Math.floor(Math.random() * NUM);
}