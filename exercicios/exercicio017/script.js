function tabuada() {
    let num = window.document.getElementById("txtn")
    let tab = window.document.getElementById("seltab")
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value) 
        let c = 0                                                            // c será o contador
        tab.innerHTML = ""                                                   // fazer isso limpará a tabela depois de usada
        while (c <= 10) {
            let item = window.document.createElement("option")               // .createElement("opition") serve para criar elemento (no caso do exercício um option)
            item.text = `${n} x ${c} = ${n*c}`                               // text aki será a parte de dentro do option
            item.value = `tab${c}`;                                          // ñ faz sentido para o javascript, mas faz para outras linguagens
            tab.appendChild(item);                                           // mostra a tabuada
            c++
        }
    }
}