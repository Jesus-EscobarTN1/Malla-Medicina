const materias = [
  // SEMESTRE 1
  { nombre: "Biología Molecular Estructural", semestre: 1, creditos: 11 },
  { nombre: "Morfología I", semestre: 1, creditos: 2 },
  { nombre: "Salud Familiar y Comunitaria I y Primeros Auxilios", semestre: 1, creditos: 2 },
  { nombre: "Metodología de Estudio", semestre: 1, creditos: 3 },
  { nombre: "Filosofía Sanmartiniana", semestre: 1, creditos: 1 },
  { nombre: "Constitución Política", semestre: 1, creditos: 1 },
  { nombre: "Computadores", semestre: 1, creditos: 2 },
  { nombre: "Inglés I", semestre: 1, creditos: 2 },

  // SEMESTRE 2
  { nombre: "Biología Funcional", semestre: 2, creditos: 7, prerequisitos: ["Biología Molecular Estructural"] },
  { nombre: "Morfología II", semestre: 2, creditos: 11, prerequisitos: ["Morfología I"] },
  { nombre: "Salud Familiar y Comunitaria II", semestre: 2, creditos: 2, prerequisitos: ["Salud Familiar y Comunitaria I y Primeros Auxilios"] },
  { nombre: "Etica General", semestre: 2, creditos: 1 },
  { nombre: "Inglés II", semestre: 2, creditos: 2, prerequisitos: ["Inglés I"] },
  { nombre: "Semilleros de Investigación", semestre: 2, creditos: 1 },

  // SEMESTRE 3
  { nombre: "Fisiología", semestre: 3, creditos: 8, prerequisitos: ["Biología Funcional", "Morfología II"] },
  { nombre: "Inmunología", semestre: 3, creditos: 3, prerequisitos: ["Biología Funcional"] },
  { nombre: "Salud Familiar y Comunitaria III", semestre: 3, creditos: 2, prerequisitos: ["Salud Familiar y Comunitaria II"] },
  { nombre: "Metodología de la Investigación", semestre: 3, creditos: 2, prerequisitos: ["Semilleros de Investigación"] },
  { nombre: "Bioestadística", semestre: 3, creditos: 2, prerequisitos: ["Computadores"] },
  { nombre: "Antropología Social", semestre: 3, creditos: 2 },
  { nombre: "Epistemología", semestre: 3, creditos: 1 },
  { nombre: "Inglés III", semestre: 3, creditos: 2, prerequisitos: ["Inglés II"] },
  { nombre: "Riesgo Biológico I", semestre: 3, creditos: 1 },

  // SEMESTRE 4
  { nombre: "Microbiología y Parasitología", semestre: 4, creditos: 6, prerequisitos: ["Fisiología", "Inmunología"] },
  { nombre: "Oncología Básica", semestre: 4, creditos: 2, prerequisitos: ["Fisiología"] },
  { nombre: "Patología", semestre: 4, creditos: 7, prerequisitos: ["Morfología II", "Fisiología"] },
  { nombre: "Psicología General y Médica", semestre: 4, creditos: 2 },
  { nombre: "Salud Familiar y Comunitaria IV", semestre: 4, creditos: 2, prerequisitos: ["Salud Familiar y Comunitaria III"] },
  { nombre: "Inglés IV", semestre: 4, creditos: 2, prerequisitos: ["Inglés III"] },
  { nombre: "Riesgo Biológico II", semestre: 4, creditos: 1, prerequisitos: ["Riesgo Biológico I"] },

  // SEMESTRE 5
  { nombre: "Semiología General y Mental", semestre: 5, creditos: 8, prerequisitos: ["Microbiología y Parasitología", "Oncología Básica", "Patología", "Psicología General y Médica"] },
  { nombre: "Fisiopatología", semestre: 5, creditos: 5, prerequisitos: ["Patología", "Fisiología"] },
  { nombre: "Farmacología Básica", semestre: 5, creditos: 3, prerequisitos: ["Microbiología y Parasitología"] },
  { nombre: "Imágenes Diagnósticas", semestre: 5, creditos: 2, prerequisitos: ["Patología"] },
  { nombre: "Salud Familiar y Comunitaria V", semestre: 5, creditos: 2, prerequisitos: ["Salud Familiar y Comunitaria IV"] },
  { nombre: "Epidemiología Clínica", semestre: 5, creditos: 2, prerequisitos: ["Salud Familiar y Comunitaria IV", "Metodología de la Investigación", "Bioestadística"] },
  { nombre: "Bioética", semestre: 5, creditos: 1 },

  // SEMESTRE 6
  { nombre: "Farmacologia Aplicada", semestre: 6, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 5"] },
  { nombre: "Inmunología Clínica", semestre: 6, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 5"] },
  { nombre: "Medicina Interna", semestre: 6, creditos: 16, prerequisitos: ["*aprobadas hasta el semestre 5"] },
  { nombre: "Responsabilidad Médica", semestre: 6, creditos: 1, prerequisitos: ["*aprobadas hasta el semestre 5"] },
  { nombre: "Salud Familiar y Comunitaria VI", semestre: 6, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 5"] },

  // SEMESTRE 7
  { nombre: "Anestesia", semestre: 7, creditos: 4, prerequisitos: ["*aprobadas hasta el semestre 6"] },
  { nombre: "Cirugía General", semestre: 7, creditos: 10, prerequisitos: ["*aprobadas hasta el semestre 6"] },
  { nombre: "Ortopedia", semestre: 7, creditos: 4, prerequisitos: ["*aprobadas hasta el semestre 6"] },
  { nombre: "Salud Familiar y Comunitaria VII", semestre: 7, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 6"] },
  { nombre: "Saneamiento Ambiental", semestre: 7, creditos: 1, prerequisitos: ["*aprobadas hasta el semestre 6"] },
  { nombre: "Trauma y Medicina Crítica (Medicina Crítica y UCI)", semestre: 7, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 6"] },

  // SEMESTRE 8
  { nombre: "Riesgo Biológico III", semestre: 8, creditos: 1, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Toxicología", semestre: 8, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Especialidades Quirúrgicas: Cirugía Plástica", semestre: 8, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Especialidades Quirúrgicas: Oftalmología", semestre: 8, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Especialidades Quirúrgicas: Otorrinolaringología", semestre: 8, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Especialidades Quirúrgicas: Urología", semestre: 8, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Psiquiatría Clínica y de Enlace", semestre: 8, creditos: 4, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Seminario de Especialidades Médico Quirúrgicas", semestre: 8, creditos: 3, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Salud Familiar y Comunitaria VIII", semestre: 8, creditos: 1, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Derechos Humanos", semestre: 8, creditos: 1, prerequisitos: ["*aprobadas hasta el semestre 7"] },
  { nombre: "Humanidades", semestre: 8, creditos: 1, prerequisitos: ["*aprobadas hasta el semestre 7"] },

  // SEMESTRE 9
  { nombre: "Bioética", semestre: 9, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 8"] },
  { nombre: "Genética Clínica", semestre: 9, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 8"] },
  { nombre: "Ginecología y Obstetricia", semestre: 9, creditos: 14, prerequisitos: ["*aprobadas hasta el semestre 8"] },
  { nombre: "Riesgo Biológico IV", semestre: 9, creditos: 1, prerequisitos: ["*aprobadas hasta el semestre 8"] },
  { nombre: "Salud Familiar y Comunitaria IX", semestre: 9, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 8"] },

  // SEMESTRE 10
  { nombre: "Medicina Forense", semestre: 10, creditos: 3, prerequisitos: ["*aprobadas hasta el semestre 9"] },
  { nombre: "Pediatría", semestre: 10, creditos: 14, prerequisitos: ["*aprobadas hasta el semestre 9"] },
  { nombre: "Psiquiatría Pediátrica", semestre: 10, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 9"] },
  { nombre: "Salud Familiar y Comunitaria X", semestre: 10, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 9"] },
  { nombre: "Salud Mental y Comunitaria", semestre: 10, creditos: 2, prerequisitos: ["*aprobadas hasta el semestre 9"] },

  // INTERNADO
  { nombre: "Internado (Semestre 11)", semestre: 11, creditos: 25, prerequisitos: ["*aprobadas hasta el semestre 10"] },
  { nombre: "Internado (Semestre 12)", semestre: 12, creditos: 25, prerequisitos: ["*aprobadas hasta el semestre 11"] }
];

// Función para saber si una materia puede activarse
function puedeCursarse(materia, aprobadas) {
  if (!materia.prerequisitos || materia.prerequisitos.length === 0) return true;

  for (const req of materia.prerequisitos) {
    if (req.startsWith("*aprobadas hasta el semestre")) {
      const n = parseInt(req.split("semestre")[1]);
      return aprobadas.every(m => m.semestre <= n);
    } else {
      if (!aprobadas.find(m => m.nombre === req)) return false;
    }
  }
  return true;
}

// Renderizado
function renderMaterias() {
  const resumen = document.getElementById("resumen");
const total = materias.length;
const aprobadasCount = materias.filter(m => m.aprobada).length;
const porcentaje = Math.round((aprobadasCount / total) * 100);
resumen.textContent = `Aprobadas: ${aprobadasCount} de ${total} (${porcentaje}%)`;
  const contenedor = document.getElementById("contenedor");
  const filtroTexto = document.getElementById("buscador").value.toLowerCase();

  contenedor.innerHTML = "";

  const aprobadas = materias.filter(m => m.aprobada);

  for (let s = 1; s <= 12; s++) {
    const materiasSemestre = materias.filter(m => m.semestre === s);
    if (materiasSemestre.length === 0) continue;

    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${s}`;
    contenedor.appendChild(h2);

    materiasSemestre.forEach(materia => {
      if (!materia.nombre.toLowerCase().includes(filtroTexto)) return;
      const div = document.createElement("div");
      const estaAprobada = !!materia.aprobada;
      const habilitada = puedeCursarse(materia, aprobadas);

      div.className = "materia";

      if (estaAprobada) div.classList.add("aprobada");
      else if (habilitada) div.classList.add("habilitada");
      else div.classList.add("bloqueada");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = estaAprobada;
      input.disabled = !habilitada && !estaAprobada;

      input.addEventListener("change", () => {
        materia.aprobada = input.checked;
        guardarProgreso();
        renderMaterias(); // recarga todo
      });

      const label = document.createElement("label");
      label.textContent = `${materia.nombre} (${materia.creditos} cr.)`;

      div.appendChild(input);
      div.appendChild(label);
      contenedor.appendChild(div);
    });
  }
}
      document.getElementById("buscador").addEventListener("input", renderMaterias);
function guardarProgreso() {
  const progreso = materias.map(m => m.aprobada || false);
  localStorage.setItem("progresoMalla", JSON.stringify(progreso));
}

function cargarProgreso() {
  const guardado = localStorage.getItem("progresoMalla");
  if (!guardado) return;
  const estados = JSON.parse(guardado);
  materias.forEach((m, i) => {
    m.aprobada = estados[i] || false;
  });
}

function reiniciarProgreso() {
  localStorage.removeItem("progresoMalla");
  materias.forEach(m => m.aprobada = false);
  renderMaterias();
}

cargarProgreso();
renderMaterias();
