'use strict';

let nopeus = 0;
let kantavuus = 0;
let kestävyys = 0;
let kulunutaika = 0;
let onnistumismahdollisuus = 33;

const kanisteri = [5, 5, 5];
const aika_iso_tynnyri = [5, 5, 5];
const Bluetooth_tankki_Norjaan = [5, 5, 5];

const tankit = [kanisteri, aika_iso_tynnyri, Bluetooth_tankki_Norjaan];

const paperilennokki = [5, 5, 5];
const täyttä_metallia_yeah = [5, 5, 5];
const vitun_nopee_lokki = [5, 5, 5];

const rungot = [paperilennokki, täyttä_metallia_yeah, vitun_nopee_lokki];

const Jonnen_viritetty_mopomoottori = [5, 5, 5];
const polkumoottori = [1, 3, 4];
const rakettimoottori = [5, 5, 5];

const moottorit = [Jonnen_viritetty_mopomoottori, polkumoottori, rakettimoottori];

const tankkinimet = ['kanisteri', 'aika iso tynnyri', 'Bluetooth-tankki Norjaan'];
const runkonimet = ['paperilennokki', 'täyttä metallia yeah', 'vitun nopee lokki'];
const moottorinimet = ['Jonnen viritetty 80cc mopomoottori', 'polkumoottori', 'rakettimoottori'];

let nykyinenmoottori = 0;
document.getElementById('moottori').innerHTML = nykyinenmoottori;

let nykyinentankki = 0;
let nykyinenrunko = 0;

nykyinenrunko = Math.floor(Math.random() * 2);
nykyinenmoottori = Math.floor(Math.random() * 2);
nykyinentankki = Math.floor(Math.random() * 2);

nopeus = moottorit[nykyinenmoottori][0] + rungot[nykyinenrunko][0] + tankit[nykyinentankki][0];
kantavuus = moottorit[nykyinenmoottori][1] + rungot[nykyinenrunko][1] + tankit[nykyinentankki][1];
kestävyys = moottorit[nykyinenmoot


console.log(`Aloitat lentokoneella jonka runko on ${runkonimet[nykyinenrunko]}, moottorina ${moottorinimet[nykyinenmoottori]} ja tankkina toimii ${tankkinimet[nykyinentankki]}.`);
console.log(`nopeus: ${nopeus}`);
console.log(`kantavuus: ${kantavuus}`);
console.log(`kestävyys: ${kestävyys}`);

let matkat = 0;
while (matkat < 3) {
    const myrsky = Math.random() * 4 === 4;
    console.log(`Seuraava kohteesi on: ${Matkat[matkat]}`);
    if (myrsky) {
        console.log('Varo! Kohteessa on meneillään myrsky. Tarvitset kestävän koneen.');
    }
    const vaihdettavaosa = parseInt(
        prompt('Valitse minkä osan haluaisit arpoa uudestaan 1=moottori, 2=runko, 3=tankki, 0=ei mitään')
    );
    if (vaihdettavaosa !== 0) {
        if (vaihdettavaosa === 1) {
            nykyinenmoottori = Math.floor(Math.random() * 3);
        } else if (vaihdettavaosa === 2) {
            nykyinenrunko = Math.floor(Math.random() * 3);
        } else if (vaihdettavaosa === 3) {
            nykyinentankki = Math.floor(Math.random() * 3);
        }
    }
    nopeus = moottorit[nykyinenmoottori][0] + rungot[nykyinenrunko][0] + tankit[nykyinentankki][0];
    kantavuus = moottorit[nykyinenmoottori][1] + rungot[nykyinenrunko][1] + tankit[nykyinentankki][1];
    kestävyys = moottorit[nykyinenmoottori][2] + rungot[nykyinenrunko][2] + tankit[nykyinentankki][2];
    console.log(`Lentokoneesi runko on ${runkonimet[nykyinenrunko]}, moottorina ${moottorinimet[nykyinenmoottori]} ja tankkina toimii ${tankkinimet[nykyinentankki]}.`);
    console.log(`nopeus: ${nopeus}`);
    console.log(`kantavuus: ${kantavuus}`);
    console.log(`kestävyys: ${kestävyys}`);
    console.log();
    const syöte = prompt('Lennonjohto on antanut luvan nousta. Paina Enter lähteäksesi lentoon');
    if (kantavuus * 900 < pituudet[matkat]) {
        console.log('Polttoaine ei riittänyt. Kone tippui');
        break;
    }
    if (myrsky) {
        if (kestävyys < 12 & Math.random() * 3 !== 3) {
            console.log('Koneesi ei kestänyt myrskyä');
            break;
        }
    }
