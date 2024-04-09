function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    
    if (elemento === null){
        console.log('Elemento não encontrado'); 
    }
    else if (elemento != null && elemento.localName === 'audio'){
       elemento.play();
    }
    else {
        console.log('Seletor inválido');
    }
}

/*
const pom = document.querySelector('.tecla_pom');
pom.onclick = tocaSomPom;
*/

const listasDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listasDeTeclas.length ; contador++) {
    const tecla = listasDeTeclas[contador];

    console.log(tecla);

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter') {  
            tecla.classList.add('ativa');
        }
            
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

