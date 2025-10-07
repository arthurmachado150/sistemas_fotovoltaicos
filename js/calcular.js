// 540 W = 0,54KW
// 0,54KW * 4,6 * 0,75 = 1,863 kWh/dia
// 1,863 kWh/dia * 30 (1 mês) = 55,89 kWh/mês



let resposta = document.getElementById('resposta')

function principal(){

    let kWh_mes = 55.89
    let kWh_mes_desejada = Number(document.getElementById('kWh_mes_desejada').value)

    let calculo_de_quantas_placas_sao_necessarias = (kWh_mes_desejada / kWh_mes)

    console.log(`Você precisará de: ${calculo_de_quantas_placas_sao_necessarias.toFixed(2)} placas solares Tiger Pro 72HC Monofacial <br>`)

    resposta.innerHTML = ``
    resposta.innerHTML += `Se o valor em kWh/mês desejado é: ${kWh_mes_desejada} kWh/mês <br><br>`
    resposta.innerHTML += `Você precisará de: ${calculo_de_quantas_placas_sao_necessarias.toFixed(2)} placas solares (Tiger Pro 72HC Monofacial) <br>`
}