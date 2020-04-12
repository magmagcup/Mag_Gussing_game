const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    stage: {type: Number, default: 0},
    guess_time: Number,
    question: [String],
    guessing: [String],
    answer: [String],
    gameStart: Boolean,
    gameEnd: Boolean
})

module.exports = mongoose.model('Registration', regSchema)