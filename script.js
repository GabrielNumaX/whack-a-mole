

let points = 0;

function startGame() {

  // event.preventDefault();

  let timer = document.getElementById('clock');
  let count = 10;

  let intervalID = setInterval(function() {

    timer.innerHTML = count;
    count--;

    if(count === 0){
      clearInterval(intervalID, endGame());
    }

    moles();

  }, 1000);

  //supposedly this will TERMINATE function execution
  return;

} //end startGame()

// function score() {
//
//   event.preventDefault();
//   let score = document.getElementById('score');
//   points++;
//   score.innerHTML = points
//   console.log(this); //prints the mole element
//
//   //supposedly this prevents double clicking BUT ITS NOT WORKING
//   mole.removeEventListener('click', score);
//
// }


//class up to holeX
function moles() {

  //value between 1000 and 500 miliseconds
  let randomTime = Math.floor(Math.random()*(1000-500+1)+500);
  //value between 1 and 6 for holesX class
  let randomHole = Math.floor(Math.random()*(6-1+1)+1);

  /*IMPORTANT: I tried to get hole by class 'hole(randomHole)' and it
  returned an error: couldn't do holeX.classList.add('up'), this said
  that couldn't apply 'add' to undefined. My conclusion was that
  this happened because I was selecting element by class*/

  //get hole id with random number from above
  let holeX = document.getElementById('hole'+randomHole); //.classList.add('up');
  // console.log(holeX);
  holeX.classList.add('up');

  let mole = document.getElementById('mole'+randomHole);

  function score() {

    event.preventDefault();
    let score = document.getElementById('score');
    points++;
    score.innerHTML = points
    console.log(this); //prints the mole element
  
    //supposedly this prevents double clicking BUT ITS NOT WORKING
    mole.removeEventListener('click', score);

  }

  mole.addEventListener('click', score);

  let holeUp = setTimeout(function(){

    holeX.classList.remove('up')

  }, randomTime)

} //end moles()

function endGame() {

  if(points >= 3){
    let win = document.getElementById('winPopup');
    win.style.display = 'block';
    let timer = document.getElementById('clock');
    timer.innerHTML = 0;

    let = playAgainBtn = document.getElementById('playAgainButton');

    playAgainBtn.addEventListener('click', function() {
      win.style.display = 'none';
      let score = document.getElementById('score');
      points = 0;
      score.innerHTML = points
      startGame();
    });
  }
  else {
    let lose = document.getElementById('losePopup');
    lose.style.display = 'block'
    let timer = document.getElementById('clock');
    timer.innerHTML = 0;
    let retryBtn = document.getElementById('retryButton');

    retryBtn.addEventListener('click', function() {
      lose.style.display = 'none';
      let score = document.getElementById('score');
      points = 0;
      score.innerHTML = points
      startGame();
    });
  }
} // end endGame()
