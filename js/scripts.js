let turn = 1;
let currentGuess = "";

function keyClick(e){
    const target = e.target;
    
    if (target.tagName === 'BUTTON'){
        if (target.innerText !== 'ENTER' && target.innerText !== '<' && currentGuess.length < 5){
            document.getElementById(`guess-${turn}`).children[currentGuess.length].innerText = target.innerText; 
            currentGuess += target.innerText;
        }else if (target.innerText === '<'){
            if (currentGuess){
                document.getElementById(`guess-${turn}`).children[currentGuess.length-1].innerText = '';
                currentGuess = currentGuess.slice(0, -1);
            }
        }else if (target.innerText === 'ENTER'){
            if (currentGuess.length === 5){
                turn+=1 
                currentGuess = '';            
            }
        }
    }
}



const keyBoard = document.getElementById('keyboard');

keyBoard.addEventListener('click', keyClick); 
