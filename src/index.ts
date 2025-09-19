const express = require('express')
const app = express()

app.get('/', (any: req, res) => 
    res.send('helloworld')
)
app.listen(3000, () => console.log('server ready'))