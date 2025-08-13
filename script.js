const button = document.querySelector('button')


button.addEventListener('click', () => {
    const NumberUsuario = document.querySelector('input').value
    const resultado = document.querySelector('p')

    if(NumberUsuario % 2 === 0) {
        resultado.innerHTML = `${NumberUsuario}<br>Par`
        resultado.style.visibility = "visible"
        resultado.style.background = "#2260a6"
    } else {
        resultado.innerHTML = `${NumberUsuario}<br>Impar    `
        resultado.style.visibility = "visible"
        resultado.style.background = "#f55e2a"
    }
    NumberUsuario = document.querySelector('input').value = ""

})