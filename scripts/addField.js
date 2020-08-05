// Procurar o botão, e quando clicado clona o campo add time
document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
    // Clona o nodo
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    // Limpa os campos input
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach(function(element){
        element.value = "";
    });
    // Adiciona o clone como filho
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
