
hotel = {};

hotel.nome = 'Vista Park Sul';
resultado = document.getElementById('nomeHotel');
resultado.textContent = hotel.nome;

hotel.quartos = 30;
resultado = document.getElementById('quartoHotel');
resultado.textContent += hotel.quartos;

hotel.reservados = 20;
resultado = document.getElementById('reservaQuartoHotel');
resultado.textContent += hotel.reservados;

function calcularReserva(quartosReservados) {
    var reserva =  quartosReservados + 1 ;
    resultado = document.getElementById('resultado');
    return resultado.textContent = reserva;
}

resultado = calcularReserva(hotel.reservados);
resultado = document.getElementById('reservarQuarto')

var hotel = {
    nome: 'Vista Park Sul',
    quartos: 40,
    reservados: 25,
    checaDisponibilidade: function(){
        return this.quartos + this.reservados;
    }
}



// document.write('aalooo '+ resultado);

