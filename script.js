const materias = [
  // SEMESTRE 1
  { nombre: "Biología Molecular Estructural", semestre: 1 },
  { nombre: "Morfología I", semestre: 1 },
  { nombre: "Salud Familiar y Comunitaria I y Primeros Auxilios", semestre: 1 },
  { nombre: "Metodología de Estudio", semestre: 1 },
  { nombre: "Filosofía Sanmartiniana", semestre: 1 },
  { nombre: "Constitución Política", semestre: 1 },
  { nombre: "Computadores", semestre: 1 },
  { nombre: "Inglés I", semestre: 1 },

  // SEMESTRE 2
  {
    nombre: "Biología Funcional",
    semestre: 2,
    prerequisitos: ["Biología Molecular Estructural"]
  },
  {
    nombre: "Morfología II",
    semestre: 2,
    prerequisitos: ["Morfología I"]
  },
  {
    nombre: "Salud Familiar y Comunitaria II",
    semestre: 2,
    prerequisitos: ["Salud Familiar y Comunitaria I y Primeros Auxilios"]
  },
  { nombre: "Ética General", semestre: 2 },
  {
    nombre: "Inglés II",
    semestre: 2,
    prerequisitos: ["Inglés I"]
  },
  { nombre: "Semilleros de Investigación", semestre: 2 },

  // SEMESTRE 3
  {
    nombre: "Fisiología",
    semestre: 3,
    prerequisitos: ["Biología Funcional", "Morfología II"]
  },
  {
    nombre: "Inmunología",
    semestre: 3,
    prerequisitos: ["Biología Funcional"]
  },
  {
    nombre: "Salud Familiar y Comunitaria III",
    semestre: 3,
    prerequisitos: ["Salud Familiar y Comunitaria II"]
  },
  {
    nombre: "Metodología de la Investigación",
    semestre: 3,
    prerequisitos: ["Semilleros de Investigación"]
  },
  {
    nombre: "Bioestadística",
    semestre: 3,
    prerequisitos: ["Computadores"]
  },
  { nombre: "Antropología Social", semestre: 3 },
  { nombre: "Epistemología", semestre: 3 },
  {
    nombre: "Inglés III",
    semestre: 3,
    prerequisitos: ["Inglés II"]
  },
  { nombre: "Riesgo Biológico I", semestre: 3 },

  // SEMESTRE 4
  {
    nombre: "Microbiología y Parasitología",
    semestre: 4,
    prerequisitos: ["Fisiología", "Inmunología"]
  },
  {
    nombre: "Oncología Básica",
    semestre: 4,
    prerequisitos: ["Fisiología"]
  },
  {
    nombre: "Patología",
    semestre: 4,
    prerequisitos: ["Morfología II", "Fisiología"]
  },
  { nombre: "Psicología General y Médica", semestre: 4 },
  {
    nombre: "Salud Familiar y Comunitaria IV",
    semestre: 4,
    prerequisitos: ["Salud Familiar y Comunitaria III"]
  },
  {
    nombre: "Inglés IV",
    semestre: 4,
    prerequisitos: ["Inglés III"]
  },
  {
    nombre: "Riesgo Biológico II",
    semestre: 4,
    prerequisitos: ["Riesgo Biológico I"]
  },

  // SEMESTRE 5
  {
    nombre: "Semiología General y Mental",
    semestre: 5,
    prerequisitos: [
      "Microbiología y Parasitología",
      "Oncología Básica",
      "Patología",
      "Psicología General y Médica"
    ]
  },
  {
    nombre: "Fisiopatología",
    semestre: 5,
    prerequisitos: ["Patología", "Fisiología"]
  },
  {
    nombre: "Farmacología Básica",
    semestre: 5,
    prerequisitos: ["Microbiología y Parasitología"]
  },
  {
    nombre: "Imágenes Diagnósticas",
    semestre: 5,
    prerequisitos: ["Patología"]
  },
  {
    nombre: "Salud Familiar y Comunitaria V",
    semestre: 5,
    prerequisitos: ["Salud Familiar y Comunitaria IV"]
  },
  {
    nombre: "Epidemiología Clínica",
    semestre: 5,
    prerequisitos: [
      "Salud Familiar y Comunitaria IV",
      "Metodología de la Investigación",
      "Bioestadística"
    ]
  },
  { nombre: "Bioética", semestre: 5 }
];

// SEMESTRE 6
{ nombre: "Farmacología Aplicada", semestre: 6, prerequisitos: ["*aprobadas hasta el semestre 5"] },
{ nombre: "Inmunología Clínica", semestre: 6, prerequisitos: ["*aprobadas hasta el semestre 5"] },
{ nombre: "Medicina Interna", semestre: 6, prerequisitos: ["*aprobadas hasta el semestre 5"] },
{ nombre: "Responsabilidad Médica", semestre: 6, prerequisitos: ["*aprobadas hasta el semestre 5"] },
{ nombre: "Salud Familiar y Comunitaria VI", semestre: 6, prerequisitos: ["*aprobadas hasta el semestre 5"] },

// SEMESTRE 7
{ nombre: "Anestesia", semestre: 7, prerequisitos: ["*aprobadas hasta el semestre 6"] },
{ nombre: "Cirugía General", semestre: 7, prerequisitos: ["*aprobadas hasta el semestre 6"] },
{ nombre: "Ortopedia", semestre: 7, prerequisitos: ["*aprobadas hasta el semestre 6"] },
{ nombre: "Salud Familiar y Comunitaria VII", semestre: 7, prerequisitos: ["*aprobadas hasta el semestre 6"] },
{ nombre: "Saneamiento Ambiental", semestre: 7, prerequisitos: ["*aprobadas hasta el semestre 6"] },
{ nombre: "Trauma y Medicina Crítica (Medicina Crítica y UCI)", semestre: 7, prerequisitos: ["*aprobadas hasta el semestre 6"] },

// SEMESTRE 8
{ nombre: "Riesgo Biológico III", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Toxicología", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Especialidades Quirúrgicas: Cirugía Plástica", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Especialidades Quirúrgicas: Oftalmología", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Especialidades Quirúrgicas: Otorrinolaringología", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Especialidades Quirúrgicas: Urología", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Psiquiatría Clínica y de Enlace", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Seminario de Especialidades Médico Quirúrgicas", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Salud Familiar y Comunitaria VIII", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Derechos Humanos", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },
{ nombre: "Humanidades", semestre: 8, prerequisitos: ["*aprobadas hasta el semestre 7"] },

// SEMESTRE 9
{ nombre: "Bioética", semestre: 9, prerequisitos: ["*aprobadas hasta el semestre 8"] },
{ nombre: "Genética Clínica", semestre: 9, prerequisitos: ["*aprobadas hasta el semestre 8"] },
{ nombre: "Ginecología y Obstetricia", semestre: 9, prerequisitos: ["*aprobadas hasta el semestre 8"] },
{ nombre: "Riesgo Biológico IV", semestre: 9, prerequisitos: ["*aprobadas hasta el semestre 8"] },
{ nombre: "Salud Familiar y Comunitaria IX", semestre: 9, prerequisitos: ["*aprobadas hasta el semestre 8"] },

// SEMESTRE 10
{ nombre: "Medicina Forense", semestre: 10, prerequisitos: ["*aprobadas hasta el semestre 9"] },
{ nombre: "Pediatría", semestre: 10, prerequisitos: ["*aprobadas hasta el semestre 9"] },
{ nombre: "Psiquiatría Pediátrica", semestre: 10, prerequisitos: ["*aprobadas hasta el semestre 9"] },
{ nombre: "Salud Familiar y Comunitaria X", semestre: 10, prerequisitos: ["*aprobadas hasta el semestre 9"] },
{ nombre: "Salud Mental y Comunitaria", semestre: 10, prerequisitos: ["*aprobadas hasta el semestre 9"] },

// INTERNADO
{ nombre: "Internado (Semestre 11)", semestre: 11, prerequisitos: ["*aprobadas hasta el semestre 10"] },
{ nombre: "Internado (Semestre 12)", semestre: 12, prerequisitos: ["*aprobadas hasta el semestre 11"] }
