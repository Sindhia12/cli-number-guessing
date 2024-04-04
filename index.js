import inquirer from "inquirer";
//1) Computer will generate a random number - Done
//2) user input for guessing number - Done
//3) compare user input with computer generated number and show result
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please guess a number:",
    },
]);
console.log(answers);
if (answers.userguessedNumber === randomNumber) {
    console.log("congratulations! you guessed right Number.");
}
else {
    console.log("you guessed wrong Number");
}
