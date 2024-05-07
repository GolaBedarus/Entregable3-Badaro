const pintarCarrito = () => {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML = `
        <h1 class= "modal-header-title">Carrito.</h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";

    })

    modalHeader.append(modalbutton);
        
    carrito.forEach((product) =>{
    let carritoContent= document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src= "${product.img}">
    <h3>${product.nombre}</h3> 
    <p>${product.precio} $</p>
    <p>Cantidad: ${product.cantidad}</p>
    <p>Total: ${product.cantidad * product.precio}</p>
    `;

    modalContainer.append(carritoContent);
    
    let eliminar = document.createElement("span");

    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);

    

    eliminar.addEventListener("click", () => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });

          swalWithBootstrapButtons.fire({
            title: "Estas seguro?",
            text: "Eliminaras el producto seleccionado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                eliminar.addEventListener("click", eliminarProducto)
              swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "El producto ha sido eliminado con exito",
                icon: "success",
                
              });
            } else if (
              
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado!",
                text: "Su producto permanece en el carrito",
                icon: "error"
              });
            }
          });
    })



    });

    const total= carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML =  `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

    const comprar = document.createElement("span")
    comprar.className = "buying-content"
    comprar.innerHTML = 'COMPRAR'
    modalContainer.append(comprar); 

    comprar.addEventListener("click", async () => {

        const { value: email } = await Swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address"
          });
          if (email) {
            Swal.fire(`Entered email: ${email}`);
          }

          const { value: password } = await Swal.fire({
            title: "Enter your password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
              maxlength: "10",
              autocapitalize: "off",
              autocorrect: "off"
            }
          });
          if (password) {
            Swal.fire(`Entered password: ${password}`);
          }
    })


};

verCarrito.addEventListener("click", pintarCarrito)


const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoID) => {
        return carritoID !== foundId;
    })
    carritoCounter();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;

}