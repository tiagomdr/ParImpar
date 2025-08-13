const button01 = document.querySelector('.button01')
const button02 = document.querySelector('.button02')
 const resultado = document.querySelector('.jogar')
 const placar = document.querySelector('.placar')
 const escuro = document.querySelector('.escuro')

    let vitorias = 0;
    let derrotas = 0;
    let partidas = 0;

button01.addEventListener('click', () => {
    const NumberUsuario = Number(document.querySelector('input').value)
    const select = document.querySelector('.selecionarParImpar')
    const avatar = document.querySelector('.avatar').value
   



    const NumeroBot = Math.floor(Math.random() * 10) + 1

    const SomarValores = NumberUsuario + NumeroBot

    if(NumberUsuario > 10) {
        return  alert('Número precisa entre 1 e 10')
        
    }

    if(select.value === "" ||    isNaN(NumberUsuario)) {
        return alert('Por favor preencha os campos abaixo!')
    }

    if(select.value === "par" && SomarValores % 2 === 0 || select.value === "impar" && SomarValores % 2 === 1){
        vitorias++
         resultado.innerHTML = `${avatar} [${NumberUsuario}] 🤖 [${NumeroBot}]<br>Soma: ${SomarValores}<br>Você Ganhou! 🎉`;
         
         resultado.style.background = "green"
        resultado.style.visibility = "visible"
    } else {
         derrotas++
        resultado.innerHTML = `${avatar} [${NumberUsuario}] 🤖 [${NumeroBot}]<br>Soma: ${SomarValores}<br>Bot Ganhou! 🥲 `;
        resultado.style.background = "red"
        resultado.style.visibility = "visible"
    }

    partidas++
})

button02.addEventListener('click', () => {
    escuro.style.visibility = "visible"
    placar.innerHTML = `Placar 🏁<br>🎲Partidas: ${partidas}<br>Vitorias: ${vitorias}<br>Derrotas:${derrotas}`
    placar.style.transform = "translateX(10px)"
    placar.style.trasition = "transform 1s ease-in-out"
    placar.style.visibility = "visible"

})


function desaparecer() {
    placar.style.transform = "translateX(-1000px)";
    escuro.style.transition = "visibility 1s ease-in-out"
    escuro.style.visibility = "hidden";
}
