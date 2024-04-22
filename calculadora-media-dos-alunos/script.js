const form = document.getElementById('form');
const nomeInput = document.getElementById('nome');
const nota1Input = document.getElementById('nota1');
const nota2Input = document.getElementById('nota2');
const maiorMediaSpan = document.getElementById('maiorMedia');
const mediaTurmaSpan = document.getElementById('mediaTurma');
const listaAlunos = document.getElementById('listaAlunos');

let alunos = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = nomeInput.value;
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);
    const media = (nota1 + nota2) / 2;

    const aluno = { nome, nota1, nota2, media };
    alunos.push(aluno);

    renderizarAlunos();
});

function renderizarAlunos() {
    listaAlunos.innerHTML = '';
    let maiorMedia = 0;
    let somaMedias = 0;

    alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = `${aluno.nome} - Média: ${aluno.media.toFixed(2)}`;
        listaAlunos.appendChild(li);

        if (aluno.media > maiorMedia) {
            maiorMedia = aluno.media;
        }

        somaMedias += aluno.media;
    });

    const mediaTurma = somaMedias / alunos.length;
    maiorMediaSpan.textContent = maiorMedia.toFixed(2);
    mediaTurmaSpan.textContent = mediaTurma.toFixed(2);
}
