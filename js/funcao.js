function helloWorld() {
    document.write('Olá mundo!');
}

helloWorld();

function helloWorldName(nome) {
    return document.write('<br> Olá Mundo, meu nome é ' + nome);
}

helloWorldName('Pedro');

function calcularAreaRetangulo(base, altura) {
    var area = base * altura;
    return area;
}

var retangulo = calcularAreaRetangulo(16, 4);

document.write('<br> A área é de ' + retangulo);

function calcularAreaVolume(altura, largura, profundidade) {
    var area = altura * largura;
    var volume = altura * largura * profundidade;
    var resultadoAreaVolume = [ area,volume];
    return resultadoAreaVolume;
}

var calculoCaixaArea = calcularAreaVolume(16, 4, 5)[0];
var calculoCaixaVolume = calcularAreaVolume(10, 20, 30)[1];

document.write('<br> A área da caixa é: ' + calculoCaixaArea);
document.write('<br> O volume da caixa é: ' + calculoCaixaVolume);

var areaCaixa = (function(){
    var calculoArea = 16 * 4;
    return calculoArea;
}());

document.write('<br> A função Anônima faz a mesma coisa: ' + areaCaixa);