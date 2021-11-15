function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 2) {
        msg.innerHTML = `Agora são ${hora} hora. Boa Madrugada!`
        img.src = "./fotomadrugada.jpg"
        window.document.body.style.background = "#1b1918"
    } else if (hora >= 2 && hora < 5){
        msg.innerHTML = `Agora são ${hora} horas. Boa Madrugada!`
        img.src = "./fotomadrugada.jpg"
        window.document.body.style.background = "#1b1918"        
    } else if (hora >= 5 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas. Bom Dia!`
        img.src = "./fotomanha.jpg"
        window.document.body.style.background = "#fbe9b6"
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
        img.src = "./fototarde.jpg"
        window.document.body.style.background = "#edb691"
    } else {
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
        img.src = "./fotonoite.jpg"
        window.document.body.style.background = "#5f5853"
    }
}
