import inquirer, { Answers, QuestionCollection } from "inquirer";
import chalk from "chalk"
let nums: QuestionCollection = [{
    name: 'num1',
    type: 'number',
    message:chalk.red.bold.italic('enter your first number'),
},
{
    name: 'num2',
    type: 'number',
    message: chalk.blue.bold.italic('enter your second number')
},
{
    name: 'operators',
    type: 'list',
    message: 'select operator',
    choices: ['+', '*', '/', '-']
}
]
let operation: Promise<Answers> = inquirer.prompt(nums)
operation.then((operation: Answers) => {
    switch (operation.operators) {
        case "*":
            console.log(chalk.green.bold.italic.bgCyan(`${operation.num1}*${operation.num2} = ${operation.num1 * operation.num2}`))
            break;
        case "+":
            console.log(chalk.yellow.bold.italic.bgBlue(`${operation.num1}+${operation.num2} = ${operation.num1 + operation.num2}`))
            break;
        case "-":
            console.log(chalk.white.bold.italic.bgGreen(`${operation.num1}-${operation.num2} = ${operation.num1 - operation.num2}`))
            break;
        case "/":
            console.log(chalk.cyan.bold.italic.bgWhite(`${operation.num1}/${operation.num2} = ${operation.num1 / operation.num2}`))
            break;
        default:
            break;
    }
})
