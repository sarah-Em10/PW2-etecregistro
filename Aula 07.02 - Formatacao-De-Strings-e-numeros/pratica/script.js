const nome = window.prompt("Qual é o seu nome?");
    if (nome !== null) {
         const anoNasc = window.prompt("Qual é o seu ano de nascimento?");
         const cidade = window.prompt("Qual é a sua cidade?");
         const salarioInput = window.prompt("Digite seu salário:");

         if (anoNasc !== null && cidade !== null && salarioInput !== null) {
             const anoNumero = parseInt(anoNasc);
              const salarioNumero = parseFloat(salarioInput);

                if (!isNaN(anoNumero) && !isNaN(salarioNumero)) {
                    
                 const anoAtual = new Date().getFullYear();
                const idade = anoAtual - anoNumero;

                document.write(`<strong> Nome em maiúsculas:</strong> ${nome.toUpperCase()}</p>`);
               
                 document.write(`<strong> Idade:</strong> ${idade} anos</p>`);

                 document.write(`<strong> Cidade em maiúsculas:</strong> ${cidade.toUpperCase()}</p>`);

                    document.write(`<strong> Quantidade de caracteres da cidade:</strong> ${cidade.length}</p>`);

                    document.write(`<strong> Salário em Real:</strong> ${salarioNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`);

                    const taxaDolar = 5.50; 
                    const valorDolar = salarioNumero / taxaDolar;
                  
                    document.write(`<strong> Salário em Dólar:</strong> ${valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>`);


                    const taxaEuro = 5.90;
                    const valorEuro = salarioNumero / taxaEuro;
                   
                    document.write(`<strong> Salário em Euro:</strong> ${valorEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>`);
                }
            }
        }