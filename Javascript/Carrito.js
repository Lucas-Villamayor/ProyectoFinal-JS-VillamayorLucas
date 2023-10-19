const modalconteiner = document.getElementById("modal-conteiner")
const verCarrito = document.getElementById("verCarrito");
const cantidadCarrito = document.getElementById ("cantidadCarrito")
carrito = []

const pintarCarrito = () => {
  modalconteiner.innerHTML = "";
  modalconteiner.style.display = "flex";
  const modal = document.createElement("div");
  modal.className = "modal-carro";
  modal.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
  `;
  modalconteiner.appendChild(modal);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";
  modal.append(modalbutton);

  modalbutton.addEventListener("click", () => {
    modalconteiner.style.display = "none";
  });

  // Loop through each item in the carrito array
  carrito.forEach((producto) => {
    const carritocontent = document.createElement("div");
    carritocontent.className = "modal-content";
    carritocontent.innerHTML = `
      <img src="${producto.img}" />
      <h3>${producto.nombre}</h3>
      <p>${producto.precio}$</p>
      <p>Cantidad: ${producto.cantidad}</p>
      <p>Total: ${producto.cantidad * producto.precio}$</p>
    `;
    modalconteiner.appendChild(carritocontent);

    const eliminar = document.createElement("span");
    eliminar.innerHTML = "❎";
    eliminar.className = "delete-prod";
    carritocontent.appendChild(eliminar);

    eliminar.addEventListener("click", () => eliminar(producto.id));
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  const totalCompra = document.createElement("div");
  totalCompra.className = "total-content";
  totalCompra.innerHTML = `Total a pagar: ${total}$`;
  modalconteiner.appendChild(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const carritocontent = () => {
  cantidadCarrito.style.display = "block"
  cantidadCarrito.innerHTML = carrito.length;
}