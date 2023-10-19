document.addEventListener("DOMContentLoaded", () => {
const ContenedorProductos = document.getElementById("ContenedorProductos")
const cantidadCarrito = document.getElementById ("cantidadCarrito")

let carrito = []

const getProd = async () => {
  const respuesta = await fetch("/data.json");
  const data = await respuesta.json();
ListaProductos(data)
};



 const ListaProductos = (data) => {
  data.forEach(producto => {
    const cardProducto = document.createElement('div');
    cardProducto.classList = "Tarjeta-producto";
    cardProducto.innerHTML =`
                            <img src="${producto.img}" alt="${producto.nombre}">
                            <div class= "prod-descripcion">
                            <h5 class= "obra-nombre">${producto.nombre}</h5>
                            <h6 class= "precio">${producto.precio}$</h6>
                            <button id='${producto.id}' class= "btn-compra">COMPRAR</button>
                            </div>
                           `;
  ContenedorProductos.append(cardProducto)
  
   
        

    const botonComprar = document.getElementById(`${producto.id}`)
    botonComprar.addEventListener( "click", () => {
      agregarAlCarrito(producto.id, data)
          Swal.fire({
          position: "sticky",
          icon: 'success',
          title: 'Sumaste un producto a tu carrito',
          showConfirmButton: true,
          timer: 1800
          })
        })
      })
     };

    function agregarAlCarrito(id,productos) {
     let prodEncontrado = productos.find((prod) => prod.id == parseInt(id));
     let prodEncarrito = carrito.find((prod)=> prod == parseInt(id));
     if (prodEncarrito) {
      prodEncarrito.cantidad++
     } else {
      carrito.push({prodEncontrado, cantidad: 1})
     }
     console.log(carrito)
    }
    
    getProd ();
  })

               
   
                         

                            

        
                          








