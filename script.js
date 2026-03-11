var arrayTabela = [];

function salvarLocalStorage() {
    localStorage.setItem("arrayTabela", JSON.stringify(arrayTabela));
}

function carregarTabela() {
    arrayTabela = JSON.parse(localStorage.getItem("arrayTabela"));
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    arrayTabela.forEach(item => {
        const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>R$ ${item.valor}</td>
        <td>${item.tipo}</td>
        <td style="text-align: center;"><i class="fa-solid fa-trash" onclick="removerItem(${arrayTabela.indexOf(item)})"></i></td>
    `;
    tabela.appendChild(tr);})
};

function adicionarItem() {
    const descricaoInput = document.getElementById("descricao").value.trim();
    const valorInput = parseFloat(document.getElementById("valor").value.trim());
    const tipoRadio = document.querySelector('input[name="tipo"]:checked');
    let tipoInput;
    
    if(tipoRadio) {
        tipoInput = tipoRadio.value;
    }

    if (!descricaoInput || !valorInput || !tipoRadio) {
        alert("Preencha todos os campos!");
        return;
    }
    const novoId = arrayTabela.length > 0 ? arrayTabela[arrayTabela.length - 1].id + 1 : 1;
    arrayTabela.push({ id: novoId, descricao: descricaoInput, valor: valorInput, tipo: tipoInput });

    salvarLocalStorage();
    carregarTabela();

    // limpa os inputs
    document.getElementById("valor").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("entrada").checked = false;
    document.getElementById("saida").checked = false;
}