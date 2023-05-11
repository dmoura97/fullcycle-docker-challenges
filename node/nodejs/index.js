const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json())
const port = 3000;

let connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

connection.connect();

connection.query(`
    CREATE TABLE IF NOT EXISTS 
        people (
            id int not null auto_increment primary key, 
            name varchar(255)
        )`
);

connection.query(`
    INSERT INTO 
        people(name) 
    VALUES 
        ('André'),
        ('Fulano'),
        ('Ciclano'),
        ('Beltrano')
`);

connection.query(`
    SELECT 
        * 
    FROM
        people
`, (error, rows, fields) => {
    if (error) throw error;
    getPeople(rows);
});

connection.end();

let response = `
    <p> <h1> Full Cycle Rocks! </h1> </p>
    <p> - Lista de nomes cadastrada no banco de dados - </p>
    </br>
    <table style="border: 1px solid black;">
    <tr>
      <th> id </th>
      <th> name </th>
    </tr>
`;

const getPeople = (rows) =>{
    rows.forEach(row => {
        response += `
            <tr>
                <td>${row.id}</td>
                <td>${row.name}</td>
            </tr>
        `;
    });
    response += '</table>'
}


app.get('/', (req, res) => {
    res.send(response)
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
