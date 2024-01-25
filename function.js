function copyText(field) {
    let text_value = document.getElementById(field).value
    console.log("Valor copiado: " + text_value);
    navigator.clipboard.writeText(text_value);
}