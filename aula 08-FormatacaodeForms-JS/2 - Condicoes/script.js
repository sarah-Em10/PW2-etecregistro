const inputVelocidade = document.querySelector('input#inputVelocidade');
const resultado = document.querySelector('div#resultado');

const limite = 80;
function verificarVelocidade() {
    const velocidade = Number(inputVelocidade.value);
    
        resultado.innerHTML = `Sua velocidade atual é de ${velocidade} km/h. O limite da via é ${limite} km/h.`;

    if (velocidade > limite) {
        resultado.innerHTML += `<p>Você esta <strong>multado</strong> por excesso de velocidade!</p>`;
    }

    else {
        resultado.innerHTML += `<p>Você esta dentro do limite de velocidade! Dirija com cuidado!</p>`;
    }
}