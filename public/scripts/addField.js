// Procurar o botão, e quando clicado clona o campo add time
document.querySelector("#add-time").addEventListener('click', cloneField);

function checkField() {
    const newFieldContainer = document.querySelector(".schedule-item");
    const select = newFieldContainer.querySelectorAll('select');
    const fields = newFieldContainer.querySelectorAll('input');
    let voidElements = true
    if(select[0].value == ""){
        voidElements = false
    }
    for(i=0; i<2; i++){
        if(fields[i].value == ""){
            voidElements = false
        }
    }
    return voidElements;
}

function cloneField() {
    if( checkField() ){
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
}
