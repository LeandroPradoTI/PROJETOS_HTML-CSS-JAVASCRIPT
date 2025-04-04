function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('textano') //selecionamento elemento pelo getElement
    var res = document.querySelector('div#res') //selecionamento elemento pelo ySelector
    if (fAno.value.length == 0 || Number(fAno.value) > ano || fAno.value == 0) {
        alert(`[ERR] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') //Estamos reando o elemento que será interido no html
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe_menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem_homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto_homem.png')
            }else {
                img.setAttribute('src', 'img/idoso_homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe_menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem_mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto_mulher.png')
            }else {
                img.setAttribute('src', 'img/idoso_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //estamos inserindo o elemento img no html dentro de res
    }
}