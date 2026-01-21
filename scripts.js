/* Variaveis

    let - Variavel que pode ser alterada
    const (constante)- Variavel que nao pode ser alterada

*/

/* Funções
    
    Um trecho de código que só é executado
    quando é chamado

*/

const finalForms = document.querySelector('.formulario-fale-conosco')

const mask = document.querySelector('.mascara-formulario')


function showForms() {
    finalForms.style.left = '50%';
    finalForms.style.transform = 'translate(-50%)';
    finalForms.style.transition = '1s ease-in-out';

    mask.style.visibility = 'visible';
}



function closeForms() {
    finalForms.style.left = '-400px';
    finalForms.style.transform = 'translate(-0)';
    finalForms.style.transition = '1s ease-in-out';

    mask.style.visibility = 'hidden';
}
