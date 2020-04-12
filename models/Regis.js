const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    stage: Number,
    question: [String],
    guessing: [String],
    answer: [String],
    gameStart: Boolean,
    gameEnd: Boolean
})

module.exports = mongoose.model('Registration', regSchema)