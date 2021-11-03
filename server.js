const server = require('fastify')()
const HOST = process.env.HOST || '127.0.0.1'
/* istanbul ignore next */
const PORT = process.env.PORT || 8000
const Recipe = require('./recipe.js')
server.get('/', async (req, res) => {
  return "Hello from Distributed Nodejs!"
})
server.get('/recipes/:id', async (req, reply) => {
  const recipe = new Recipe(req.params.id)
  await recipe.hydrate()
  return recipe
}) 

server.listen(PORT, HOST, (err, host) => {
  console.log(`Server running at ${host}`)
})
