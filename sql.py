import mysql.connector

koordit = [0,0]
def isotkentät():
    sql = 'SELECT * FROM airport WHERE type ="large_airport"'
    print(sql)
    kursori = yhteys.cursor()
    kursori.execute(sql)
    tulos = kursori.fetchall()
    if kursori.rowcount >0 :
        for i in tulos:
            koordit.append(f"{i[4], i[5]}")
            print(f"{i[4]} {i[5]}")
    return

yhteys = mysql.connector.connect(
    host='127.0.0.1',
    port=3306,
    database='flight_game',
    user='root',
    password='salasana',
    autocommit=True
)

isotkentät()
print(koordit)
