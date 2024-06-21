
const btnGerar = document.getElementById('gerar');


btnGerar.addEventListener('click', function() {
    
    const input1 = document.querySelector('.input-1').value;
    const input2 = document.querySelector('.input-2').value;
    const input3 = document.querySelector('.input-3').value;
    const input4 = document.querySelector('.input-4').value;
    const input5 = document.querySelector('.input-5').value;
    const input6 = document.querySelector('.input-6').value;

   
    const textoConcatenado = `${input1}\n${input2}\n${input3}\n${input4}\n${input5}\n${input6}`;

    
    const saidaGerada = document.querySelector('.input-final');

    
    saidaGerada.value = textoConcatenado;
});
