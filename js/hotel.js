
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
            
            document.getElementById('quartoHotel').textContent = 'Não há mais vagas';
            document.getElementById('reservaQuartoHotel').textContent = 'Todos os quartos estão reservados!';
        }
    }
    window.setTimeout(function(){
        document.getElementById('botao').click();
    }, 1000);
}





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

document.write('aalooo ' + reserva);

