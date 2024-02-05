function keyClick(e){
    const target = e.target;

    if (target.tagName === 'BUTTON' && target.innerText !== 'ENTER' && target.innerText !== '<'){
        const game = document.getElementById('game');
        let currentGuess = game.dataset.currentGuess;
        game.dataset.currentGuess = currentGuess + target.innerText  
        console.log(game.dataset.currentGuess);
    }
}



const keyBoard = document.getElementById('keyboard');

keyBoard.addEventListener('click', keyClick); 
