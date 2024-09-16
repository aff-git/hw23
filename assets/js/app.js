let randomNum = +Math.round(Math.random() * 100);

function play() {
    let userNum = +userInput.value;
    let output;

    // let tryCount = +tryCounter.value;
    tryCounter.innerHTML = tryCounter.value - 1;
    if (tryCounter.value == 0) {
        alert(`Игра окончена. Моё число ${randomNum}.`);
    }
    
   if (userNum == randomNum) {
    alert("Вы победили. Это моё число.");
    output = `Игра окончена. Поздравляю с победой!`
   } else if (userNum > randomNum) {
    output = `Загаданное число меньше Вашего ${userNum}`
   } else if (userNum < randomNum) {
    output = `Загаданное число больше Вашего ${userNum}`;
   }


   
    commentOutput.innerHTML = +userNum;    
    // comment = output число ${userNum} больше/меньше моего числа.`;
    commentOutput2.innerHTML = "Подсказка: " + output;

}

// console.log(userNum);
// console.log(randomNum);
