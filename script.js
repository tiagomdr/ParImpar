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

    let ParOuImpar = 0;

    if(SomarValores % 2 == 0 ) {
        ParOuImpar = "Par"
    } if (SomarValores % 2 == 1) {
        ParOuImpar = "impar"
    }

    if (NumberUsuario > 10 || NumberUsuario < 0) {
        return alert('O número precisa ser entre [ 0 e 10 ]')

    }   

    if (select.value === "" || isNaN(NumberUsuario)) {
        return alert('Por favor preencha todos os valores abaixo!')
    }

    if(avatar === "") {
        return alert('Por favor selecione um avatar')
    }

    if (select.value === "par" && SomarValores % 2 === 0 || select.value === "impar" && SomarValores % 2 === 1) {
        vitorias++
        resultado.innerHTML = `${avatar} [${NumberUsuario}] 🤖 [${NumeroBot}]<br>${SomarValores} é ${ParOuImpar}<br>Você Ganhou! 🎉`;

        resultado.style.background = "green"
        resultado.style.visibility = "visible"
    } else {
        derrotas++
        resultado.innerHTML = `${avatar} [${NumberUsuario}] 🤖 [${NumeroBot}]<br>${SomarValores} é ${ParOuImpar}<br>Bot Ganhou! 🥲 `;
        resultado.style.background = "red"
        resultado.style.visibility = "visible"
    }

    partidas++
})

button02.addEventListener('click', () => {
const avatar = document.querySelector('.avatar').value

    if(partidas === 0) {
          return alert('Para ver placar primeiro jogue uma partida!')
    } 

    if(avatar === "") {
        return alert('Selecione um avatar')
    }

    if (vitorias > derrotas) {
        placar.innerHTML = `Placar Final 🏁<br>🎲 Partidas: ${partidas}<br>🎉 Vitorias: ${vitorias}<br>😒 Derrotas: ${derrotas}<br><br> Ranke 🏆<br>🥇 Top 1: ${avatar} ${vitorias}<br>🥈 Top 2: 🤖 ${derrotas} `
    } else if (derrotas > vitorias) {
        placar.innerHTML = `Placar Final 🏁<br>🎲 Partidas: ${partidas}<br>🎉 Vitorias: ${vitorias}<br>😒 Derrotas: ${derrotas}<br><br> Ranke 🏆<br>🥇 Top 1: 🤖 ${derrotas}<br>🥈 Top 2: ${avatar} ${vitorias} `
    }
    escuro.style.visibility = "visible"
    placar.style.transform = "translateX(10px)"
    placar.style.trasition = "transform 1.1s ease-in-out"
    placar.style.visibility = "visible"

})


function desaparecer() {
    placar.style.transform = "translateX(-1000px)";
    escuro.style.transition = "visibility 1s ease-in-out"
    escuro.style.visibility = "hidden";
}
