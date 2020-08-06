const express = require("express")
const server = express()

server.use(express.json())


//GET - root test

server.get('/', (req, res) => {
    res.send('hello world')
})




const port = 2319
server.listen(port, () => console.log(`\n ** API on port ${port} ** \n`))
