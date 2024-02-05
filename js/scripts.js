function keyClick(e){
    const target = e.target;
    const currentGuess = game.dataset.currentGuess;
    const turn = game.dataset.turn;
    
    if (target.tagName === 'BUTTON'){
        if (target.innerText !== 'ENTER' && target.innerText !== '<' && currentGuess.length < 5){
            const game = document.getElementById('game');
            if (currentGuess){
                document.getElementById(`guess-${turn}`).children[currentGuess.length].innerText = target.innerText; 
            }else{
                document.getElementById(`guess-${turn}`).children[0].innerText = target.innerText; 
            }
            game.dataset.currentGuess = currentGuess + target.innerText  
        } else if (target.innerText === '<'){
            if (currentGuess){
                console.log(document.getElementById(`guess-${turn}`).children[currentGuess.length-1])
                document.getElementById(`guess-${turn}`).children[currentGuess.length-1].innerText = '';
                game.dataset.currentGuess = currentGuess.slice(0, -1);
            }
        }else if (target.innerText === 'ENTER'){
          if (currentGuess.length === 5){
                game.dataset.turn = Number(turn) + 1;
                game.dataset.currentGuess = '';            
            }
        }

    }
}



const keyBoard = document.getElementById('keyboard');

keyBoard.addEventListener('click', keyClick); 
