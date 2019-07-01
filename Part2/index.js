console.log('dfj;sajfdfjsfdajk')

let id = document.getElementById('idInput')
let color = document.getElementById('colorInput')

function setCard(){
    let card = document.getElementById(id.value) 
    console.log(card)

    card.style.color  = color.value
}



