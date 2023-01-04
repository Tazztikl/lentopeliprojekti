import random
import mysql.connector

yhteys = mysql.connector.connect(
    host='127.0.0.1',
    port=3306,
    database='flight_game',
    user='mariadb.sys',
    password='salasana',
    autocommit=True
)

Matkat = ("Rovaniemi -> Kairo (4076km)",
          "Kairo -> Mandalay (6561km)",
          "Mandalay -> Anchorage (13 229km)",
          "Anchorage -> Brazil (suoralento) (8036km)"
          )
pituudet = (4076, 6561, 13229)

nopeus = 0
kantavuus = 0
kestävyys = 0
kulunutaika = 0
onnistumismahdollisuus = 33

kanisteri = (4, 1, 3)
aika_iso_tynnyri = (2, 3, 4)
Bluetooth_tankki_Norjaan = (5, 5, 1)

tankit = (kanisteri, aika_iso_tynnyri, Bluetooth_tankki_Norjaan)

paperilennokki = (3, 5, 1)
täyttä_metallia_yeah = (1, 3, 5)
vitun_nopee_lokki = (5, 1, 3)

rungot = (paperilennokki, täyttä_metallia_yeah, vitun_nopee_lokki)

Jonnen_viritetty_mopomoottori = (5, 1, 2)
polkumoottori = (1, 3, 4)
rakettimoottori = (5, 5, 0)

moottorit = (Jonnen_viritetty_mopomoottori, polkumoottori, rakettimoottori)

tankkinimet = ("kanisteri", "aika iso tynnyri", "Bluetooth-tankki Norjaan")
runkonimet = ("paperilennokki", "täyttä metallia yeah", "vitun nopee lokki")
moottorinimet = ("Jonnen viritetty 80cc mopomoottori", "polkumoottori", "rakettimoottori")

nykyinenmoottori = 0
nykyinentankki = 0
nykyinenrunko = 0

nykyinenrunko = random.randint(0, 1)
nykyinenmoottori = random.randint(0, 1)
nykyinentankki = random.randint(0, 1)

nopeus = moottorit[nykyinenmoottori][0] + rungot[nykyinenrunko][0] + tankit[nykyinentankki][0]
kantavuus = moottorit[nykyinenmoottori][1] + rungot[nykyinenrunko][1] + tankit[nykyinentankki][1]
kestävyys = moottorit[nykyinenmoottori][2] + rungot[nykyinenrunko][2] + tankit[nykyinentankki][2]
print("Aloitat lentokoneella jonka runko on %s, moottorina %s ja tankkina toimii %s." % (
    runkonimet[nykyinenrunko], moottorinimet[nykyinenmoottori], tankkinimet[nykyinentankki]))
print(f"nopeus: {nopeus}")
print(f"kantavuus: {kantavuus}")
print(f"kestävyys: {kestävyys}")

matkat = 0
while (matkat < 3):
    myrsky = random.randint(1, 4) == 4
    print(f"Seuraava kohteesi on: {Matkat[matkat]}")
    if (myrsky):
        print("Varo! Kohteessa on meneillään myrsky. Tarvitset kestävän koneen.")
    vaihdettavaosa = int(
        input('Valitse minkä osan haluaisit arpoa uudestaan 1=moottori, 2=runko, 3=tankki, 0=ei mitään'))
    if (vaihdettavaosa != 0):

        if (vaihdettavaosa == 1):
            nykyinenmoottori = random.randint(0, 2)
        elif (vaihdettavaosa == 2):
            nykyinenrunko = random.randint(0, 2)
        elif (vaihdettavaosa == 3):
            nykyinentankki = random.randint(0, 2)
    nopeus = moottorit[nykyinenmoottori][0] + rungot[nykyinenrunko][0] + tankit[nykyinentankki][0]
    kantavuus = moottorit[nykyinenmoottori][1] + rungot[nykyinenrunko][1] + tankit[nykyinentankki][1]
    kestävyys = moottorit[nykyinenmoottori][2] + rungot[nykyinenrunko][2] + tankit[nykyinentankki][2]
    print("Lentokoneesi runko on %s, moottorina %s ja tankkina toimii %s." % (
        runkonimet[nykyinenrunko], moottorinimet[nykyinenmoottori], tankkinimet[nykyinentankki]))
    print(f"nopeus: {nopeus}")
    print(f"kantavuus: {kantavuus}")
    print(f"kestävyys: {kestävyys}")
    print()
    syöte = input("Lennonjohto on antanut luvan nousta. Paina Enter lähteäksesi lentoon")
    if (kantavuus * 900 < pituudet[matkat]):
        print("Polttoaine ei riittänyt. Kone tippui")
        break
    if (myrsky):
        if (kestävyys < 12 & random.randint(1, 3) != 3):
            print("Koneesi ei kestänyt myrskyä")
            break

    print(f"Matkaan meni {pituudet[matkat] / (nopeus * 100)} tuntia")
    kulunutaika = kulunutaika + pituudet[matkat] / (nopeus * 100)
    matkat = matkat + 1

print(f"Koko matkaan meni {kulunutaika} tuntia")

if (kantavuus * 900 < pituudet[matkat]) {
console.log("Polttoaine ei riittänyt. Kone tippui");
break;
}
if (myrsky) {
if (kestävyys < 12 & & Math.floor(Math.random() * 3) !== 3) {
console.log("Koneesi ei kestänyt myrskyä");
break;
}
}

console.log(`Matkaan
meni ${pituudet[matkat] / (nopeus * 100)}
tuntia
`);
kulunutaika = kulunutaika + pituudet[matkat] / (nopeus * 100);
matkat + +;

console.log(`Koko
matkaan
meni ${kulunutaika}
tuntia
`);
