// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function updateButton() {

const const_gravitacional = 6.674184 * Math.pow(10 , -11); 

let massa1 = document.querySelector('#massa1').value;

let massa2 = document.querySelector('#massa2').value;

let distancia = document.querySelector('#distancia').value;

let conta = (massa1 * massa2 * const_gravitacional)/Math.pow(distancia, 2);

resultado.value = conta;

  
}

let botao = document.querySelector('#calcular');

botao.addEventListener('click', updateButton);
