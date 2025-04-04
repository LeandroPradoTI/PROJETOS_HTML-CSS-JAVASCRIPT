/*
Este código implementa um carregamento "lazy loading" (carregamento preguiçoso) de imagens em uma página web. Isso significa que as imagens só são carregadas quando estão prestes a entrar na área visível (viewport) do navegador. Isso melhora o desempenho da página, pois evita o carregamento de imagens que o usuário pode nunca ver.
*/

const images = document.querySelectorAll(".image-container img") //Esta linha seleciona todas as tags <img> que estão dentro de elementos HTML com a classe image-container

//Aqui, um novo IntersectionObserver é criado. O IntersectionObserver é uma API que permite observar quando um elemento HTML entra ou sai da área visível do navegador.
const observer = new IntersectionObserver((entries, observer) => { // (entries, observer) => { ... }: Esta é a função de callback que será executada sempre que um elemento observado cruzar a área visível./  entries: É um array de objetos IntersectionObserverEntry, onde cada objeto representa uma mudança na interseção de um elemento observado./ observer: é o objeto IntersectionObserver que está sendo usado.

    entries.forEach(entry => { //Este loop itera por cada objeto IntersectionObserverEntry no array entries.
        if(!entry.isIntersecting) return //Esta propriedade indica se o elemento observado está atualmente na área visível. Se estiver, ela retorna true; caso contrário, retorna false

        const image = entry.target //Esta propriedade retorna o elemento HTML que foi observado.

        image.src =  image.src.replace("&w=10", "&w=1000") //Esta linha substitui a parte da URL que especifica a largura da imagem. No exemplo, &w=10 é substituído por &w=1000. Isso é feito para carregar uma versão de maior resolução da imagem quando ela se torna visível.
        observer.unobserve(image) // Esta linha remove o elemento de imagem da lista de elementos observados pelo IntersectionObserver. Isso significa que o IntersectionObserver não monitorará mais essa imagem após ela ter sido carregada.
    })
}, {}) //{}: Este objeto vazio é usado para configurar as opções do IntersectionObserver. Como está vazio, ele usará as opções padrão.

images.forEach((image) => { //Este loop itera por cada imagem na lista images
    observer.observe(image) //ra cada imagem, o método observe() do IntersectionObserver é chamado. Isso inicia a observação da imagem.
})