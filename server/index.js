const ws = require('ws')
const server = new ws.Server({ port: '8080' })

server.on('connection', socket => {
    socket.on('message', message => {
        console.log(message)
        const b = Buffer.from(message)
        console.log(b.toString())
        socket.send(`${message}`)
    })
})