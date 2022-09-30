
const resultado = document.getElementById('resultado');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const calcular = document.getElementById('calcular');

    if(nome !== '' && altura !== '' && peso !== '') {
        alert ('valor preenchido')
    } else {
        resultado.textContent = 'Preencha todos os campos';
    }
}

calcular.addEventListener('click', imc);