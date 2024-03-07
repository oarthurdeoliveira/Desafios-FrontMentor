let submit = document.getElementById("image_button")

submit.addEventListener("click", calcular)

function calcular() {
    let date = new Date()
    let dia_atual = date.getDate()
    let mes_atual = date.getMonth() + 1
    let ano_atual = date.getFullYear()

    //Input usuario
    let dia_input = document.getElementById("dia").value
    let mes_input = document.getElementById("mes").value
    let ano_input = document.getElementById("ano").value

    let res_dia = document.getElementById("res_dia")
    let res_mes = document.getElementById("res_mes")
    let res_ano = document.getElementById("res_ano")

    let error_log = document.getElementById("error")
    error_log.innerHTML = ""
    let error_test = false
    

    let meses = [31,28,31,30,31,30,31,31,30,31,30,31]

    console.log(`Data atual: ${dia_atual}, ${mes_atual}, ${ano_atual}`)
    console.log(`Dia input: ${dia_input}, ${mes_input}, ${ano_input}`)

    if (( ano_input % 4 == 0 && ano_input % 100 != 0 ) || (ano_input % 400 == 0) ) { 
        console.log("Ano input é bissexto!");
        meses[1]++ 
    } else {
        console.log("Ano input não é bissexto!");

    }

    if (dia_input < 1 || dia_input > meses[mes_input - 1]) {
        error_test = true
    } else if (meses[mes_input - 1] == undefined) {
        console.log("Mês invalido")
        error_test = true
    }

    if (mes_input < 1 || mes_input > 12) {
        error_test = true
    }

    if (ano_atual < ano_input) {
        error_test = true
    }

    if (error_test == true) {
        return
    }


    if (( ano_atual % 4 == 0 && ano_atual % 100 != 0 ) || (ano_atual % 400 == 0) ) { 
        console.log("Ano atual é bissexto!");
        meses[1]++ 
    } else {
        console.log("Ano atual não é bissexto!");
    }

    let dia_calc = dia_atual - dia_input
    let mes_calc = mes_atual - mes_input
    let ano_calc = ano_atual - ano_input



    
    console.log(meses[1])

    if (dia_atual < dia_input) {
        console.log("Dia atual é menor que o input")
        mes_calc--
        dia_calc += meses[mes_input - 1]
        console.log(meses[mes_input - 1])
    }

    if (mes_atual < mes_input) {
        console.log("Mês atual é menor que o inpuit")
        ano_calc--
        mes_calc+= 12
    }

    res_dia.innerHTML = dia_calc
    res_mes.innerHTML = mes_calc
    res_ano.innerHTML = ano_calc
    
}