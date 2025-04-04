const container = document.querySelector(".container") //Seleciona o primeiro elemento HTML que possui a classe "container". Esse elemento provavelmente envolve toda a área do seu gerador de QR Code.
const qrCodeBtn = document.querySelector("#qr-form button") //Seleciona o botão dentro do formulário com o id "qr-form". Este é o botão que o usuário clica para gerar o QR Code.
const qrCodeInput = document.querySelector("#qr-form input") //Seleciona o campo de input dentro do formulário com o id "qr-form". É onde o usuário digita o texto/URL para gerar o QR Code.
const qrCodeImg = document.querySelector("#qr-code img") //Seleciona a tag <img> dentro do elemento com o id "qr-code". É onde a imagem do QR Code será exibida.


// Eventos 

//Gerar QR Code

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value //Obtém o valor digitado pelo usuário no campo de input e armazena na variável qrCodeInputValue.
    if (!qrCodeInputValue) return //Verifica se o campo de input está vazio. Se estiver, a função é interrompida (return) e nada acontece. Isso evita gerar QR Codes em branco.
    qrCodeBtn.innerText = "Gerar Código..." //Altera o texto do botão para "Gerar Código..." enquanto o QR Code está sendo gerado. Feedback visual para o usuário.
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}` // Esta é a linha chave! Define o atributo src da tag<img>`. A URL usa a API do qrserver.com para gerar o QR Code. https://api.qrserver.com/v1/create-qr-code/: URL base da API. // ?size=150x150: Define o tamanho do QR Code para 150x150 pixels. // &data=${qrCodeInputValue}: Inclui o texto/URL digitado pelo usuário como dado para o QR Code. A parte ${qrCodeInputValue} é um template literal que insere o valor da variável.

    qrCodeImg.addEventListener("load", () => { //Adiciona um evento (addEventListener) na imagem do QR Code. Este evento aguarda o evento "load" (quando a imagem termina de carregar).
        container.classList.add("active") //Adiciona a classe "active" ao elemento container.Isso mostra o QR Code na tela (usando CSS).
        qrCodeBtn.innerText = "Código Criado" //Altera o texto do botão para "Código Criado" quando o QR Code é gerado com sucesso.
    })
}

qrCodeBtn.addEventListener("click", () => { //Quando o botão é clicado, a função generateQrCode() é chamada.
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => { //Quando uma tecla é pressionada no campo de input.
    if (e.code === "Enter") { //Se a tecla pressionada for Enter, a função generateQrCode() é chamada. Isso permite gerar o QR Code pressionando Enter.
        generateQrCode()
    }
    
})

//Limpar QR Code

qrCodeInput.addEventListener("keyup", () => { //Quando uma tecla é solta no campo de input.
    if (!qrCodeInput.value) { //Verifica se o campo de input está vazio.
        container.classList.remove("active") //Remove a classe "active" do container, para escondendo o QR Code.
        qrCodeBtn.innerText = "Gerar QR Code" //Restaura o texto do botão para "Gerar QR Code". Isso limpa a interface quando o input é esvaziado.
    }
})