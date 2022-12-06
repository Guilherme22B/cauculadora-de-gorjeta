let conta = 0
let gorjeta = 0
let NumeroDePessoas = 0 

function receberConta(){
    conta = Number(document.querySelector("#bill-input").value)
    validarDados()
}

function receberPorcentagem(numero){
    gorjeta = numero
    
    if (numero === 0){
        gorjeta = Number(document.querySelector("#tip-input").value)
    }
    validarDados()
}

function ReceberNumeroDePessoas(){
    NumeroDePessoas = Number(document.querySelector("#people-input").value)
    validarDados()
}

function validarDados(){
    if (conta !== 0 && gorjeta !== 0 && NumeroDePessoas !== 0){
        caucularTotais()
        return
    }
}
function caucularTotais(){
    const gorjetaPorPessoa = (conta * (gorjeta / 100)) / NumeroDePessoas
    const paragrafogorjeta = document.querySelector("#tip-amont_result")
    paragrafogorjeta.innerText = `$${gorjetaPorPessoa.toFixed(2)}`

    const totalPorPessoa = (conta / NumeroDePessoas) + gorjetaPorPessoa
    const paragrafoTotal = document.querySelector("#total_results")
    paragrafoTotal.innerText = `$${totalPorPessoa.toFixed(2)}`
}
function reset(){
    conta = 0
    document.querySelector("#bill-input").value=""

    gorjeta = 0 
    document.querySelector("#tip-input").value=""
    NumeroDePessoas = 0
    document.querySelector("#people-input").value=""

    const paragrafogorjeta = document.querySelector("#tip-amont_result")
    paragrafogorjeta.innerText = "$0.00"

    const paragrafoTotal = document.querySelector("#total_results")
    paragrafoTotal.innerText = "$0.00"

}