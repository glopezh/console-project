const inquirer = require ('inquirer');

inquirer.prompt({
    name: 'color',
    message: 'What is your favorite color?',
    default:'red'
})

//Si queremos que continue con algo

.then(answers =>{
    console.log('Answer:',answers)
})