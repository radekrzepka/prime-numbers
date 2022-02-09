const primeTest = () => {
    const button = document.querySelector(".prime-test-button");
    const input = document.querySelector(".prime-test-input");
    const div = document.querySelector(".prime-test-div");

    button.addEventListener("click", () => {

        if (document.querySelector(".prime-test-code-div") !== null) {
            const divToDelete = document.querySelector(".prime-test-code-div");
            divToDelete.remove();
        }

        const number = parseInt(input.value);

        if (number < 0) alert("Podaj dodatnią liczbę naturalną większą od 1");
        else if (number == 0 || number == 1) alert(`Liczba ${number} nie jest ani pierwsza ani złożona.`);
        else if (number > 1000000000000000) alert(`Za duża liczba`);

        else {
            const showAlgorithm = number => {
                const newDiv = document.createElement("div");
                newDiv.classList.add("prime-test-code-div", "section__text--code");

                if (number == 2 || number == 3) {
                    const paragraph = document.createElement("p");
                    paragraph.textContent = `${number} jest liczbą pierwszą`;
                    newDiv.appendChild(paragraph);
                } else {
                    const timeStart = new Date().getTime();

                    if (number < 1000000) {
                        const list = document.createElement("ul");

                        for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
                            const listElement = document.createElement("li");
                            listElement.textContent = `Resztą z dzielenia ${number} przez ${i} jest ${number % i}`
                            list.appendChild(listElement);
                        }
                        newDiv.appendChild(list);
                    }


                    const checkIfNumberPrime = number => {
                        for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
                            if (number % i == 0) return false;
                        }
                        return true;
                    }

                    const timeEnd = new Date().getTime();

                    const paragraph = document.createElement("p");
                    paragraph.innerHTML = `Liczba ${number} jest ${checkIfNumberPrime(number)? 'pierwsza' : 'złożona'}. <br> Czas wykonania algorytmu: ${timeEnd - timeStart} ms.`;

                    newDiv.appendChild(paragraph);

                }
                div.appendChild(newDiv);
            }

            showAlgorithm(number);
        }
    })
}

primeTest();