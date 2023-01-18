import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from 'chalk-animation';

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbow = chalkAnimation.rainbow('NUMBER GUESSING GAME');
    await sleep();
    // rainbow.stop();
}
await welcome()

const num = Math.ceil(Math.random() * 4)
const game = await inquirer.prompt([{
    name: "random",
    type: "number",
    message: "Select A number between 1 to 10"
}])
if (game.random == num) {
    console.log(chalk.blueBright("you guess the right number"))
} else {
    console.log(chalk.red("opss!!! you guess wrong number"))
}
