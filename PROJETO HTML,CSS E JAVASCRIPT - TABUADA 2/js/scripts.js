// Seleção de elementos
const multiplicarForm = document.querySelector("#multiplicacao-form") //Seleciona o formulário HTML com o id "multiplicacao-form". Este formulário provavelmente contém os campos para inserir o número e o multiplicador.
const numeroinput = document.querySelector("#numero") //Seleciona o campo de entrada de número com o id "numero".
const multiplicarInput = document.querySelector("#multiplicador") // Seleciona o campo de entrada do multiplicador com o id "multiplicador".
const multiplicarTabela = document.querySelector("#multiplicar-operacoes") // Seleciona a tabela (ou o elemento que irá conter a tabela) com o id "multiplicar-operacoes". É neste elemento que a tabela de multiplicação será gerada dinamicamente.
const multiplicadorTitulo = document.querySelector("#multiplicar-titulo span") //Seleciona o elemento <span> dentro do elemento com o id "multiplicar-titulo". Este elemento será usado para exibir o número que está sendo multiplicado.


//Funções

const criarTabela = (numero, multiplicadorNumero) => { //Esta função é responsável por gerar a tabela de multiplicação.
    multiplicarTabela.innerHTML = "" //Limpa o conteúdo da tabela antes de gerar uma nova. Isso garante que a tabela anterior seja removida antes de exibir a nova.
    for(i = 1; i <= multiplicadorNumero; i++){ //Este loop i tera do 1 até o valor do multiplicador.
        const resultado = numero * i //Calcula o resultado da multiplicação do número pelo iterador i.

        const template = `<div class="linhas"> 
                        <div class="operation">${numero} x ${i} =</div>
                        <div class="result">${resultado}</div>
                        </div>`
        const parser = new DOMParser() //Cria um objeto DOMParser para transformar a string HTML em elementos do DOM (Document Object Model)

        const htmltemplate = parser.parseFromString(template, "text/html") //Converte a string HTML em um documento HTML.

        const row = htmltemplate.querySelector(".linhas") //Seleciona o elemento com a classe "linhas" (que representa uma linha da tabela) dentro do documento HTML gerado.

        multiplicarTabela.appendChild(row) //Adiciona a linha da tabela ao elemento que contém a tabela (selecionado anteriormente pelo id "multiplicar-operacoes").
    }
    multiplicadorTitulo.innerText = numero //Define o texto do elemento <span> (selecionado anteriormente) com o número que está sendo multiplicado.
}

//Eventos

multiplicarForm.addEventListener("submit", (e) => {//Este trecho de código adiciona um ouvinte de evento ao formulário. Ele escuta o evento de "submit" (quando o formulário é enviado).
    e.preventDefault() //: Impede o comportamento padrão do formulário, que é recarregar a página.
    const multiplicarNumero = +numeroinput.value //Obtém o valor do campo de entrada de número e o converte para um número inteiro usando o operador +
    const multiplicadorNumero = +multiplicarInput.value //Obtém o valor do campo de entrada do multiplicador e o converte para um número inteiro.

        if (!multiplicarNumero || !multiplicadorNumero) return  //Verifica se ambos os campos foram preenchidos. Se algum deles estiver vazio, a função é interrompida.                 
            criarTabela(multiplicarNumero, multiplicadorNumero) //Chama a função criarTabela para gerar a tabela de multiplicação com os valores fornecidos.
})