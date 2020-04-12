const buttonA = document.getElementById('myA')

buttonA.addEventListener('click', function(e) {
    update_data()
    console.log('click')

    fetch('/A', {method: 'POST'})
        .then(function(response) {
            if(response.ok) {
                console.log('ok')
                return
            }
        })
        update_data()

    })

const buttonB = document.getElementById('myB')

buttonB.addEventListener('click', function(e) {
    update_data()
    console.log('click')

    fetch('/B', {method: 'POST'})
        .then(function(response) {
            if(response.ok) {
                console.log('ok')
                return
            }
        })
        update_data()

})

const buttonC = document.getElementById('myC')

buttonC.addEventListener('click', function(e) {
    update_data()

    console.log('click')

    fetch('/C', {method: 'POST'})
        .then(function(response) {
            if(response.ok) {
                console.log('ok')
                return
            }
        })
        update_data()

})

const buttonD = document.getElementById('myD')

buttonD.addEventListener('click', function(e) {
    update_data()

    console.log('click')

    fetch('/D', {method: 'POST'})
        .then(function(response) {
            if(response.ok) {
                console.log('ok')
                return
            }
        })
        update_data()

})

const buttonS = document.getElementById('start')

buttonS.addEventListener('click', function(e) {
    console.log('start')

    fetch('/S', {method: 'POST'})
        .then(function(response) {
            if(response.ok) {
                console.log('ok')
                return
            }
        })
})

const update_data = (document_field) => {
    fetch('/data', {method: 'GET'})
    .then(function(response) {
        if (response.ok) return response.json()
    })
    .then(function(data){
        document.getElementById("answer").innerHTML = data[0].answer
        if (data[0].gameEnd === true) {
            document.getElementById("play_time").innerHTML = data[0].stage + "Guess!"
        }
        document.getElementById("guessing").innerHTML = data[0].stage + "Attempt so far"

    })
}

// update(function() {
//     fetch('/data', {method: 'GET'})
//         .then(function(response) {
//             if (response.ok) return response.json()
//         })
//         .then(function(data){
//             document.getElementById("info").innerHTML = '${data.answer}'
//         }) 
// })



