document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {
        e.preventDefault()

        const resultadoValor = document.getElementById('resultado-valor')
        const resultadoContainer = document.getElementById('resultado')
        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.floor((Math.random() * numeroMaximo)+1) // Toda essa algazarra é para não gerar o resultado 0, e nem a cima do número máximo

        resultadoValor.innerText = numeroAleatorio
        resultadoContainer.style.display = 'block'
    })
})