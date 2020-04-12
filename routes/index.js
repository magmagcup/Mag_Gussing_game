const express = require('express')
const mongoose = require('mongoose')

const Registration = mongoose.model('Registration')

const router = express.Router()

// router.get('/', (req, res) => {
//     res.render("from")
// })

router.get('/', (req, res) => {
    Registration.find().sort({__id:-1}).limit(1)
        .then((Registration) => {
            res.render('index.html', {title: 'guess game', Registration, no_game: "_ _ _ _"})
        })
})


router.post('/A', (req, res) => {
    const old_data = Registration.find().sort({_id:-1}).limit(1)

old_data.then((old_data) =>  {
    var index_of_answer = answer_checker("A", old_data[0].stage, old_data[0].question)
    var new_stage = old_data[0].stage

    var new_answer = old_data[0].answer
    if (index_of_answer < 4) {
        new_answer[index_of_answer] = 'A';
        var new_stage = index_of_answer + 1;
    }
    var new_guess_time = old_data[0].guess_time + 1
    var end_g = check_end_game(new_stage) 

    const data = new Registration({
        stage: new_stage,
        guess_time: new_guess_time,
        question: old_data[0].question,
        guessing: ["_"],
        answer: new_answer,
        score: [0],
        gameStart: true,
        gameEnd: end_g
    })
    data.save()
    console.log(data)
})
})

router.post('/B', (req, res) => {
    const old_data = Registration.find().sort({_id:-1}).limit(1)

old_data.then((old_data) =>  {
    var index_of_answer = answer_checker("B", old_data[0].stage, old_data[0].question)
    var new_stage = old_data[0].stage

    var new_answer = old_data[0].answer
    if (index_of_answer < 4) {
        new_answer[index_of_answer] = 'B';
        var new_stage = index_of_answer + 1;
    }
    var new_guess_time = old_data[0].guess_time + 1
    var end_g = check_end_game(new_stage) 

    const data = new Registration({
        stage: new_stage,
        guess_time: new_guess_time,
        question: old_data[0].question,
        guessing: ["_"],
        answer: new_answer,
        score: [0],
        gameStart: true,
        gameEnd: end_g
    })
    data.save()
    console.log(data)
})
})

router.post('/C', (req, res) => {
    const old_data = Registration.find().sort({_id:-1}).limit(1)

old_data.then((old_data) =>  {
    var index_of_answer = answer_checker("C", old_data[0].stage, old_data[0].question)
    var new_stage = old_data[0].stage

    var new_answer = old_data[0].answer
    if (index_of_answer < 4) {
        new_answer[index_of_answer] = 'C';
        var new_stage = index_of_answer + 1;
    }
    var new_guess_time = old_data[0].guess_time + 1
    var end_g = check_end_game(new_stage) 

    const data = new Registration({
        stage: new_stage,
        guess_time: new_guess_time,
        question: old_data[0].question,
        guessing: ["_"],
        answer: new_answer,
        score: [0],
        gameStart: true,
        gameEnd: end_g
    })
    data.save()
    console.log(data)
})
})

router.post('/D', (req, res) => {
    const old_data = Registration.find().sort({_id:-1}).limit(1)

old_data.then((old_data) =>  {
    var index_of_answer = answer_checker("D", old_data[0].stage, old_data[0].question)
    var new_stage = old_data[0].stage
    var new_answer = old_data[0].answer
    if (index_of_answer < 4) {
        new_answer[index_of_answer] = 'D';
        var new_stage = index_of_answer + 1;
    }
    var new_guess_time = old_data[0].guess_time + 1
    var end_g = check_end_game(new_stage) 

    const data = new Registration({
        stage: new_stage,
        guess_time: new_guess_time,
        question: old_data[0].question,
        guessing: ["_"],
        answer: new_answer,
        score: [0],
        gameStart: true,
        gameEnd: end_g
    })
    data.save()
    console.log(data)
})
})

router.post('/S', (req, res) => {
    mongoose.connection.db.dropCollection('registrations')
    var ques = ['A', 'B', 'C', 'D']
    var real_ques = new Array(4)
    for (var i = 0; i < real_ques.length; i++) {
        real_ques[i] = ques[randomInc(0, 3)]
    }
    const data = new Registration({
        stage: 0,
        guess_time: 0,
        question: real_ques,
        guessing: ["_"],
        answer: ["_", "_", "_", "_"],
        score: [],
        gameStart: true,
        gameEnd: false
    })
    data.save()
})

router.get('/data', (req, res) => {
    console.log("get data")
    Registration.find().sort({_id:-1}).limit(1)
        .then((Registration) => {
            res.send(Registration)
        })
})

const answer_checker = (ans,stage,question) => {
    console.log(stage)
    if (ans == question[stage])
        return stage;
    return 4;
}

const check_end_game = (stage) => {
    if (stage == 4) {
        return true;
    }
    return false;
}

const randomInc = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1) + low)
}

module.exports = router