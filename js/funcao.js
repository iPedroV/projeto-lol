function helloWorld(){
    document.write('Olá mundo!');
}

helloWorld();

function helloWorldName(nome){
    return document.write('<br> Olá Mundo, meu nome é ' + nome);
}

helloWorldName('Pedro');

function calcularAreaRetangulo(base, altura){
    var area = base * altura;
    return document.write('<br> A área é de ' + area);
}

calcularAreaRetangulo(4, 2);