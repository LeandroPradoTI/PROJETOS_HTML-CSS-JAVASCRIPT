

// Seleção de elementos
const inputFoco = document.getElementById("name")
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")


// Funções
const getLetterLowerCase = () => { //Utilizamos a Tabela ASCII é um conjunto de caracteres, que é usado para a troca de informações entre computadores, para escolher uma letra aleatória em minúsculo
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97))
}

const getLetterUpperCase = () => { //Utilizamos a Tabela ASCII é um conjunto de caracteres, que é usado para a troca de informações entre computadores, para escolher uma letra aleatória em maiúsculo
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65))
}

const getNumber = () => { // Números aleatórios de 0 a 9
    return Math.floor(Math.random() * 10).toString() 
}

const getSymbol = () => { // Simbolos aleatórios
    const symbols = "!@#$%&*()-_={}[]?<>.,;\/"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = ""

    const passwordLength = +lengthInput.value

    const generators = []

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }
    if (numbersInput.checked) {
        generators.push(getNumber)
    }
    if (symbolsInput.checked) {
        generators.push(getSymbol)
    }
    if (generators.length === 0) {
        return
    }

    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomvalue = generators[Math.floor(Math.random() * generators.length)]()
            password += randomvalue
        })
    }
    password = password.slice(0, passwordLength)
    
    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerText = password
}


// Eventos
document.addEventListener('DOMContentLoaded', function () { // é um evento que é disparado quando o HTML da página é completamente carregado e analisado pelo navegador.
    if (inputFoco) { // Se o elemento com o id "name" foi encontrado.
        inputFoco.focus() // define o foco (o cursor) no elemento inputFoco (o campo de entrada de nome).
    }
})

generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha alterada com sucesso"

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar"
        }, 2000)
    })
})