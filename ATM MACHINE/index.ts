import inquirer, { Answers } from "inquirer";
import chalk from "chalk";
async function ATM() {
    console.log(chalk.red.bgWhite.bold.italic("**************************"))
    console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
    console.log(chalk.red.bgWhite.bold.italic("***Welcome to Bank ATM!***"));
    console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
    console.log(chalk.red.bgWhite.bold.italic("**************************"))
    let continounTransaction = 6;
    let index = 5;
    while (continounTransaction > 0) {
        const logininfo = {
            username: "tahir826",
            password: 12345,
            Name: 'Muhammad Tahir Hassan',
        }
        let username = await inquirer.prompt([{
            type: "string",
            name: "username",
            message: chalk.red.bgWhite.bold.italic("Enter Username")
        }])
        let password = await inquirer.prompt([{
            type: "number",
            name: "password",
            message: chalk.red.bgWhite.bold.italic("Enter Password")
        }])
        if (username.username == logininfo.username && password.password == logininfo.password) {
            console.log(chalk.red.bgWhite.underline.italic.bold("Congratulations You Have Logged In"))
            console.log(chalk.red.bgWhite.underline.italic.bold(`Welcome ${logininfo.Name} To Bank ATM`))
            let login = true;
            while (login) {
                let account = {
                    balance: 100000,
                }
                let ques = await inquirer.prompt([{
                    type: "list",
                    name: "ques",
                    message: chalk.red.bgWhite.bold.italic("What you want to do"),
                    choices: [
                        "Deposit",
                        "Withdraw",
                        "Check Balance",
                        "Exit"
                    ]
                }])
                if (ques.ques == "Deposit") {
                    let amount = await inquirer.prompt([{
                        type: "number",
                        name: "amount",
                        message: "Enter Amount"
                    }])
                    account.balance = account.balance + amount.amount;
                    console.log(chalk.red.bgWhite.italic.bold.underline(`${amount.amount} Has Been Deposit To Your Account`))
                    console.log(chalk.red.bgWhite.bold.italic.underline(`Your Current Ballance is ${account.balance}`));
                    let confirmTransaction = await inquirer.prompt([{
                        name: 'confirm',
                        type: 'confirm',
                        message: 'Do You Want To Perform Another Transaction'
                    }])
                    if (!confirmTransaction.confirm) {
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("***Thanks for using ATM***"));
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        login = false
                        continounTransaction = 0
                    }
                } else if (ques.ques == "Withdraw") {
                    let amount = await inquirer.prompt([{
                        type: "number",
                        name: "amount",
                        message: "Enter Amount"
                    }])
                    account.balance = account.balance - amount.amount;
                    console.log(chalk.red.bgWhite.italic.bold.underline(`${amount.amount} Has Been Withdraw From Your Account`))
                    console.log(chalk.red.bgWhite.bold.italic.underline(`Your Current Ballance is ${account.balance}`))
                    let confirmTransaction = await inquirer.prompt([{
                        name: 'confirm',
                        type: 'confirm',
                        message: 'Do You Want To Perform Another Transaction'
                    }])
                    if (!confirmTransaction.confirm) {
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("***Thanks for using ATM***"));
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        login = false
                        continounTransaction = 0
                    }
                }
                else if (ques.ques == "Check Balance") {
                    console.log(chalk.red.bgWhite.bold.italic.underline(`Your Current Balance is ${account.balance}`))
                    let confirmTransaction = await inquirer.prompt([{
                        name: 'confirm',
                        type: 'confirm',
                        message: 'Do You Want To Perform Another Transaction'
                    }])
                    if (!confirmTransaction.confirm) {
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("***Thanks for using ATM***"));
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        login = false;
                        continounTransaction = 0;
                    }
                }
                else if (ques.ques == "Exit") {
                    continounTransaction = 0;
                    login = false;
                    console.log(chalk.red.bgWhite.bold.italic("**************************"))
                    console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                    console.log(chalk.red.bgWhite.bold.italic("***Thanks for using ATM***"));
                    console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                    console.log(chalk.red.bgWhite.bold.italic("**************************"))
                }
                else {
                    let confirmTransaction = await inquirer.prompt([{
                        name: 'confirm',
                        type: 'confirm',
                        message: 'Do You Want To Perform Another Transaction'
                    }])
                    if (!confirmTransaction.confirm) {
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("***Thanks for using ATM***"));
                        console.log(chalk.red.bgWhite.bold.italic("******     *****     *****"))
                        console.log(chalk.red.bgWhite.bold.italic("**************************"))
                        login = false;
                        continounTransaction = 0;
                    }
                }
            }
        }
        else {
            console.log(chalk.red.bgWhite.bold.italic.underline("Invalid Username or Pin"));
            console.log(chalk.red.bgWhite.bold.italic.underline("Please Try Again"));
            continounTransaction--;
            console.log(chalk.red.bgWhite.bold.italic.underline(`${index} attempts left`))
            index--;
        }
    }
}
ATM()