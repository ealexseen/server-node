const express = require('express')
const app = express()
const port = 9191

app.get('/', (req, res) => {
    console.log('Hello World!')

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})