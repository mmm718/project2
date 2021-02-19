const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
const { User } = require('./models/user')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://project2:12345678910@pro2.ozmde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))




app.get('/', (req, res) => res.send('안녕하세요.'))


app.post('/register', (req, res) => {

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})


app.listen(port, () => console.log(`Express app listening on port ${port}`))