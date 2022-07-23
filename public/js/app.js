// console.log('Client side javascript file is loaded!')

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) =>{
        console.log(data);
    })
})

// fetch('http://localhost:3000/weather?address=bhubaneswar').then((response) => {
//     response.json().then((data) =>{
//         if (data.error){
//             console.log(data.error);
//         }
//         else{
//             console.log(data.forecast);
//             console.log(data.location);
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = "Hello Weather"

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    if (!location){
        return console.log('You need to provide a location');
    }
    fetch('/weather?address='+ location ).then((response) => {
    response.json().then((data) =>{
        if (data.error){
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
    
})