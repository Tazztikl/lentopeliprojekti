const mysql = require('mysql');

const koordit = [0,0];

function isotkentat() {
  const sql = 'SELECT * FROM airport WHERE type ="large_airport"';
  console.log(sql);
  const kursori = yhteys.cursor();
  kursori.execute(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      results.forEach((i) => {
        koordit.push(`${i[4], i[5]}`);
        console.log(`${i[4]} ${i[5]}`);
      });
    }
  });
}

const yhteys = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  database: 'flight_game',
  user: 'root',
  password: 'salasana',
  autocommit: true,
});

isotkentat();
console.log(koordit);
