import express from 'express'
import errorHandler from './middlewares/error.handler.middleware'
import routes from './routes'


const app = express()
const port = 3000
const host = 'http://localhost'

//App Configuration
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(cors())

// CONFIGURANDO PASTA PUBLIC
// app.use(express.static('public'));

// Routes Configuration
app.use(routes);

//Handlers de erro
app.use(errorHandler)

//Server initialization
app.listen(port, ()=> console.log(`⚡️:Server is running on ${host}:${port}`))