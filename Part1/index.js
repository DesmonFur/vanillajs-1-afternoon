console.log('hallo')
let board = []



function play(clickedId){
    let playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)


    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }

    let topLeft = board[0]
    let topCen = board[1]
    let topRight = board[2]
    let midLeft = board[3]
    let center = board[4]
    let midRight = board[5]
    let botLeft = board[6]
    let botCen = board[7]
    let botRight = board[8]

    if(topLeft != undefined && topLeft === topRight && 
        topLeft === topCen){
            alert('winner')
        }
    if(topLeft != undefined && topLeft === center && 
        topLeft === botRight){
            alert('winner')
        }
    if(topLeft != undefined && topLeft === midLeft && 
        topLeft === botLeft){
            alert('winner')
        }

        
    if(midLeft != undefined && midLeft === midRight && 
        midLeft === center){
            alert('winner')
        }
    if(midLeft != undefined && midLeft === midRight && 
        midLeft === center){
            alert('winner')
        }
    if(topCen != undefined && topCen === center && 
        topCen === botCen){
            alert('winner')
        }
    if(midRight != undefined && midRight === botRight && 
        midRight === topRight){
            alert('winner')
        }
        

    if(botLeft != undefined && botLeft === botRight && 
        botLeft === botCen){
            alert('winner')
        }
    if(botLeft != undefined && botLeft === center && 
        botLeft === topRight){
            alert('winner')
        }
let boardFull = true
        
    for (let i = 0; i <= 8; i++) {
            if (board[i] === undefined) {
                boardFull = false;
            } }
            
            if (boardFull === true){
                alert('Issa Cat game')
            }
        }
