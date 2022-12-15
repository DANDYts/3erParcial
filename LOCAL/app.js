let productos = JSON.parse(localStorage.getItem ('productos'));

if (!productos) {
  localStorage.setItem('productos', JSON.stringify([]));
}

const aggCancion =()=>{
  let id = document.querySelector("#id").value;
  const nombre = document.querySelector("#nombre").value;
  const album = document.querySelector("#album").value;
  const artista = document.querySelector("#artista").value;
  const fecha = document.querySelector("#fecha").value;
  const duracion = document.querySelector("#duracion").value;
  
  if (nombre.trim()===''||album.trim()===''||artista.trim()===''||fecha.trim()===''||duracion.trim()===''){
    alert("Falta Llenar Campos!!")
    return;
  }
  
  if (id=="") {
    id=uuid.v1();
    console.log(id);
    const producto = {id, nombre, album, artista, fecha, duracion};
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    Swal.fire({
      title: 'Add',
      text: "Se Agrego Correctamente!",
      icon: 'success',
      confirmButtonColor: '#d33'
    })
  } else {
    const indice = productos.findIndex((item, indice) => {
      if (item.id === id) {
        return true;
      }
    })
    const producto = {id, nombre, album, artista, fecha, duracion};
    productos[indice]=producto;
    localStorage.setItem("productos", JSON.stringify(productos));
    Swal.fire({
      title: 'Edit',
      text: "Se Edito Correctamente!",
      icon: 'success',
      confirmButtonColor: '#d33'
    })
  }
  limpiar();
  listaCanciones();
}

const listaCanciones = () => {
  let cancionesHTML = ``;
  let productos = JSON.parse (localStorage.getItem("productos"))
  productos.map(item=>{
    cancionesHTML +=`
    <div class="header-two">
    <div id="div">
    <ul>
      <li>Id: <span id="sid">${item.id}</span></li><br>
      <li>NOMBRE: <span id="snombre">${item.nombre}</span></li><br>
      <li>MARCA: <span id="snombre">${item.album}</span></li><br>
      <li>COMERCIALIZADORA: <span id="snombre">${item.artista}</span></li><br>
      <li>DISTRIBUIDORA: <span id="snombre">${item.fecha}</span></li><br>
      <li>CANTIDAD: <span id="snombre">${item.duracion}</span></li><br>
    </ul>
    </div>
    <div class="content-2">
        <button id="btnBorrar" onclick="borrarCancion('${item.id}')">BORRAR</button>
        <button id="btnEditar" onclick="editarCancion('${item.id}')"><a href="#arriba">EDITAR</a></button>
      </div>
    </div>
    `;
    document.querySelector("#divRes").innerHTML = cancionesHTML;
  })
}

const limpiar=()=>{
  document.querySelector("#id").value="";
  document.querySelector("#from").reset();
}

const btnLimpiar = document.querySelector("#btnLimpiar")
btnLimpiar.addEventListener('click', ()=>{
  limpiar();
})

const borrarCancion = (idEliminar) => {
  Swal.fire({
      title: 'Estas Seguro De Eliminarla??',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        let productos = JSON.parse (localStorage.getItem("productos"));
        const producto = productos.filter ((item) => item.id !== idEliminar);
        localStorage.setItem("productos", JSON.stringify(producto));
      }
    listaCanciones();
    })
}

const editarCancion = (idEditar) => {
  productos = JSON.parse(localStorage.getItem('productos'));
  var array = productos.filter(producto=>{return producto.id == idEditar
  });
  
  var producto = (array.length > 0) ? array[0]: null;
  document.querySelector("#nombre").value = producto.nombre;
  document.querySelector("#albun").value = producto.album;
  document.querySelector("#artista").value = producto.artista;
  document.querySelector("#fecha").value = producto.fecha;
  document.querySelector("#duracion").value = producto.duracion;
  document.querySelector("#id").value = producto.id;
}