const buttons = document.querySelectorAll("#image-picker li") //Esta parte seleciona todos os elementos <li> (itens de lista) que estão dentro de um elemento com o id image-picker.
//querySelectorAll retorna uma lista (NodeList) com todos os elementos encontrados.
//const buttons = ...: A lista de elementos <li> é armazenada na variável constante buttons. const significa que o valor dessa variável não pode ser alterado posteriormente.
const image = document.querySelector("#product-image") //Esta linha seleciona o primeiro elemento que possui o id product-image. 
// querySelector retorna o primeiro elemento correspondente ou null se nenhum for encontrado.
// const image = ...: O elemento de imagem selecionado é armazenado na variável constante image.

buttons.forEach((btn) => { //Este trecho de código itera sobre cada elemento <li> (armazenado na variável buttons). Para cada elemento, a função dentro dos parênteses é executada.  btn representa o elemento <li> atual em cada iteração.
    btn.addEventListener("click", (e) => { //Dentro do loop, um "ouvinte de eventos" (event listener) é adicionado a cada botão. Este ouvinte aguarda um evento de "click". Quando o botão é clicado, a função dentro dos parênteses é executada.  e representa o objeto do evento de clique.
    
        buttons.forEach((btn) => { //Este loop interno remove a classe selected de todos os elementos com a classe color dentro de todos os botões. Isso garante que apenas um botão tenha a classe selected por vez.
            btn.querySelector(".color").classList.remove("selected")
        })

        const button = e.target //representa o elemento que foi clicado (o botão). Este elemento é armazenado na variável button.

        const id = button.getAttribute("id") //Obtém o valor do atributo id do botão clicado e armazena na variável id. Os IDs dos botões correspondem aos nomes dos arquivos de imagem (ex: "golden", "green", etc.).

        button.querySelector(".color").classList.add("selected") //Adiciona a classe selected ao elemento com a classe color dentro do botão clicado.  Isso provavelmente indica visualmente que este botão está selecionado.

        image.classList.add("changing") //Adiciona a classe changing ao elemento de imagem. Isso pode ser usado para adicionar uma transição ou efeito visual enquanto a imagem está mudando.
        image.setAttribute("src", `img/iphone_${id}.jpg`) //Define o atributo rsc da imagem.img/iphone_${id}.jpg e constrói o caminho para a nova imagem usando o id do botão clicado. Por exemplo, se o id` for "blue", o caminho da imagem será "img/iphone_blue.jpg".

        setTimeout(() => {
            image.classList.remove("changing") //Esta função define um temporizador. Após 200 milissegundos (0.2 segundos), a função dentro dos parênteses é executada.  Neste caso, ela remove a classe changing do elemento de imagem, terminando a transição ou efeito visual.
        }, 200)

    })
})