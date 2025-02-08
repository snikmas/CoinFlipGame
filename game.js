const btns = document.getElementsByClassName('btn');
let active = document.getElementsByClassName('active')

const headsBtn = document.querySelector('.heads')
const tailsBtn = document.querySelector('.tails')
const flip = document.querySelector('flip');

const NUM = 2
let heads = 0;
let tails = 0;


flip.addEventListener('click', play);

for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', activation)
}


function activation(){
  let active = document.getElementsByClassName('active')
  
  if (active[0]){
   active[0].classList.remove('active')
  }
  this.className += " active";
}

function play(){
  // get a random num: 1 - heads / 0 - tails
  let result = getRandomInt()


  // can do switch
  if (result){
    heads++;
    if (document.querySelector('active').matches(".active.heads")){
      // the coin is heads and you win
      document.querySelector('.output').innerText = 'Heads! You Won!'
    } else {
      document.querySelector('.output').innerText = 'Heads! You Lose!'
    }
  } else {
    tails++;
    if (document.querySelector('active').matches(".active.tails")){
      // the coin is heads and you win
      document.querySelector('.output').innerText = 'Tails! You Won!'
    } else {
      document.querySelector('.output').innerText = 'Tails! You Lose!'
    }
  }

  // if result == 1 -> heads win
  // and if headsBtn is active -> you win
  // otherwise -> you lose

  //if result == 0 -> tails win
  // and if tailsBtn is active -> you win

  output(result)
}



function getRandomint(){
  return Math.floor(Math.random() * NUM);
}