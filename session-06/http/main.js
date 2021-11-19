const http = require('http')
const port = 8080 || 3000

const server = http.createServer((request, response) => {
  const metodo = request.method
  const url = request.url
  response.statusCode = 200
  response.setHeader('Content-type', 'text/plain')

  if (metodo === 'GET' && url === '/koder') {
    response.write('Aqui estan todos los koders')
  } else if (metodo === 'POST' && url === '/koder') {
    response.write('Aqui puedes crear koders')
  } else {
    response.write('No se que hacer ayuda')
  }

  response.end()
})

server.listen(port, () => console.log(`Server up and running on ${port}`))

// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>Hello, World!</h1>')
// })

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// })
