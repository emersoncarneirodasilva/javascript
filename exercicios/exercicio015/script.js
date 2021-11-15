function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    if (formAno.value.length == 0 || Number(formAno.value > ano)) {
        window.alert("[ERRO] Verifique novamente!")
    } else {
        var fsex = document.querySelectorAll("input[type='radio']")    //var fsex = window.document.getElementsByTagName("radsex"); //obs; ñ sei pk ñ funcionou
        var idade = ano - Number(formAno.value)        
        var gênero = ""   
        var img = window.document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Masculino"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "criancaM.jpg")
            } else if (idade < 25) {
                //Jovem
                img.setAttribute("src", "jovemM.jpg")
            } else if (idade < 60) {
                //Adulto
                img.setAttribute("src", "adultoM.jpg")
            } else if (idade < 140) {
                //Idoso
                img.setAttribute("src", "idosoM.jpg")
            } else {
                //Múmia
                img.setAttribute("src", "caveiraM.jpg")
            }

        } else {
            gênero = "Feminino"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "criancaF.jpg")
            } else if (idade < 25) {
                //Jovem
                img.setAttribute("src", "jovemF.jpg")
            } else if (idade < 60) {
                //Adulto
                img.setAttribute("src", "adultoF.jpg")
            } else if (idade < 140) {
                //Idoso
                img.setAttribute("src", "idosoF.jpg")
            } else {
                //Múmia
                img.setAttribute("src", "caveiraF.jpg")
            }
        }
        res.innerHTML = `Detectamos gênero ${gênero} com ${idade} anos.`
        res.style.textAlign = "center"
        res.appendChild(img)
    }
}