const alunos = [
    {
        nome: 'Mari',
        nota: 10
    },

    {
        nome: 'Beatriz',
        nota: 10
    },
    {
        nome: 'João',
        nota: 4
    },
    {
        nome: 'Lucas',
        nota: 5
    },
]

function alunosAprovados(alunos, media) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++){
        let { nota, nome } = alunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));