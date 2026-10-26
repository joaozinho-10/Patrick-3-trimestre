// npm init -> cria o pacote iniciar API
// npm i express

const express = require ("express")
const app = express()
app.use(express.json())
const port = 3000

app.get("/aula", async (req, res) => {
    // conectar ao banco de dados
    // ler os dados (SQL Select)
    // retornar os dados na resposta
    try{
        const resultado =  await db.pool.query("SELECT * FROM aula")
        res.status(200).json(resultado(0))

    } catch (erro){
        res.status(500).json({erro: erro.message})
    }

})

app.listen(port, ()=>{
    console.log("API rodando na porta " + port)
})

// No RapidAPI Client
// GET http://127.0.0.1:3000/aula