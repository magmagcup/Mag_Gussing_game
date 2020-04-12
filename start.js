const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/pantip')

require('./models/Regis')

const app = require('./app');

const server = app.listen(3000, () => {
    console.log('run')
})