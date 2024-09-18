let randomNum = +Math.round(Math.random() * 100);

function play() {
    let userNum = +userInput.value;
    
    if (userNum > 100) {
        alert("Число должно быть от 1 до 100.");
        return;
    } else if (userNum < 0) {
        alert("Загаданное число положительное.");
        return;
    }

    let output;
    let tryCount = +tryCounter.value;
    if (tryCount === 0) {
        alert(`Игра окончена. Вы проиграли. Моё число ${randomNum}.`);
        output = "Игра окончена. Обновите страницу и сыграйте ещё раз.";
        commentOutput2.innerHTML = "Подсказка: " + output;
        return;
    }     
    
    commentOutput.innerHTML = +userNum;    
    commentOutput2.innerHTML = "Подсказка: " + output;

   if (userNum === randomNum) {
    alert("Вы победили. Это моё число.");
    output = "Игра окончена. Поздравляю с победой!";
    commentOutput2.innerHTML = "Подсказка: " + output;
    return;
   } else if (userNum > randomNum) {
    output = `Загаданное число меньше Вашего ${userNum}`
   } else if (userNum < randomNum) {
    output = `Загаданное число больше Вашего ${userNum}`;
   }
   
    tryCounter.innerHTML = tryCounter.value - 1;
    commentOutput.innerHTML = +userNum;    
    commentOutput2.innerHTML = "Подсказка: " + output;

}
