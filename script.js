const materias = [
  { nombre: "Matemáticas I", semestre: 1, descripcion: "Álgebra y funciones" },
  { nombre: "Biología", semestre: 1, descripcion: "Fundamentos de la vida" },
  { nombre: "Química", semestre: 2, descripcion: "Estructura de la materia" },
  { nombre: "Física", semestre: 2, descripcion: "Movimiento y energía" },
  { nombre: "Anatomía", semestre: 3, descripcion: "Cuerpo humano" },
  { nombre: "Fisiología", semestre: 3, descripcion: "Funciones biológicas" }
  // Agrega más materias aquí
];

const container = document.getElementById("malla-container");

for (let i = 1; i <= 8; i++) {
  const bloque = document.createElement("div");
  bloque.className = "semestre";
  bloque.innerHTML = `<strong>Semestre ${i}</strong><br/>`;

  const materiasDelSemestre = materias.filter(m => m.semestre === i);
  materiasDelSemestre.forEach(m => {
    const mat = document.createElement("div");
    mat.className = "materia";
    mat.innerText = m.nombre;
    mat.title = m.descripcion;
    bloque.appendChild(mat);
  });

  container.appendChild(bloque);
}
