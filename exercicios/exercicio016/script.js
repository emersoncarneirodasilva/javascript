function contar() {
    let inicio = window.document.getElementById("txti")
    let fim = window.document.getElementById("txtf")
    let passo = window.document.getElementById("txtp")
    let res = window.document.getElementById("res")

    if (inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando passo sendo 1")
            p =1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {          // contagem progressiva
               res.innerHTML += ` ${c} \u{1F449}` 
            }        
        } else {
            for(let c = i; c >= f; c -= p) {          // contagem regressiva
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`       
    }
}