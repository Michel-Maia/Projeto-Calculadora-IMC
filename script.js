
const resultado = document.getElementById('resultado');

function imc() {
    const nome = document.getElementById('nome');
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const calcular = document.getElementById('calcular');

    if(nome.value !== '') {
        alert('teste preenchido')
    }
}

calcular.addEventListener('click', imc);