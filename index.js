const customExpress = require('./config/customExpress')
const port = 3000

const app = customExpress()

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})


