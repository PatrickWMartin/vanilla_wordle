function keyClick(e){
    const target = e.target;
    const currentGuess = game.dataset.currentGuess;
    const turn = game.dataset.turn;
    
    if (target.tagName === 'BUTTON' && target.innerText !== 'ENTER' && target.innerText !== '<' && currentGuess.length < 5){
        const game = document.getElementById('game');
        // document.getElementById('guess-1').children[1].innerText
        //.innerText
        if (currentGuess){
            document.getElementById(`guess-${turn}`).children[currentGuess.length].innerText = target.innerText; 
        }else{
            document.getElementById(`guess-${turn}`).children[0].innerText = target.innerText; 
        }
        game.dataset.currentGuess = currentGuess + target.innerText  
        console.log(game.dataset.currentGuess);
    }
}



const keyBoard = document.getElementById('keyboard');

keyBoard.addEventListener('click', keyClick); 
