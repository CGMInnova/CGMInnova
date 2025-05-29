const imagenesPorCategoria = {
  llaveros: ["galeria/llavero1.jpg", "galeria/llavero2.jpg"],
  aretes: ["galeria/arete1.jpg", "galeria/arete2.jpg"],
  cuadros: ["galeria/cuadro1.jpg", "galeria/cuadro2.jpg"],
  cofres: ["galeria/cofre-karina.png"],
  recordatorios: ["galeria/recordatorio1.jpg", "galeria/recordatorio2.jpg"]
};

function abrirModal(categoria) {
  const contenedor = document.getElementById("imagenesModal");
  contenedor.innerHTML = "";
  imagenesPorCategoria[categoria].forEach(ruta => {
    const img = document.createElement("img");
    img.src = ruta;
    img.alt = categoria;
    contenedor.appendChild(img);
  });
  document.getElementById("galeriaModal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("galeriaModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("galeriaModal");
  if (event.target === modal) {
    cerrarModal();
  }
};
