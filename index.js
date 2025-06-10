const express = require('express')
require('dotenv').config()
const cors =  require('cors')
const app = express()
const port =  process.env.PORT || 6579;
require('./src/models')
const produtosRoutes = require('./src/routes/produtos')
const usersRoutes = require('./src/routes/users')
const authRoutes = require('./src/routes/auth')
const { config } = require('dotenv')

app.use(cors())
app.use(express.json())
app.use(produtosRoutes)
app.use(usersRoutes)
app.use(authRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})