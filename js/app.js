(function(){

    let $options = document.getElementById('options');
    let $winner = document.getElementById('winner');
    let $computer = document.getElementById('computer');

    let $playerScore = document.getElementById('pScore');
    let $computerScore = document.getElementById('cScore');

    let $reset = document.getElementById('reset');

    $options.addEventListener('click', function(e){

            computerPlays()
            
            let text = computerPlays()
            
        $computer.textContent = text

        
        //Rock  
       if(e.target.dataset.opt === 'pRock' && text === 'Rock'){
           $winner.style.color = 'orange'
           $winner.textContent = 'Draw'
           
       } else if(e.target.dataset.opt === 'pRock' && text === 'Paper'){
           $winner.textContent = 'You loose!'
           $computerScore.innerHTML = parseInt($computerScore.innerHTML)+1;
           $winner.style.color = 'red'
       }else if(e.target.dataset.opt === 'pRock' && text === 'Scissor'){
           $winner.textContent = 'You win!'
           $playerScore.innerHTML = parseInt($playerScore.innerHTML)+1;
           $winner.style.color = 'green'
       }

       //Paper
       if(e.target.dataset.opt === 'pPaper' && text === 'Paper'){
           $winner.style.color = 'orange'
           $winner.textContent = 'Draw'
           
       } else if(e.target.dataset.opt === 'pPaper' && text === 'Scissor'){
           $winner.textContent = 'You loose!'
           $computerScore.innerHTML = parseInt($computerScore.innerHTML)+1;
           $winner.style.color = 'red'
       }else if(e.target.dataset.opt === 'pPaper' && text === 'Rock'){
           $winner.textContent = 'You win!'
           $playerScore.innerHTML = parseInt($playerScore.innerHTML)+1;
           $winner.style.color = 'green'
       }

       //Scissor
       if(e.target.dataset.opt === 'pScissor' && text === 'Scissor'){
           $winner.style.color = 'orange'
           $winner.textContent = 'Draw'
       } else if(e.target.dataset.opt === 'pScissor' && text === 'Rock'){
           $winner.textContent = 'You loose!'
           $computerScore.innerHTML = parseInt($computerScore.innerHTML)+1;
           $winner.style.color = 'red'
       }else if(e.target.dataset.opt === 'pScissor' && text === 'Paper'){
           $winner.textContent = 'You win!'
           $playerScore.innerHTML = parseInt($playerScore.innerHTML)+1;
           $winner.style.color = 'green'
       }

    })

    function computerPlays(){
        let arr = ['Rock', 'Paper', 'Scissor']
       
        return arr[Math.floor(Math.random() *3)]
        
    }
  
    function reset(){

        $reset.addEventListener('click', function(){
            $playerScore.textContent = 0;
            $computerScore.textContent = 0;
            $winner.textContent = '';
            $computer.textContent = '';
        })
    }

    reset()

    


})();

