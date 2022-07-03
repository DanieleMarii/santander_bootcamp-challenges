function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Mariane',
	idade: 20,
};

const pessoa2 = {
	nome: 'Beatriz',
	idade: 20,
};

console.log(calculaIdade.call(pessoa1, 40));
console.log(calculaIdade.apply(pessoa2, [24]));