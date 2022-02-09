const eratostenesSieve = () => {
    const button = document.querySelector(".eratostenes-button");
    const input = document.querySelector(".eratostenes-input");
    const div = document.querySelector(".eratostenes-div");
    
    button.addEventListener("click", () => {
        if (document.querySelector(".eratostenes-code-div") !== null) {
            const divToDelete = document.querySelector(".eratostenes-code-div");
            divToDelete.remove();
        }

        if (input.value === "") number = 0;
        else number = parseInt(input.value);
    
        if (number <= 1) alert("Podaj dodatnią liczbę naturalną większą od 1");
        else if (number>100000) alert("Za duża liczba");
        else {
            const timeStart = new Date().getTime();
    
            let primeArray = [];
    
            for (let i = 0; i <= number; i++) primeArray.push(true);
    
            for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
                if (primeArray[i]) {
                    for (let j = i * 2; j <= number; j += i) {
                        primeArray[j] = false;
                    }
                }
            }
    
            const newDiv = document.createElement("div");
            newDiv.classList.add("eratostenes-code-div", "section__text--code");
    
            newDiv.textContent = `Wszystkie liczby pierwsze mniejsze lub równe ${number} to: `;
    
            let howManyPrimes = 0;
    
            for (let i = 2; i < primeArray.length; i++) {
                if (primeArray[i]) howManyPrimes++;
            }
    
            let loopCounter = 0;
    
            for (let i = 2; i < primeArray.length; i++) {
                if (primeArray[i]) {
                    loopCounter++;
                    if (loopCounter !== howManyPrimes) newDiv.textContent += `${i}, `;
                    else newDiv.textContent += `${i}.`;
                }
    
            }
    
            const timeEnd = new Date().getTime();
    
            newDiv.innerHTML += `<br>Znaleziono ${howManyPrimes} liczb pierwszych w tym zakresie.<br>Czas wykonania algorytmu: ${timeEnd-timeStart}ms.`
    
            div.appendChild(newDiv);
        }
    })
}

eratostenesSieve();