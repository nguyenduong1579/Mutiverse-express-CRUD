const { request } = require('express');
const express = require('express');
const port = 1123;
const myOne = express();
myOne.use(express.static('public'));


myOne.get('/', (request, respond) => {
    respond.send('Welcome to my webpage')
});

// myOne.get('/whatYouNeed/:id', (request, respond) => {
//     respond.send(
//         `Really! you need this one?  ${request.params.id}`
//     );
// })

myOne.get('/whatYouNeed/:id', (request, respond) =>
{
    obj = null;
    if (request.params.id === 'you'){
        obj = {
            id: request.params.id,
            answer: 'I am not available'
        }
    }
    else {
        if (request.params.id === 'food'){
            obj = {
                id: request.params.id,
                answer: 'what food do you want?'
            }
        }
        else{
            if (request.params.id === 'drink'){
                obj = {
                    id: request.params.id,
                    answer: 'what drink do you want?'
                }
            }
            else{
                if (request.params.id === 'taxi'){
                    obj = {
                        id: request.params.id,
                        answer: 'what type of tax do you want?'
                    }
                }
                else{
                obj = 'you may ask another question'
                }
            }
        }
    }
    respond.send(obj);
});

myOne.listen(port, () => {
    console.log(`Follow my lead: ${port}`);
  });