const button = document.querySelector('button')


button.addEventListener('click', () => {
    const NumberUsuario = Number(document.querySelector('input').value)
    const select = document.querySelector('.selecionarParImpar')
    const avatar = document.querySelector('.avatar').value
    const resultado = document.querySelector('p')

    const NumeroBot = Math.floor(Math.random() * 10) + 1

    const SomarValores = NumberUsuario + NumeroBot

    if(NumberUsuario > 10) {
        return  alert('Número precisar ser menor que 10')
        
    }

    if(select.value === "" ||    isNaN(NumberUsuario)) {
        return alert('Por favor preencha os campos abaixo!')
    }

    if(select.value === "par" && SomarValores % 2 === 0 || select.value === "impar" && SomarValores % 2 === 1){
         resultado.innerHTML = `${avatar} [${NumberUsuario}] 🤖 [${NumeroBot}]<br>Soma: ${SomarValores}<br>${avatar} Ganhei! 🎉`;
         resultado.style.background = "#f55e2a"
        resultado.style.visibility = "visible"
    } else {
        resultado.innerHTML = `${avatar} [${NumberUsuario}] 🤖 [${NumeroBot}]<br>Soma: ${SomarValores}<br>🤖 Ganhou! `;
        resultado.style.background = "#2260a6"
        resultado.style.visibility = "visible"
    }
})