

let btn = document.getElementById('btn-dark')
let btnLight = document.getElementById('btn-light')
let body = document.querySelector('body')
let img = document.getElementById('imagem')
let header = document.getElementById('head')



btn.addEventListener('click', trocaCor)
btnLight.addEventListener('click', retornaCor)

function trocaCor() {
    body.style.background = 'black'
    body.style.color = 'white'
    btn.style.color = 'white'
    btnLight.style.color = 'white'
    header.src = '/img/transferir.png'


}

function retornaCor() {
    body.style.background = 'white'
    body.style.color = 'black'
    btnLight.style.color = 'black'
    btn.style.color = 'black'
    header.src ='/img/6528597.png'
    
}