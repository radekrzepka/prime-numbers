const lucasTest = () => {
    const button = document.querySelector(".lucas-test-button");
    const input = document.querySelector(".lucas-test-input");
    const div = document.querySelector(".lucas-test-div");

    button.addEventListener("click", () => {
        if(input.value === "") nMersenneNumber = 0;
        else nMersenneNumber = BigInt(parseInt(input.value));

        if (document.querySelector(".lucas-test-code-div") !== null) {
            const divToDelete = document.querySelector(".lucas-test-code-div");
            divToDelete.remove();
        }

        if (nMersenneNumber <= 0) alert("Podaj dodatnią liczbę naturalną większą od 0");
        else if (nMersenneNumber >= 10000) alert("Za duża liczba");
        else {
            const number = BigInt((2n ** nMersenneNumber) - 1n);
            let s = BigInt(4);
            const timeStart = new Date().getTime();

            const newDiv = document.createElement("div");
            newDiv.classList.add("lucas-test-code-div", "section__text--code");

            if (nMersenneNumber < 70) list = document.createElement("ul");

            if (nMersenneNumber == 2) s = 0;
            else {
                for (let i = 0n; i < nMersenneNumber - 2n; i++) {
                    if (nMersenneNumber < 70) {
                        const listElement = document.createElement("li");
                        listElement.textContent = (`s <- (${s} * ${s} - 2) % ${number} = ${((s * s) - 2n) % number}`);
                        list.appendChild(listElement);
                    }
                    s = ((s * s) - BigInt(2)) % number;
                }
            }
            if (nMersenneNumber < 70) newDiv.appendChild(list);

            const timeEnd = new Date().getTime();

            newDiv.innerHTML += `Liczba 2<sup>${nMersenneNumber}</sup> - 1 = ${number} ${s == 0? " <strong>jest pierwsza</strong>": " <strong>jest złożona</strong>"}. <br>`;
            newDiv.innerHTML += `Czas wykonania algorytmu: ${timeEnd-timeStart} ms.`;

            div.appendChild(newDiv);
        }
    })
}

lucasTest();