const open = document.querySelector('#open');
const nuevoContenedor = document.querySelector('#nuevoContenedor');

open.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    if (nuevoContenedor.style.display === 'block') {
        nuevoContenedor.style.display = 'none';
    } else {
        nuevoContenedor.style.display = 'block'; 
    }
}


const touch1 = document.querySelector('#touch');
const opencarrito = document.querySelector('#clkCarrito');

touch1.addEventListener('click', despliegueCarrito);

function despliegueCarrito() {
    if (clkCarrito.style.display === 'flex' && clkCarrito.style.flexDirection === 'row') {
      clkCarrito.style.display = 'none';
    } else {
      clkCarrito.style.display = 'flex';
      clkCarrito.style.flexDirection = 'row';
    }
  }




/* const open = document.querySelector('#open');

open.addEventListener('click', abrirContenedor);

function abrirContenedor(){
    const contenedorPrincipal = document.getElementById("#contenedorPrincipal");
    const nuevoContenedor = document.getElementById("#nuevoContenedor");

    contenedorPrincipal.style.transform = "translateX(-100%)";
    nuevoContenedor.style.display = "block";

}
 */




/* function abrirContenedor() {
    // Obtener el contenedor principal y el nuevo contenedor
    const contenedorPrincipal = document.getElementById("#contenedorPrincipal");
    const nuevoContenedor = document.getElementById("#nuevoContenedor");
  
    // Desplazar el contenedor principal hacia la izquierda
    contenedorPrincipal.style.transform = "translateX(-100%)";
  
    // Mostrar el nuevo contenedor
    nuevoContenedor.style.display = "block";
  } */