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