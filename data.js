const { get } = require("mongoose");

// later can do accounts
const NUM = 2; 

let heads = 0;
let tails = 0;

// return result between 0 - NUM
function getRandomInt() {
  return Math.floor(Math.random() * NUM);
}

let play = getRandomInt();

switch(play){
  case (0):
    tails++;
    break;
  case(1):
    heads++;
    break;
}