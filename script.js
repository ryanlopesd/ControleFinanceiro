console.log("Olá, mundo!");

var arrayTabela = [
    { id: 1, descricao: "Conta de Luz", valor: 100.0, tipo: "saida" },
    { id: 2, descricao: "Salário", valor: 2500.0, tipo: "entrada" },
    { id: 3, descricao: "Supermercado", valor: 300.0, tipo: "saida" },
];

function salvarLocalStorage() {
    localStorage.setItem("arrayTabela", JSON.stringify(arrayTabela));
}

function carregarTabela() {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    arrayTabela.forEach(item => {
        const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>R$ ${item.valor.toFixed(2)}</td>
        <td>${item.tipo === "entrada" ? "Entrada" : "Saída"}</td>
        <td style="text-align: center;"><i class="fa-solid fa-trash" onclick="removerItem(${arrayTabela.indexOf(item)})"></i></td>
    `;
    tabela.appendChild(tr);})
};

function adicionarItem() {
    const descricaoInput = document.getElementById("descricao").value.trim();
    const valorInput = document.getElementById("valor").value.trim();
    //const tipoSelect = document.getElementById("tipo").value.trim();
    console.log(descricaoInput, valorInput);
    if (!descricao || !valor) {
        alert("Preencha todos os campos!");
        return;
    }
    const novoId = arrayTabela.length > 0 ? arrayTabela[arrayTabela.length - 1].id + 1 : 1;
    arrayTabela.push({ id: novoId, descricao, valor });

    salvarLocalStorage();
    carregarTabela();

    // limpa os inputs
    document.getElementById("valor").value = "";
    document.getElementById("descricao").value = "";
}