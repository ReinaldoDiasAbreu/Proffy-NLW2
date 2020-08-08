

const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// Configuração do Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure(
    "src/views", // Indicar onde estão os arquivos html
    {
        express: server, // indicando servidor
        noCache: true, // quardar cache em memória
    }
) 

server
// receber os dados do req body
.use(express.urlencoded({ extended: true }))
// Define a pasta raiz dos arquivos estáticos
.use(express.static("public")) 
// Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
