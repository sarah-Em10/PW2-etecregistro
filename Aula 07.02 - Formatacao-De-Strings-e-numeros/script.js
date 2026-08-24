//JAVASCRIPT
const nome = window.prompt ("Qual é o seu nome?")
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras. <br>`)

document.write(`Seu nome em maiúsculas é: ${nome.toUpperCase()} <br>`)

document.write(`Seu nome em minúsculas é: ${nome.toLowerCase()} <br>`)

const salario = Number(window.prompt('Digite seu salário:'))

document.write(`Seu salario com casas decimais é: ${salario.toFixed(2)} <br>`)

document.write(`Seu salario com vírgula nas decimais é: ${salario.toFixed(2).replace('.',',')} <br>`)

document.write(`Seu salario em real: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} <br>`)

document.write(`Seu salario em dólar: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'USD'})} <br>`)

document.write(`Seu salario em euro: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'EUR'})} <br>`)