// CONTADOR
let valorAtual = 0;
const valorLimite = parseInt($(".counter h2").text());

const loopingSoma = setInterval(soma, 1);

function soma(){
    if( valorAtual != valorLimite){    
        valorAtual++;
        $(".counter h2").text(valorAtual); 
    }
    else {
        pararSoma();
    }
}
function pararSoma() {
    clearInterval(loopingSoma);
  }


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