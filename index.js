const inquirer = require ('inquirer');

inquirer.prompt({

    type:'password',
    name: 'colors',
    message: 'Password:',
    mask:"?"
})

//Si queremos que continue con algo

.then(answers =>{
    console.log('Answer:',answers)
})