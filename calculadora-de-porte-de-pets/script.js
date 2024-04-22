const form = document.getElementById('form');
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const pesoInput = document.getElementById('peso');
const tipoInput = document.getElementById('tipo');
const listaPetsDiv = document.getElementById('listaPets');

let pets = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = nomeInput.value;
    const idade = parseInt(idadeInput.value);
    const peso = parseFloat(pesoInput.value);
    const tipo = tipoInput.value;

    const porte = calcularPorte(tipo, idade, peso);

    const pet = { nome, idade, peso, tipo, porte };
    pets.push(pet);

    renderizarListaPets();
});

function calcularPorte(tipo, idade, peso) {
    let porteEstimado;

    if (tipo === 'cachorro') {
        const idadeEmSemanas = idade * 52;
        porteEstimado = peso / idadeEmSemanas * 52;
    } else {
        // Para gatos e outros tipos de pets, uma lógica diferente pode ser aplicada
        // Aqui, usamos um valor fixo como exemplo
        porteEstimado = peso / 2;
    }

    if (porteEstimado < 5) {
        return 'Pequeno';
    } else if (porteEstimado < 15) {
        return 'Médio';
    } else {
        return 'Grande';
    }
}

function renderizarListaPets() {
    listaPetsDiv.innerHTML = '';

    pets.forEach(pet => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Nome:</strong> ${pet.nome}</p>
            <p><strong>Tipo:</strong> ${pet.tipo}</p>
            <p><strong>Porte Estimado:</strong> ${pet.porte}</p>
            <hr>
        `;
        listaPetsDiv.appendChild(div);
    });
}
