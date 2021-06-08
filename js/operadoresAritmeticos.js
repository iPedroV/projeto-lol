
subtotal = (13 + 1) * 5;
frete = 0.5 * (13 + 1);
total = subtotal + frete;

cifrao = "R$ ";

subResultado = document.getElementById('subtotalvalor');
subResultado.textContent += cifrao + subtotal;


freteResultado = document.getElementById('fretevalor');
freteResultado.textContent += cifrao + frete;

totalResultado = document.getElementById('totalvalor');
totalResultado.textContent += cifrao + total;

hotel = {};

hotel.nome = 'Pedro';
hotel.quartos = 3;
resultado2 = document.getElementById('hotel');
ht = [hotel.nome + ' ' + hotel.quartos]
resultado2.textContent = ht;