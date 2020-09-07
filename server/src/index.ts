import express from 'express'

const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://143.110.143.205:${port}`)
})