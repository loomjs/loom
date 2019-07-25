import express from 'express'
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

export default app