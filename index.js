
const http = require('http')

const server = http.createServer((request, response) => {
    response.write('HOLA MUNDO DESDE MI PRIMER SERVIDOR')
    response.end()
})

server.listen(8080,() => {
    console.log('Servidor escuchando en puerto 8080')
})
