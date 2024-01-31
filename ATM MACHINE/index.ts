import inquirer, { Answers } from "inquirer";
import chalk from "chalk";
async function ATM() {
    console.log(chalk.red.bgWhite.bold.italic("welcome to Bank ATM"));
    let continounTransaction = 6;
    let index = 5;
    let yOrn = true;
    while (continounTransaction > 0) {
        const logininfo = {
            username: "tahir826",
            password: 12345
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
        if (username.username == logininfo.username && logininfo.password == logininfo.password) {
            console.log(chalk.red.bgWhite.underline.italic.bold("Congratulations"))
            console.log(chalk.red.bgWhite.underline.italic.bold("You Are Successfully Logged In"))
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
                        console.log("Thanks For using Our Atm")
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
                        console.log("Thanks For using Our Atm");
                        login = false
                        continounTransaction = 0
                    }
                }
                else if (ques.ques=="Check Balance"){
                    console.log(chalk.red.bgWhite.bold.italic.underline(`Your Current Balance is ${account.balance}`))
                    let confirmTransaction = await inquirer.prompt([{
                        name: 'confirm',
                        type: 'confirm',
                        message: 'Do You Want To Perform Another Transaction'
                    }])
                    if (!confirmTransaction.confirm) {
                        console.log("Thanks For using Our Atm")
                        login = false;
                        continounTransaction = 0;
                    }
                }
                 else if (ques.ques == "Exit") {
                    continounTransaction = 0;
                    login = false;
                    console.log(chalk.red.bgWhite.italic.underline("Thanks For using Our Atm"));
                }
                else {
                    let confirmTransaction = await inquirer.prompt([{
                        name: 'confirm',
                        type: 'confirm',
                        message: 'Do You Want To Perform Another Transaction'
                    }])
                    if (!confirmTransaction.confirm) {
                        console.log(chalk.red.bgWhite.italic.underline("Thanks For using Our Atm"));
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