import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';

dotenv.config()

const app = express();


// Middlewares
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.send("Welcome")
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Listening in http://localhost:${PORT}`)
})
