//Ask user to enter a number
let num = parseInt(prompt("Enter a Number"));
while(!num)
{
    num = parseInt(prompt("Enter a Valid Number!"));
    }
const targetNum = Math.floor(Math.random() * num) + 1;

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum)
{
    if (guess.toLowerCase() === 'q')
        break;
    if (guess > targetNum)
        guess = prompt("Too high! Enter a new guess");
    else
        guess = prompt("Too low! Enter a new guess");
    attempts++;
}
if (guess.toLowerCase() === 'q') {
    console.log("YOU QUIT!!!")
}
else {
    console.log("YOU GOT IT!!");
    console.log(`IT TOOK YOU ${attempts} GUESSES`);
}