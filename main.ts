#! /usr/bin/env node

// importing inquirer

import inquirer from "inquirer";
import chalk from "chalk";

console.log("===================================================================================");
console.log("                           ReckonFx Currency exchange                              ");
console.log("===================================================================================")
let condition = true;
while(condition){
let currency: any ={
    USD:1,
    EUR:0.9,
    GBP:0.8,
    CAD:1.3,
    PKR:280


}

const user_answer = await inquirer.prompt([
    {
        name:"from",
        type:"list",
        message: chalk.green.bold(" Enter the Currency you have"),
        choices:["USD","EUR","GBP","CAD","PKR"]
    },
    {
        name:"to",
        type:"list",
        message:chalk.red.bold(" Enter the Currency you want to convert to"),
        choices:["USD","EUR","GBP","CAD","PKR"]  
    },
    {
    name:"amount",
    type:"number",
    message:" Enter Amount you want to convert"
    }
])
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount/fromAmount;
let convertedAmount=baseAmount * toAmount;
console.log(chalk.red.bold(`\n you gave ${user_answer.amount} ${user_answer.from}`))
console.log(chalk.yellowBright.bold(`\n your converted amount is ${convertedAmount} ${user_answer.to} \n`));

let answer2 = await inquirer.prompt([
    {
        name:"continue",
        type:"confirm",
        message:"do you want to make more transactions"
    }
])
if (answer2.continue === false){
    console.log(chalk.bgBlue.bold( "\n Thankyou for using Reckonfx Currecy Exchange services"));
    break;
}
}
