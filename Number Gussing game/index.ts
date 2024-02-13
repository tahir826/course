import inquirer from "inquirer";
import chalk from "chalk"
let continounTransaction = true;
async function playGame() {
    console.log(chalk.red.bgWhite.bold("*************************************"))
    console.log(chalk.red.bgWhite.bold("******      ***************     *****"))
    console.log(chalk.red.bgWhite.bold('Welcome to the Number Guessing Game!'));
    console.log(chalk.red.bgWhite.bold("******      ***************     *****"))
    console.log(chalk.red.bgWhite.bold("*************************************"))
    console.log(chalk.red.bgWhite.bold('You have 3 rounds to guess a number between 1 and 10.'));
    const generateRandomNumber = (): number => {
        return Math.floor(Math.random() * 10) + 1;
    };
    while (continounTransaction) {
        let randomNumber = generateRandomNumber();
        let rounds = 3;
        let round = 1;
        let Status = true

        while (round <= rounds) {
            const userInput = await inquirer.prompt({
                type: 'input',
                name: 'guess',
                message: `Round ${round}: Guess the number (between 1 and 10):`
            },);

            const userGuess = parseFloat(userInput.guess);
            if (userGuess === randomNumber) {
                console.log(chalk.red.bgWhite.bold('Congratulations! You guessed the correct number!'));
                let continuePlaying = await inquirer.prompt([{
                    type: 'confirm',
                    name: 'continue',
                    message: "Do you want to continue playing?"
                }]);
                if (!continuePlaying.continue) {
                    continounTransaction = false
                    round = 5
                    Status = false
                }
                else {
                    Status = true
                    round = 1
                }
            } else {
                console.log(chalk.red.bgWhite.bold(`Incorrect guess Try again`));
                round++;
            }
        }
        if (Status) {
            console.log("*****************************************************************")
            console.log("******      *******        *********          ********     ******")
            console.log(chalk.red.bgWhite.bold(`Game over! You couldn't guess the number in ${rounds} rounds.`));
            console.log(chalk.red.bgWhite.bold("The Number is ", randomNumber))
            console.log("******      *******        *********          ********     ******")
            console.log("*****************************************************************")
        }
        if (Status) {
            let continuePlaying = await inquirer.prompt([{
                type: 'confirm',
                name: 'continue',
                message: "Do you want to continue playing?"
            }]);
            if (!continuePlaying.continue) {
                continounTransaction = false
            }
            else {
                continounTransaction = true
            }
        }
    }
}

playGame();