const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
  //game.fillRect(0,0,100,100);
  //game.clearRect(0,0,50,50);

  game.fillText('Fede', 25, 25);
  game.fillStyle = 'purple';
  game.font = '25px Verdana';
  game.textAlign = 'left';
}