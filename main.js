// CONTADORES

function counter (elemento, valorLimite, incremento){   
    setInterval(() => {
        soma(elemento, valorLimite, incremento)
    }, 1);
    
}
function soma(elemento, valorLimite, incremento){
    let valorAtual = parseInt(elemento.text());
    if( valorAtual != valorLimite){    
        valorAtual = valorAtual + incremento;
        elemento.text(valorAtual); 
    }
}

counter($(".projetos h2"), 1200, 1);
counter($(".clientes h2"), 5800, 10);
counter($(".cafes h2"), 10000, 10);

// CARROSSEL

$(document).ready(function(){
    $('#cards-thumbs').slick({
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 5000,
              settings: "unslick"
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
  });