import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());
app.route('/')
.get((req, res) => {
    res.send('Hello Yen Nu!');
})
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    console.log(`Server run at http://localhost:${Port}`)});
