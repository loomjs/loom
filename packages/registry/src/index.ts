import startRegistry from './server'

startRegistry({
  port: 3000
}).then(server => {
  console.log(server.listening)
  console.log(`Loom Registry server started on: ${server.listening}`)
})