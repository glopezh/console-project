const inquirer = require ('inquirer');

inquirer.prompt({

    type:'checkbox',
    name: 'colors',
    message: 'which are your favorite color?',
    choices: ['red','blue','green']
})

//Si queremos que continue con algo

.then(answers =>{
    console.log('Answer:',answers)
})