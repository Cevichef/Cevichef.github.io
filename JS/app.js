const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img[id="img"]');
const btnporciones = document.querySelector('.porciones');
const btnentradas = document.querySelector('.entradas');
const btnencebollados = document.querySelector('.encebollados');
const btnceviches = document.querySelector('.ceviches');
const btnarroz = document.querySelector('.arroz');
// const btnespeciales = document.querySelector('.especiales');
const btnbebidas = document.querySelector('.bebidas');

const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const entradas = platillosArreglo.filter(entradas=> entradas.getAttribute('data-platillo') === 'entradas');
    const encebollados = platillosArreglo.filter(encebollados => encebollados.getAttribute('data-platillo') === 'encebollados');
    const ceviches = platillosArreglo.filter(ceviches => ceviches.getAttribute('data-platillo') === 'ceviches');
    const arroz = platillosArreglo.filter(arroz=> arroz.getAttribute('data-platillo') === 'arroz');
    const porciones = platillosArreglo.filter(porciones => porciones.getAttribute('data-platillo') === 'porciones');
    // const especiales = platillosArreglo.filter(especiales => especiales.getAttribute('data-platillo') === 'especiales');
    const bebidas = platillosArreglo.filter(bebidas => bebidas.getAttribute('data-platillo') === 'bebidas');
    mostrarPlatillos(entradas, encebollados, ceviches, arroz, porciones, bebidas);

}

const mostrarPlatillos = (entradas, encebollados, ceviches, arroz, porciones, bebidas) =>{
    btnentradas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        entradas.forEach(entradas=> contenedorPlatillos.appendChild(entradas));
    });

    btnencebollados.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        encebollados.forEach(encebollados=> contenedorPlatillos.appendChild(encebollados));
    });

    btnbebidas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        bebidas.forEach(bebidas=> contenedorPlatillos.appendChild(bebidas));
    });

    // btnespeciales.addEventListener('click', ()=>{
    //     limpiarHtml(contenedorPlatillos);
    //     especiales.forEach(especiales=> contenedorPlatillos.appendChild(especiales));
    // });

    btnporciones.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        porciones.forEach(porciones=> contenedorPlatillos.appendChild(porciones));
    });

    btnceviches.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ceviches.forEach(ceviches=> contenedorPlatillos.appendChild(ceviches));
    });
    btnarroz.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        arroz.forEach(arroz=> contenedorPlatillos.appendChild(arroz));
    });
    
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}