const mersennePrimes = () => {
    const button = document.querySelector(".mersenne-primes-button");
    const input = document.querySelector(".mersenne-primes-input");
    const div = document.querySelector(".mersenne-primes-div");

    button.addEventListener("click", () => {
        if (document.querySelector(".section__text--mersenne-table") !== null) {
            const tabToDelete = document.querySelector(".section__text--mersenne-table");
            tabToDelete.remove();
        }
        if (document.querySelector(".mersenne-paragraph-info") !== null) {
            const paragraphToDelete = document.querySelector(".mersenne-paragraph-info");
            paragraphToDelete.remove();
        }

        if (input.value === "") number = 0;
        else number = parseInt(input.value);

        const powersArray = [2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281, 3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701, 23209, 44497, 86243, 110503, 132409, 216091, 765839, 859433, 1257787, 1398269, 2976221, 3021377, 6972593, 13466917, 20996011, 24036583, 25964951, 30402457, 32582657, 37156667, 42643801, 43112609, 57885161, 74207281, 77232917, 82589933];

        const numberOfDigits = [1, 1, 2, 3, 4, 6, 6, 10, 19, 27, 33, 39, 157, 183, 386, 664, 687, 969, 1281, 1332, 2917, 2993, 3376, 6002, 6533, 6987, 13395, 25962, 33265, 39751, 65050, 227832, 258716, 378632, 420921, 895932, 909526, 2098960, 4053946, 6320430, 7235733, 7816230, 9152052, 9808358, 11185272, 12837064, 12978189, 17425170, 22338618, 23249425, 24862048];

        const dateOfFind = ["", "", "", "", 1456, 1588, 1588, 1772, 1883, 1911, 1914, "10 czerwca 1876", "30 stycznia 1952", "30 stycznia 1952", "25 czerwca 1952", "7 października 1952", "9 października 1952", "	8 września 1957", "3 listopada 1961", "3 listopada 1961", "11 maja 1963", "16 maja 1963", "2 czerwca 1963", "4 marca 1971", "30 października 1978", "9 lutego 1979", "8 kwietnia 1979", "25 września 1982", "28 stycznia 1988", "19 września 1983", "6 września 1985", "19 lutego 1992", "10 stycznia 1994", "3 września 1996", "13 listopada 1996", "24 sierpnia 1997", "27 stycznia 1998", "1 czerwca 1999", "14 listopada 2001", "17 listopada 2003", "15 maja 2004", "18 lutego 2005", "15 grudnia 2005", "4 września 2006", "6 września 2008", "4 czerwca 2009", "23 sierpnia 2008", "25 stycznia 2013", "7 stycznia 2016", "26 grudnia 2017", "7 grudnia 2018"];

        const discoverers = ["", "", "", "", "nieznany", "Pietro Cataldi", "Pietro Cataldi", "Leonhard Euler", "Iwan Perwuszin", "Ralph Ernest Powers", "Ralph Ernest Powers", "Édouard Lucas", "Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Hans Riesel", "Alexander Hurwitz", "Alexander Hurwitz", "Donald Bruce Gillies", "Donald Bruce Gillies", "Donald Bruce Gillies", "Bryant Tuckerman", "Landon Curt Noll i Laura Nickel", "Landon Curt Noll", "Harry Lewis Nelson i David Slowinski", "David Slowinski", "Walt Colquitt i Luke Welsh", "David Slowinski", "David Slowinski", "David Slowinski i Paul Gage", "David Slowinski i Paul Gage", "David Slowinski i Paul Gage", "GIMPS / Joel Armengaud", "GIMPS / Gordon Spence", "GIMPS / Roland Clarkson", "GIMPS / Nayan Hajratwala", "GIMPS / Michael Cameron", "GIMPS / Michael Shafer", "GIMPS / Josh Findley", "GIMPS / Martin Nowak", "GIMPS / Curtis Cooper i Steven Boone", "GIMPS / Curtis Cooper i Steven Boone", "GIMPS / Hans-Michael Elvenich", "GIMPS / Odd Magnar Strindmo", "GIMPS / Edson Smith", "GIMPS / Curtis Cooper", "GIMPS / Curtis Cooper", "GIMPS / Jonathan Pace", "GIMPS / Patrick Laroche"];

        if (number <= 0 || number === NaN) alert("Podaj dodatnią liczbę naturalną większą od 0");
        else if (number > 51) alert("Ludzkość nie zna aż tylu liczb pierwszych Mersenne'a 😃");
        else {
            const table = document.createElement("table");
            table.classList.add("section__text--mersenne-table");
            const tableHeader = "<tr><th>Lp.</th><th>n</th><th>M<sub>n</sub></th><th>Ilość cyfr w M<sub>n</sub></th><th class='table--delete-mobile'>Data odkrycia</th><th class='table--delete-mobile'>Odkrywca</th><th class='table--delete-mobile'>Liczba doskonała</th></tr>";
            table.innerHTML = tableHeader;

            for (let i = 0; i < number; i++) {
                const newRow = table.insertRow();
                const tableContent = `<td>${i+1}</td>
                                      <td>${powersArray[i]}</td>
                                      <td>2<sup>${powersArray[i]}</sup>-1</td>
                                      <td>${numberOfDigits[i]}</td>
                                      <td class='table--delete-mobile'>${dateOfFind[i]}</td>
                                      <td class='table--delete-mobile'>${discoverers[i]}</td>
                                      <td class='table--delete-mobile'>2<sup>${powersArray[i]-1}</sup> * (2<sup>${powersArray[i]}</sup> - 1)`;
                newRow.innerHTML += tableContent;
            }
            div.appendChild(table);

            if (number > 47 && number < 52) {
                const pInfo = document.createElement("p");
                pInfo.classList.add("section__text--paragraph", "mersenne-paragraph-info");
                pInfo.innerHTML = "Numberacja od 48 do 51 jest tymczasowa, ponieważ nie wiadomo czy między liczbami M<sub>43112609</sub> i M <sub>M82589933</sub> nie ma jeszcze nieodkrytych liczb pierwszych Mersenne'a.";
                div.appendChild(pInfo);
            }
        }
    })
}

mersennePrimes();