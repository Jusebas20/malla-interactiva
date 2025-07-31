const pensum = [
  {
    semestre: 1,
    asignaturas: [
      { codigo: "CAA01", nombre: "INTRODUCCION A LAS CIENCIAS AGRARIAS", creditos: 3, prerrequisitos: "" },
      { codigo: "CAA02", nombre: "AGROECOSISTEMAS", creditos: 2, prerrequisitos: "" },
      { codigo: "CAA03", nombre: "FUNDAMENTOS EN ESCRITOS CIENTIFICOS", creditos: 2, prerrequisitos: "" },
      { codigo: "CBA24", nombre: "MATEMATICAS I", creditos: 2, prerrequisitos: "" },
      { codigo: "CBA25", nombre: "BIOLOGIA MOLECULAR Y CELULAR", creditos: 3, prerrequisitos: "" },
      { codigo: "CBA26", nombre: "BIOQUIMICA I", creditos: 3, prerrequisitos: "" },
      { codigo: "FLA01", nombre: "IDENTIDAD LASALLISTA", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA01", nombre: "ELECTIVA INTERDISCIPLINAR I", creditos: 3, prerrequisitos: "" }
    ]
  },
  {
    semestre: 2,
    asignaturas: [
      { codigo: "CBA16", nombre: "METODOS ESTADISTICOS", creditos: 4, prerrequisitos: "CBA24" },
      { codigo: "CBA36", nombre: "BIOQUIMICA II", creditos: 3, prerrequisitos: "CBA26" },
      { codigo: "FLA02", nombre: "HUMANIDADES I", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA02", nombre: "ANATOMIA", creditos: 4, prerrequisitos: "CBA25" },
      { codigo: "MVA03", nombre: "HISTOLOGIA Y EMBRIOLOGIA", creditos: 4, prerrequisitos: "CBA25" },
      { codigo: "MVA04", nombre: "ELECTIVA INTERDISCIPLINAR II", creditos: 3, prerrequisitos: "" }
    ]
  },
  {
    semestre: 3,
    asignaturas: [
      { codigo: "FLA03", nombre: "HUMANIDADES II", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA05", nombre: "ANATOMIA II", creditos: 4, prerrequisitos: "MVA02" },
      { codigo: "MVA06", nombre: "FISIOLOGIA GENERAL", creditos: 3, prerrequisitos: "CBA36" },
      { codigo: "MVA07", nombre: "INMUNOLOGIA", creditos: 2, prerrequisitos: "CBA36" },
      { codigo: "MVA08", nombre: "PARASITOLOGIA VETERINARIA", creditos: 4, prerrequisitos: "CBA25" },
      { codigo: "MVA09", nombre: "DESARROLLO RURAL Y TERRITORIO", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA10", nombre: "ELECTIVA DISCIPLINAR I", creditos: 3, prerrequisitos: "" }
    ]
  },
  {
    semestre: 4,
    asignaturas: [
      { codigo: "FLA04", nombre: "CULTURA RELIGIOSA I", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA11", nombre: "FISIOLOGIA MEDICA I", creditos: 3, prerrequisitos: "MVA05, MVA06" },
      { codigo: "MVA12", nombre: "BACTERIOLOGIA Y MICOLOGIA", creditos: 3, prerrequisitos: "MVA07" },
      { codigo: "MVA13", nombre: "VIROLOGIA Y PRIONES", creditos: 3, prerrequisitos: "MVA07" },
      { codigo: "MVA14", nombre: "EPIDEMIOLOGIA", creditos: 2, prerrequisitos: "CBA16" },
      { codigo: "MVA15", nombre: "NUTRICION GENERAL", creditos: 2, prerrequisitos: "CBA36" },
      { codigo: "MVA16", nombre: "ELECTIVA INTERDISCIPLINAR III", creditos: 3, prerrequisitos: "" },
      { codigo: "MVA17", nombre: "INVESTIGACION APLICADA", creditos: 2, prerrequisitos: "CBA16" }
    ]
  },
  {
    semestre: 5,
    asignaturas: [
      { codigo: "FLA05", nombre: "CULTURA RELIGIOSA II", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA18", nombre: "FISIOLOGIA MEDICA II", creditos: 3, prerrequisitos: "MVA11" },
      { codigo: "MVA19", nombre: "FISIOLOGIA DE LA REPRODUCCION", creditos: 3, prerrequisitos: "MVA06" },
      { codigo: "MVA20", nombre: "GENETICA ANIMAL", creditos: 3, prerrequisitos: "CBA16" },
      { codigo: "MVA23", nombre: "ELECTIVA DISCIPLINAR II", creditos: 3, prerrequisitos: "" }
    ]
  },
  {
    semestre: 6,
    asignaturas: [
      { codigo: "FLA06", nombre: "CULTURA RELIGIOSA III", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA24", nombre: "FARMACOLOGIA", creditos: 3, prerrequisitos: "MVA18" },
      { codigo: "MVA25", nombre: "ANDROLOGIA", creditos: 3, prerrequisitos: "MVA19" },
      { codigo: "MVA26", nombre: "SEMIOLOGIA", creditos: 3, prerrequisitos: "MVA18" },
      { codigo: "MVA27", nombre: "PATOLOGIA SISTEMICA", creditos: 3, prerrequisitos: "MVA21" },
      { codigo: "MVA28", nombre: "SISTEMAS DE PRODUCCION I", creditos: 2, prerrequisitos: "MVA22" },
      { codigo: "MVA29", nombre: "SEGURIDAD E INOCUIDAD ALIMENTARIA", creditos: 2, prerrequisitos: "MVA14" },
      { codigo: "MVA30", nombre: "ELECTIVA INTERDISCIPLINAR IV", creditos: 3, prerrequisitos: "" }
    ]
  },
  {
    semestre: 7,
    asignaturas: [
      { codigo: "MVA31", nombre: "PATOLOGIA CLINICA", creditos: 3, prerrequisitos: "MVA21" },
      { codigo: "MVA32", nombre: "SISTEMAS DE PRODUCCION II", creditos: 2, prerrequisitos: "MVA22" },
      { codigo: "MVA33", nombre: "MEDICINA EN LA PRODUCCION AVIAR", creditos: 3, prerrequisitos: "MVA27" },
      { codigo: "MVA34", nombre: "IMAGINOLOGIA", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA35", nombre: "TOXICOLOGIA", creditos: 2, prerrequisitos: "MVA24" },
      { codigo: "MVA36", nombre: "GINECOLOGIA", creditos: 3, prerrequisitos: "MVA19" },
      { codigo: "MVA38", nombre: "ELECTIVA DISCIPLINAR III", creditos: 3, prerrequisitos: "" }
    ]
  },
  {
    semestre: 8,
    asignaturas: [
      { codigo: "FLA07", nombre: "ETICA GENERAL", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA39", nombre: "CIRUGIA GENERAL", creditos: 3, prerrequisitos: "" },
      { codigo: "MVA40", nombre: "MEDICINA INTERNA DE PEQUEÑAS ESPECIES", creditos: 3, prerrequisitos: "" },
      { codigo: "MVA41", nombre: "MEDICINA EN PRODUCCION DE MEDIANAS ESPECIES", creditos: 3, prerrequisitos: "" },
      { codigo: "MVA42", nombre: "MEDICINA INTERNA DE EQUINOS", creditos: 3, prerrequisitos: "" },
      { codigo: "MVA43", nombre: "MEDICINA EN PRODUCCION BOVINA", creditos: 3, prerrequisitos: "" },
      { codigo: "MVA44", nombre: "ELECTIVA DISCIPLINAR IV", creditos: 3, prerrequisitos: "" }
    ]
  },
  {
    semestre: 9,
    asignaturas: [
      { codigo: "MVA45", nombre: "TERIOGENOLOGIA", creditos: 2, prerrequisitos: "MVA36" },
      { codigo: "MVA46", nombre: "TECNICA QUIRURGICA", creditos: 2, prerrequisitos: "MVA39" },
      { codigo: "MVA47", nombre: "CLINICA Y BIENESTAR DE PEQUEÑAS ESPECIES", creditos: 3, prerrequisitos: "MVA40" },
      { codigo: "MVA48", nombre: "MEDICINA DE ESPECIES SILVESTRES", creditos: 2, prerrequisitos: "" },
      { codigo: "MVA49", nombre: "CLINICA Y BIENESTAR DE BOVINOS", creditos: 3, prerrequisitos: "MVA43" },
      { codigo: "MVA50", nombre: "CLINICA Y BIENESTAR DE EQUINOS", creditos: 3, prerrequisitos: "MVA42" },
      { codigo: "MVA51", nombre: "TERAPEUTICA Y RESPONSABILIDAD SOCIOAMBIENTAL", creditos: 2, prerrequisitos: "" }
    ]
  },
  {
    semestre: 10,
    asignaturas: [
      { codigo: "MVA52", nombre: "PRACTICA EMPRESARIAL Y CLINICA AMBULATORIA", creditos: 16, prerrequisitos: "" },
      { codigo: "MVA53", nombre: "PROYECTO", creditos: 3, prerrequisitos: "65% DE LA MALLA CURRICULAR" },
      { codigo: "FLA08", nombre: "ETICA EN LAS PROFESIONES", creditos: 2, prerrequisitos: "" }
    ]
  }
];

const gridContainer = document.getElementById("grid-container");

pensum.forEach(sem => {
  const semesterDiv = document.createElement("div");
  semesterDiv.className = "semester";

  sem.asignaturas.forEach(asig => {
    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject";
    subjectDiv.innerHTML = `
      <strong>${asig.codigo}</strong><br>
      ${asig.nombre}<br>
      <span>${asig.creditos} créditos</span>
    `;
    subjectDiv.title = asig.prerrequisitos
      ? `Prerrequisitos: ${asig.prerrequisitos}`
      : "Sin prerrequisitos";
    semesterDiv.appendChild(subjectDiv);
  });

  gridContainer.appendChild(semesterDiv);
});
