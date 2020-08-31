function validarTexto() {
    const animal = document.getElementById('animal').value;
    const patron = /gato/i;
    if (animal.match(patron))
    alert('Se ingresó la palabra gato');
    else
    alert('No se ingresó la palabra gato');
    }