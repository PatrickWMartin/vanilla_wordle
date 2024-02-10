let turn = 1;
let currentGuess = "";
let solution = "MICRO";

function keyClick(e){
    
    // get the target of the click event so we can see if its a button
    // this way we can advantage of event delagation and place the listener
    // on the keybard div instead of a listener for each button
    const target = e.target;
   
    if (target.tagName === 'BUTTON'){
        if (target.innerText !== 'ENTER' && target.innerText !== '<' && currentGuess.length < 5){
            letterKeyClick(target);
        }else if (target.innerText === '<'){
            backspaceClick();
        }else if (target.innerText === 'ENTER'){
            enterClick();
        }
    }
}

function letterKeyClick(target){
    document.getElementById(`guess-${turn}`).children[currentGuess.length].innerText = target.innerText; 
    currentGuess += target.innerText;
}

function backspaceClick(){
    if (currentGuess){
        document.getElementById(`guess-${turn}`).children[currentGuess.length-1].innerText = '';
        currentGuess = currentGuess.slice(0, -1);
    }

}

function enterClick(){
    if (currentGuess.length === 5){
        document.getElementById(`guess-${turn}`).classList.add('past');
        let letters = document.getElementById(`guess-${turn}`).children;
        for (let i = 0; i < letters.length; i++){
            document.getElementById(letters[i].innerText).classList.add('past');
            letters[i].classList.add("reveal");
            if (letters[i].innerText == solution[i]){
                letters[i].classList.add("correct");
                document.getElementById(letters[i].innerText).classList.add('right-key');
            } else if (solution.includes(letters[i].innerText)){
                letters[i].classList.add('somewhere-else');
                document.getElementById(letters[i].innerText).classList.add('somewhere-key');
            }else{
                letters[i].classList.add('wrong');
                document.getElementById(letters[i].innerText).classList.add('wrong-key');
            }
            
        }
        turn+=1 
        currentGuess = '';            
    }

}

const keyBoard = document.getElementById('keyboard');
keyBoard.addEventListener('click', keyClick); 
