var doPosortowania = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];


function sortowanieBabelkowe(cosDoPosortowania) {

    var liczbaSortowan = cosDoPosortowania.length;

    var chwilowka = 0 // tymczasowo przechowuje wartość danego indexu 

    while (liczbaSortowan > 1) {
        for (i = 0; i < cosDoPosortowania.length - 1; i++) {
            if (cosDoPosortowania[i] > cosDoPosortowania[i + 1]) {
                /* zamień liczby miejscami */
                chwilowka = cosDoPosortowania[i + 1]
                cosDoPosortowania[i + 1] = cosDoPosortowania[i];
                cosDoPosortowania[i] = chwilowka;
            };

        };
        liczbaSortowan--; //Zmniejsz o 1 ilosć sortowań

    };

    var wynik = cosDoPosortowania
    return wynik;
};

console.log(sortowanieBabelkowe(doPosortowania));
