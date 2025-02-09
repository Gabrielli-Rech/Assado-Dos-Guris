const carnes = [
    { nome: "Picanha", preco: "79,90", imagem: "../IMG/Picanha.jpg" },
    { nome: "Costela Bovina", preco: "89,90", imagem: "../IMG/Costela-Bovina.jpg" },
    { nome: "Maminha", preco: "69,90", imagem: "../IMG/Maminha.jpg" },
    { nome: "Fraldinha", preco: "79,90", imagem: "../IMG/Fraldinha.jpg" },
    { nome: "Contra-filé", preco: "85,90", imagem: "../IMG/Contra-File.jpg" },
    { nome: "Cupim", preco: "89,90", imagem: "../IMG/Cupim.jpg" },
    { nome: "Coração de frango", preco: "39,90", imagem: "../IMG/Coracao.jpg" },
    { nome: "Frango", preco: "59,90", imagem: "../IMG/Frango.jpg" },
    { nome: "Linguiça artesanal", preco: "49,90", imagem: "../IMG/linguica.jpg" }
];

const acompanhamentos = [
    { nome: "Farofa temperada", preco: "14,90", imagem: "../IMG/farofa.jpg" },
    { nome: "Vinagrete", preco: "12,90", imagem: "../IMG/vinagrete.jpg" },
    { nome: "Pão de alho", preco: "15,90", imagem: "../IMG/pao-de-alho.jpg" },
    { nome: "Salada de maionese", preco: "22,90", imagem: "../IMG/salada-de-maionese.jpg" },
    { nome: "Queijo coalho na brasa", preco: "19,90", imagem: "../IMG/queijo-coalho.jpg" },
];

const bebidas = [
    { nome: "Cerveja artesanal", preco: "12,90", imagem: "../IMG/cerveja.jpg" },
    { nome: "Refrigerante", preco: "7,90", imagem: "../IMG/refri.jpg" },
    { nome: "Água com gás e sem gás", preco: "5,90", imagem: "../IMG/agua.jpg" },
    { nome: "Sucos naturais", preco: "8,90", imagem: "../IMG/sucos.jpg" },
    { nome: "Drinks", preco: "15,90", imagem: "../IMG/drinks.jpg" },
    { nome: "Chopp", preco: "10,90", imagem: "../IMG/chopp.jpg" }
];


// Função para adicionar item ao carrinho
function adicionarAoCarrinho(item) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${item.nome} foi adicionado ao carrinho!`);
}

    // Função para adicionar item ao carrinho
    function adicionarAoCarrinho(item) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const itemExistente = carrinho.find(i => i.nome === item.nome);

        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({ ...item, quantidade: 1 });
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // Função para remover item do carrinho
    function removerDoCarrinho(itemNome) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho = carrinho.filter(item => item.nome !== itemNome);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // Exibir os itens do cardápio
    function exibirItens(nome, items, containerId) {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'text-center');

            itemElement.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}" class="w-full h-32 object-cover rounded mb-4">
                <h3 class="text-xl font-bold">${item.nome}</h3>
                <p class="text-lg font-semibold">R$ ${item.preco.toFixed(2)}</p>
                <button class="mt-2 bg-red-500 text-white px-4 py-2 rounded" onclick="adicionarAoCarrinho(${JSON.stringify(item)})">Adicionar ao Carrinho</button>
            `;
            container.appendChild(itemElement);
        });
    }


// Gerar cards de carnes
function gerarCards(tipo, itens, containerId) {
    const container = document.getElementById(containerId);
    itens.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md", "text-center");
        
        div.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="w-full h-48 object-cover rounded mb-4">
            <h3 class="text-xl font-bold">${item.nome}</h3>
            <p class="text-lg font-semibold">R$ ${item.preco}</p>
            <button onclick="adicionarAoCarrinho(${JSON.stringify(item)})" class="mt-2 bg-red-500 text-white px-4 py-2 rounded">Adicionar ao Carrinho</button>
        `;
        
        container.appendChild(div);
    });
}

// Carregar os cards
gerarCards("Assado", carnes, "assados");
gerarCards("Acompanhamento", acompanhamentos, "acompanhamentos");
gerarCards("Bebida", bebidas, "bebidas");

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();
    
    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }
    
    alert("Cadastro realizado com sucesso!");
    document.getElementById("cadastroForm").reset();
});
