const mensagem = `
Valentina, Desde que você entrou na minha vida tudo ficou perfeito. Seu sorriso ilumina meus dias e faz tudo valer a pena. Obrigado por estar comigo e por ser essa pessoa incrível. Eu te amo muitooooooo❤️ Feliz dia da mulher meu amorzinho `

let i = 0

function abrirCarta(){

document.getElementById("envelope").classList.add("aberto")

escrever()

}

function escrever(){

if(i < mensagem.length){

document.getElementById("texto").innerHTML += mensagem.charAt(i)

i++

setTimeout(escrever,40)

}

}

// contador

const dataInicio = new Date("2025-11-05")

function atualizarTempo(){

const agora = new Date()

const diff = agora - dataInicio

const dias = Math.floor(diff/(1000*60*60*24))

document.getElementById("contador").innerHTML =
"Estamos juntos há " + dias + " dias ❤️"

}

setInterval(atualizarTempo,1000)


// chuva de corações

function criarCoracao(){

const heart = document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.animationDuration=(Math.random()*3+2)+"s"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),5000)

}

setInterval(criarCoracao,200)


// explosão

function explodirCoracoes(){

for(let i=0;i<100;i++){

const heart = document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"

heart.style.left=Math.random()*100+"vw"

heart.style.top=Math.random()*100+"vh"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),3000)

}

}


// fogos

function fogosCoracao(){

for(let i=0;i<40;i++){

const heart = document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"

heart.style.left="50vw"

heart.style.top="50vh"

heart.style.transform=`translate(${Math.random()*400-200}px,${Math.random()*400-200}px)`

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),2000)

}

}


// mensagem secreta

function mensagemSecreta(){

document.getElementById("secreta").innerHTML =
"Feliz Dia das Mulheres, meu amor❤️ Quero que você saiba o quanto eu admiro a mulher incrível que você é. Obrigado por trazer tanto amor e alegria pra minha vida,o como você é especial e me faz ser melhor todos os dias. Eu te amo muitooo❤️"


}


// galeria

function abrirFoto(img){

document.getElementById("fotoTela").style.display="flex"

document.getElementById("fotoGrande").src = img.src

}

function fecharFoto(){

document.getElementById("fotoTela").style.display="none"

}

function abrirCarta(){

document.getElementById("envelope").classList.add("aberto")

document.getElementById("musica").play()

escrever()

}