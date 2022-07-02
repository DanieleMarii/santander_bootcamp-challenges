function compara(a, b) {
    const iguais = a === b; 
    const soma = a + b;

    if (!iguais & soma > 10 & soma < 20) {
        return "Os números "+a+" e "+b+ " não são iguais. Sua soma é "+soma+", que é maior que 10 e menor que 20.";
    }
    return "Números iguais";
}

console.log(compara(7, 7))