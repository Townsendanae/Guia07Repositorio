let ejecutarCodigo = () => {
    let elemento = document.getElementById("titulo1");
    elemento.textContent = 'Album de fotos';

    let arreglo = document.getElementsByClassName('text-muted');
    elemento = arreglo[1];
    elemento.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>'


    let arreglo2 = document.getElementsByTagName('p');
    elemento = arreglo2[2];
    elemento.setAttribute('class','d-none');

    let arreglo3 = document.getElementsByTagName('svg');

    // hacer el for 
    const span = document.createElement('img');
    span.innerHTML = "hello james";
    div.parentNode.replaceChild(span, div);

    // hay que recorrer conun for, agarrar el areglo de svg y recorrer cada uno para reemplazar los svg con img
    
}

ejecutarCodigo()