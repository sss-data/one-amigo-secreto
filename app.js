// lista de amigos
let listaAmigos = []

//função para adicionar nomes
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (validaNome(nome)){ // função de validação
        listaAmigos.push(nome.trim());
    } else {
        alert('Por favor, insira um nome.')
    }
    amigosNaTela();
    limparNome();
    console.log(listaAmigos);
}

// função sortear amigo
function sortearAmigo() {
    let listaNaTela = document.getElementById('listaAmigos');
    console.log(listaNaTela);
    console.log(listaAmigos.length);
    console.log(listaNaTela.children.length);
    if (listaAmigos.length < 1 && listaNaTela.children.length === 0) {
        alert('Informe amigos para o sorteio.');
        return;
    }

    if (listaAmigos.length < 1) {
        alert('Todos os amigos já foram sorteados.');
        document.getElementById('resultado').innerHTML = '';    
        return;
    }

    let indice = gerarNumeroAleatorio(); // guarda índice em uma variável
    let amigoSorteado = listaAmigos[indice]; //sorteia pelo índice
    listaAmigos.splice(indice,1); // retira da lista

    console.log(amigoSorteado);
    console.log(listaAmigos);

    return sorteadoNaTela(amigoSorteado);
}

// gerar número aleatório
function gerarNumeroAleatorio() {
    let indiceLista = Math.floor(Math.random() * listaAmigos.length); // [0, 1, 2 ...]
    return indiceLista;
}

// função para limpar campo de nomes
function limparNome() {
    nome = document.querySelector('input');
    nome.value = '';
}

// validar nome
function validaNome(nome) {
    // verifica se é string
    if (typeof nome !== "string") {
        return false;
    }

    // remove espaços
    const nomeLimpo = nome.trim();

    // verifica se está vazio
    if (!nomeLimpo || nomeLimpo.length < 2) {
        return false;
    }

    // verifica tipo de entrada
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    return regex.test(nomeLimpo);
}

// nome na tela percorrendo a lista a cada adição de nome
function amigosNaTela() {
    // captura o ul e limpa
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    // itera com Each()
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li'); // cria <li></li>
        li.textContent = amigo; //pega o texto de cada parâmetro amigo
        listaHTML.appendChild(li); // adiciona a <li> na <ul>
    })
}

function sorteadoNaTela(sorteado) {
    const sorteadoHTML = document.getElementById('resultado');
    sorteadoHTML.innerHTML = sorteado;
    return sorteado;
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    console.log('O jogo foi reiniciado e todas as variáveis foram limpas!');
}