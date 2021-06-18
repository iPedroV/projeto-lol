
//De acordo com a suite escolhida o hospede já tem marcados as refeições
var suiteEscolhida = [document.forms[0].elements[0], document.forms[0].elements[1], document.forms[0].elements[2]];

for( var i=[0]; i < suiteEscolhida.length; i++){
    suiteEscolhida[i].addEventListener('change', function(){

        var almoco = document.forms[0].elements[11]
        var janta = document.forms[0].elements[12]

        almoco.checked = false;
        janta.checked = false;

        if(suiteEscolhida[0].checked){
            almoco.checked = true;
            janta.checked = true;
        }
        if(suiteEscolhida[1].checked){
            almoco.checked = true;
            janta.checked = false;
        }
        if(suiteEscolhida[2].checked){
            almoco.checked = false;
            janta.checked = false;
        }
    })
}


//Nome Completo

nome = document.getElementById('nome');

function validaNome(){
    var expNome = /^([^0-9]){3,50}$/g;
    var verificaNome = expNome.exec(nome.value);
    var mostraNome = '';

    if(!verificaNome){
        mostraNome = 'O nome precisa ser completo e sem números';
    }

    nome.setCustomValidity(mostraNome);
}


//E-mail

email = document.querySelector('#email');

email.addEventListener('blur', validaEmail(),false);

function validaEmail(){
    var expEmail = /(^[a-z]\w+{1,20})@\w+.[a-z]+\.?[a-z]{3}/g;
    var verificaEmail = expEmail.exec(email.value);
    var mostraEmail = '';

    if(!verificaEmail){
        mostraEmail = 'O e-mail precisa ter @';
    }

    email.setCustomValidity(mostraEmail);
}

//Tratando do CPF

cpf = document.querySelector('#cpf');

cpf.addEventListener('blur', (evento)=>{
    verificaCpf(evento.target);
    
})

function verificaCpf(input){
    var expCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
    var verificarCpf = expCpf.exec(input.value);
    var mostraCpf = 'passou';

    if(!verificarCpf){
        mostraCpf = 'Digite apenas números';
    }
    input.setCustomValidity(mostraCpf);
    input.value = formataCpf(input.value, expCpf);
}


function formataCpf(valorCpf, cpfExp){
var formatadoCpf = valorCpf.replace(cpfExp,function(vregex,p1,p2,p3,p4){
    return p1 + '.' + p2 + '.' + p3 + '-' + p4;
})
    return formatadoCpf;
}
/*cpf.addEventListener('blur', validaCpf(), false);

function validaCpf(){
    var expCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g;
    var verficaCpf = 
}*/

//Data de Nascimento - Uma outra forma de declarar eventos, utilizando Arrow Functions



//Telefone



//Senha


//Mostra Senha


//Termos de Privacidade


//Botão de Envio sem termo exibe caixa de alerta
