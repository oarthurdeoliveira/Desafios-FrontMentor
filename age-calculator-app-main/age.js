var submit = document.getElementById("image_button")

submit.addEventListener("click", calcular)

function calcular() {
    var date = new Date()
    var dia_atual = date.getDate()
    var mes_atual = date.getMonth() + 1
    var ano_atual = date.getFullYear()

    //Input usuario
    var dia = document.getElementById("dia")
    var mes = document.getElementById("mes")
    var ano = document.getElementById("ano")

    var error_log = document.getElementById("error")


    //Transformar em numero
    dia = Number(dia.value)
    mes = Number(mes.value)
    ano = Number(ano.value)

    //Input resultado
    var res_dia = document.getElementById("res_dia")
    var res_mes = document.getElementById("res_mes")
    var res_ano = document.getElementById("res_ano")

    var meses = [31,28,31,30,31,30,31,31,30,31,30,31]

    var dias_meses_atual = Number(mes_atual - 1)

    var dias_meses = Number(mes - 1)

    if(ano % 4 == 0 && ano % 100 != 0) {
        meses[1] += 1
    } else if (ano_atual % 4 == 0 && ano_atual % 100 != 0) {
        meses[1] += 1
    }

    if (dia > meses[dias_meses] || dia < 1) {
        error_log.innerHTML = "Erro de dias!"
        return
    } else if (mes > 12 || mes < 1) {
        error_log.innerHTML = "Erro de meses!"
        return
    } else if (ano > ano_atual || ano < 1) {
        error_log.innerHTML = "Erro de anos!"
        return
    } else {
        error_log.innerHTML = ""
    }

    var ano2 = ano_atual - ano
    var mes2 = mes_atual -  mes
    var dia2 =  dia_atual - dia


    if (dia > dia_atual) {
        alert("dia é maior que o atual")
        alert(meses[dias_meses])
        dia2 += meses[dias_meses_atual]
        mes2 -= 1

    }

    if (mes >= mes_atual) {
        mes2 += 12
        ano2 -= 1
    }


    res_ano.innerHTML = ano2
    res_mes.innerHTML = mes2
    res_dia.innerHTML = dia2
}