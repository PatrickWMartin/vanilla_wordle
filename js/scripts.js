let turn = 1;
let currentGuess = "";
let solution = "MICRO";


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
            enterClick();
        }
    }
}


function enterClick(){
    if (currentGuess.length === 5){
        document.getElementById(`guess-${turn}`).classList.add('past');
        let letters = document.getElementById(`guess-${turn}`).children;
        for (let i = 0; i < letters.length; i++){
            if (letters[i].innerText == solution[i]){
                letters[i].classList.add("correct");
            } else if (solution.includes(letters[i].innerText)){
                letters[i].classList.add('somewhere-else');
            }else{
                letters[i].classList.add('wrong');
                document.getElementById(letters[i].innerText).classList.add('wrong');
            }
            letters[i].classList.add("reveal");
            
        }
        turn+=1 
        currentGuess = '';            
    }

}
const keyBoard = document.getElementById('keyboard');

keyBoard.addEventListener('click', keyClick); 
