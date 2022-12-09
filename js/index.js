const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const resultadoValor = document.getElementById("resultadoValor")
const operacaovalor = document.getElementById("operacaoValor")

const executar = () => {
    if (operacaovalor.value == 'soma') {
        resultadoValor.value = parseInt(numero1.value) + parseInt(numero2.value)
    } else {
        resultadoValor.value = parseInt(numero1.value) - parseInt(numero2.value)
    }
}
