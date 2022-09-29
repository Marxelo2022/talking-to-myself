const { request } = require('express')
const express = require('express')

const app = express()


app.get('/me', (request, response) => {
    response.status(200).json({
        message:{
            name:'Marcelo Martinez',
            edad: 21,
            pais: 'Peru'
        },
        verb: request.method
    })
})

app.post('/metas', (request, response) => {
    response.status(200).json({
        message:{
            hobbies:{
                one:'jugar videojuegos',
                two:'programar',
                three:'hacer ejercicio'
            }
        },
        verb: request.method
    })
})

app.patch('/metas', (request, response)=>{
    response.status(200).json({
        message:{
            one: 'encontrar trabajo',
            two: 'mejorar mi logica cada dia',
            three: 'disfrutar mi trabajo como ninguno'
        },
        verb: request.method
    })
});

app.put('/business', (request, response)=>{
    response.status(200).json({
        message:{
            one: 'Mercado libre',
            two: 'PlayStation',
            three: 'Microsoft'
        },
        verb: request.method
    })
});



app.listen(12800, () => {
    console.log('http://localhost:12800')
})