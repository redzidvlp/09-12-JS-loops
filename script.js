// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:

// 1. Padaugina skaičių iš 2.
function task1() {
    for (let i = 1; i <= 100; i++) {
        let result = i * 2;
        console.log(result)
    }
}

task1()


// 2. Padaugina skaičių iš 5.
function task2() {
    for (let i = 1; i <= 100; i++) {
        let result = i * 5;
        console.log(result)
    }
}

task2()


// 3. Prideda prie skaičiaus 5.
function task3() {
    for (let i = 1; i <= 100; i++) {
        let result = i + 5;
        console.log(result)
    }
}

task3()


// 4. Atima iš skaičiaus 2.
function task4() {
    for (let i = 1; i <= 100; i++) {
        let result = i - 2; 
        console.log(result)
    }
}

task4()


// 5. Pakelia skaičių kvadratu.
function task5() {
    for (let i = 1; i <= 100; i++) {
        let result = Math.pow(i, 2); 
        console.log(result)
    }
}

task5()


// 6. Pakelia skaičių kūbu.
function task6() {
    for (let i = 1; i <= 100; i++) {
        let result = Math.pow(i, 3);
        console.log(result)
    }
}

task6()

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

// Padaugint iš 2

function task7() {
    for (let i = 100; i >= 1; i--) {
        console.log(i * 2)
    }
}

task7()

// Padaugint iš 5

function task8() {
    for (let i = 100; i >= 1; i--) {
        console.log(i * 5)
    }
}
task8()

// Plus 5

function task9() {
    for (let i = 100; i >= 1; i--) {
        let result = (i + 5);
        console.log(result)
    }
}

task9()

// Minus 2

function task10() {
    for (let i = 100; i >= 1; i--) {
        let result = (i - 2);
        console.log(result)
    }
}

task10()

// Pakelti kvadratu

function task11() {
    for (let i = 100; i >= 1; i--) {
        let result = Math.pow(i, 2);
        console.log(result)
    }
}

task11()

// Pakelti kūbu

function task12() {
    for (let i = 100; i >= 1; i--) {
        let result = Math.pow(i, 3);
        console.log(result)
    }
}

task12()