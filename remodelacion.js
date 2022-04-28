
	function encriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_codificada = btoa(palabra);
    document.getElementById("resultado").innerHTML = palabra_codificada;
}
 
function desencriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_descodificada = atob(palabra);
    document.getElementById("resultado").innerHTML = palabra_descodificada;
}







document.getElementById('BotonCopiar').addEventListener('click', copiarAlPortapapeles);
function copiarAlPortapapeles(ev) {
    // Obtener contenido del div oculto
    let contenido = document.getElementById('resultado').textContent;
    // Crear input
    let input = document.createElement('input');
    // Asignar contenido
    input.value = contenido;
    // Agregar input a documento
    document.body.appendChild(input);
    // Seleccionar contenido
    input.select();
    // Copiar
    document.execCommand('copy');
    // Eliminar input
    input.remove();
}
