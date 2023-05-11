function randNumGen(num) {
    //Generate a random number
    return Math.floor(Math.random() * num);
}

const collection = {
    sign: ['star', 'moon', 'planet', 'comet'],
    fortune: ['rubbish luck', 'bad luck', 'ok luck', 'good luck', 'excellent luck'],
    advice: ['play a game', 'eat some food', 'trust no one', 'get some rest', 'touch grass']
}

//Array for storing message answers
let message = [];

//Main function for generating message
for (let prop in collection) {
    let optionId = randNumGen(collection[prop].length);

    switch (prop) {
        case 'sign':
            message.push(`Your sign right now is a ${collection[prop][optionId]}`);
            break
        case 'fortune':
            message.push(`You have ${collection[prop][optionId]} right now`);
            break
        case 'advice':
            message.push(`you should ${collection[prop][optionId]}`);
            break
        default:
            message.push('There was an error. Please try again');
    }
}




