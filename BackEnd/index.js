const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: "u318670773_sergio_916",
});
const createTable = `CREATE TABLE IF NOT EXISTS colegio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
)`;
pool.query(createTable, (err, result) => {
    if (err) throw err;
    console.log("Table created");
});


app.use(cors( {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentals: true,
    maxAge: 3600    
}
));




// HAshing Password
function hashPassword(password) {
    return require("crypto").createHash("sha256").update(password).digest("hex");
  }

// ritas post 
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = hashPassword(password);
    const [result] = await pool.query(
        "INSERT INTO colegio (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword])
    if (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    } else {
        res.status(201).redirect('/');
    }

})
app.post('/', async (req, res) => {
const { username, password } = req.body;

    const [result] = await pool.query(
        "SELECT * FROM colegio WHERE username = ?",[username]
    )
    if (result.length === 0) {
        res.status(401).send("Invalid username or password");
    } else {
        const hashedPassword = hashPassword(password);
        if (hashedPassword === result[0].password) {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/profile');
        } else {
            res.status(401).send("Invalid username or password");
        }
    }})


app.listen(3060, () => {
  console.log("Listening on port 3060");
});
