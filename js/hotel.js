
hotel = {};

hotel.nome = 'Vista Park Sul';
resultado = document.getElementById('nomeHotel');
resultado.textContent = hotel.nome;

hotel.quartos = 30;
resultado = document.getElementById('quartoHotel');
resultado.textContent = hotel.quartos;

hotel.reservados = 20;
resultado = document.getElementById('reservaQuartoHotel');
resultado.textContent = hotel.reservados;


function calcularReserva() {
    
    for(var i=0;i<1;i++){
        
        resultado = hotel.reservados ++;
        resultado2 = hotel.quartos --;
        if(resultado<50){
            document.getElementById('reservaQuartoHotel').textContent = resultado;
            document.getElementById('quartoHotel').textContent = resultado2;
        }else{
            clearInterval(x);
            document.getElementById('quartoHotel').textContent = 'Não há mais vagas';
            document.getElementById('reservaQuartoHotel').textContent = 'Todos os quartos estão reservados!';
            document.getElementById("data").textContent = "ESGOTADO";
        }
    }
    window.setTimeout(function(){
        document.getElementById('botao').click();
    }, 10000);
}


var countDownDate = new Date("Jun 10, 2021 11:57:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("data").textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("data").textContent = "Hora de ir embora";
  }
}, 1000);

/*
var data = new Date();
data.getDay()
var diaDaSemana = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

diaDaSemana[data.getDay()];

data.getMonth();
var mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

mes[data.getMonth()];

var dataDeHoje = data.getDate() + '/' + mes[data.getMonth()] + '/' + data.getFullYear();
document.getElementById('data').textContent = dataDeHoje

*/

resultado = calcularReserva(hotel.reservados);
//resultado = document.getElementById('reservarQuarto')
/*
var hotel = {
    nome: 'Vista Park Sul',
    quartos: 40,
    reservados: 25,
    checaDisponibilidade: function () {
        return this.quartos + this.reservados;
    }
}

*/


