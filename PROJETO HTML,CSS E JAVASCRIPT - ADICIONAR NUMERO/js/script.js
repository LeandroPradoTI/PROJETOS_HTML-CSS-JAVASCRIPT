let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function emNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //Se o Number de n for maior ou igual a 1 e(&&) o Number de n for maior ou igual a 100
        return true
    } else {
        return false
    }
}

function emLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { // se na lista o Number de n foi !=(diferente) de -1(siginifica que não foi encontrado na lista)
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(emNumero(num.value) && !emLista(num.value, valores)) { // se num for numero válido e se  !emlista(não estiver emlista)
        valores.push(Number(num.value)) // adicionar valor de num na lista valores
        let item = document.createElement('option') //criando um elemento(tag) option para inserir posteriormente no select
        item.text = `Valor ${num.value} adicionado.` // item vai ser uma string (texto) com Interpolação ${}
        lista.appendChild(item) //adiciona item a lista do select
        res.innerHTML = ''//apaga valores de res ao acicionar um novo item a lista do select
    } else { //senão
        alert('Valor inválido ou já encontrado na lista') //exibe a mensagem do alert
    } 
    num.value = '' //apagar os valor do input de id fnum
    num.focus() //dar foco ao input de id fnum
}

function finalizar() {
    if(valores.length == 0) { //se a lista de valores do select for igual a 0
        alert('Adicione valores antes de finalizar!') //exibe a mensagem do alert
    } else { //senão
        let tot = valores.length //Cria uma variável chamada tot para armazenar a quantidade total de elementos presentes no array valores. A propriedade length de um array retorna o número de elementos que ele contém.
        let maior = valores[0] //Cria uma variável chamada maior e inicializa ela com o primeiro valor do array valores. A ideia é que, inicialmente, consideramos o primeiro elemento como o maior até encontrarmos outro maior durante a iteração.
        let menor = valores[0] //Similar ao maior, cria uma variável menor e inicializa com o primeiro valor do array. A ideia é a mesma, mas agora buscamos o menor valor.
        let soma = 0
        let média = 0
        for (let pos in valores) { //Inicia um loop que irá percorrer cada elemento do array valores .A variável pos irá assumir, em cada iteração, o índice (posição) do elemento atual do array que estamos analisando.
            soma += valores[pos] //somando todos os valores da array(lista) valores
            if (valores[pos] > maior) // Verifica se o valor atual do array (valores[pos]) é maior do que o valor atual armazenado em maior
                maior = valores[pos] //Se a condição for verdadeira, significa que encontramos um valor maior, então atualizamos maior com o valor atual.
            if (valores[pos] < menor) // Verifica se o valor atual do array é menor do que o valor atual armazenado em menor.
                menor = valores[pos] //Se a condição for verdadeira, significa que encontramos um valor menor, então atualizamos menor com o valor atual.
        }
        media = soma / tot
        res.innerHTML = ''//apaga valores de res
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` // res.innerHTML concatenado(+=) com um texto em um parágrafo(<p></p>) e com uma intermpolação(${tot}) da variável tot
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p>Somando os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}