console.log('dfj;sajfdfjsfdajk')

let id = document.getElementById('idInput')
let color = document.getElementById('colorInput')

function setCard(){
    let card = document.getElementById(id.value) 
    console.log(card)

    card.style.color  = color.value
}

function rest(){
    let card = document.getElementById(id.value) 
    card.style.color  = color.value
    
   let res = document.getElementById(id.value) 
for (let i = 0; i < 4; i++) {
    res.style.color.remove
}  
}

