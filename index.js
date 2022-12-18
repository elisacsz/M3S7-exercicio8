let birthYear = 1995;
let currentYear = 2022;

function solucaoWhile(birthYear, currentYear) {
    console.log("Solução while");
    while (birthYear <= currentYear) {        
        console.log(birthYear);
        birthYear++;
    }
}

solucaoWhile(birthYear, currentYear);

function solucaoDoWhile(birthYear, currentYear) {
    console.log("Solução do while");
    do {        
        console.log(birthYear);
        birthYear++;
    } while (birthYear <= currentYear)
}

solucaoDoWhile(birthYear,currentYear);