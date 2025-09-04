$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false, // Botões de navagação desativados
    responsive:{ // Quantidade de filmes exibidos dependendo do tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})