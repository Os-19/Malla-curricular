const materias = [
  // --- SEMESTRE 1 ---
  { codigo: "MAT101", nombre: "Cálculo 1", semestre: 1 },
  { codigo: "MAT100", nombre: "Álgebra 1", semestre: 1 },
  { codigo: "FIS100", nombre: "Física 1", semestre: 1 },
  { codigo: "QMC101", nombre: "Química Aplicada", semestre: 1 },
  { codigo: "CIV351", nombre: "Dibujo Técnico Computarizado 1", semestre: 1 },

  // --- SEMESTRE 2 ---
  { codigo: "MAT102", nombre: "Cálculo 2", semestre: 2, requisitos: ["MAT101"] },
  { codigo: "MAT103", nombre: "Álgebra 2", semestre: 2, requisitos: ["MAT100"] },
  { codigo: "FIS102", nombre: "Física 2", semestre: 2, requisitos: ["FIS100"] },
  { codigo: "MAT204", nombre: "Informática 1", semestre: 2, requisitos: ["MAT100"] },
  { codigo: "CIV249", nombre: "Geología", semestre: 2, requisitos: ["QMC101"] },
  { codigo: "CIV352", nombre: "Dibujo Computarizado 2", semestre: 2, requisitos: ["CIV351"] },

    // --- SEMESTRE 3 ---
  { codigo: "MAT214", nombre: "Cálculo 3", semestre: 3, requisitos: ["MAT102"] },
  { codigo: "MAT207", nombre: "Ecuaciones Diferenciales", semestre: 3, requisitos: ["MAT102"] },
  { codigo: "CIV211", nombre: "Estructura Isostática 1", semestre: 3, requisitos: ["FIS102", "CIV352"] },
  { codigo: "CIV213", nombre: "Topografía 1", semestre: 3, requisitos: ["CIV352"] },
  { codigo: "CIV216", nombre: "Materiales de Construcción", semestre: 3, requisitos: ["CIV249"] },
  { codigo: "MAT370", nombre: "Métodos Estadísticos", semestre: 3, requisitos: ["MAT103"] },
  { codigo: "MAT373", nombre: "Mét. Numéricos y Programación", semestre: 3, requisitos: ["MAT204"] },

  // --- SEMESTRE 4 ---
  { codigo: "MAT374", nombre: "Mét. Num. y Programación 2", semestre: 4, requisitos: ["MAT373"] },
  { codigo: "CIV371", nombre: "Mecánica Racional", semestre: 4, requisitos: ["MAT214"] },
  { codigo: "CIV223", nombre: "Estructura Isostática 2", semestre: 4, requisitos: ["CIV211"] },
  { codigo: "CIV215", nombre: "Fotogrametría y Geodesia", semestre: 4, requisitos: ["CIV213"] },
  { codigo: "ELC369", nombre: "Electrotécnico p/ Ing. Civil", semestre: 4, requisitos: ["FIS102", "CIV352"] },
  { codigo: "CIV391", nombre: "Mét. Investig. y Aplicación Ing.", semestre: 4, requisitos: ["MAT370"] },

    // --- SEMESTRE 5 ---
  { codigo: "CIV302", nombre: "Mecánica de los Materiales", semestre: 5, requisitos: ["CIV223", "CIV371"] },
  { codigo: "CIV229", nombre: "Hidráulica 1", semestre: 5, requisitos: ["CIV371"] },
  { codigo: "CIV218", nombre: "Tecnología del Hormigón", semestre: 5, requisitos: ["CIV216"] },
  { codigo: "CIV219", nombre: "Mecánica de Suelos", semestre: 5, requisitos: ["CIV216"] },
  { codigo: "CIV323", nombre: "Carreteras 1", semestre: 5, requisitos: ["CIV215"] },
  { codigo: "CIV329", nombre: "Arquitectura y Plan. Urb. Reg.", semestre: 5, requisitos: ["MAT373"] },

  // --- SEMESTRE 6 ---
  { codigo: "CIV374", nombre: "Mecánica de los Materiales 2", semestre: 6, requisitos: ["CIV302"] },
  { codigo: "CIV230", nombre: "Hidráulica 2", semestre: 6, requisitos: ["CIV229"] },
  { codigo: "CIV248", nombre: "Dirección de Obras y Valuación", semestre: 6, requisitos: ["CIV219", "CIV323"] },
  { codigo: "CIV220", nombre: "Mecánica de Suelos 2", semestre: 6, requisitos: ["CIV219"] },
  { codigo: "CIV346", nombre: "Construcción de Edificios 1", semestre: 6, requisitos: ["CIV218", "ELC369"] },
  { codigo: "CIV361", nombre: "Saneamiento Ambiental", semestre: 6, requisitos: ["CIV329"] },
  { codigo: "MAT208", nombre: "Análisis Vectorial y Tensores", semestre: 6, requisitos: ["CIV371"] },

  // ---SEMESTRE 7 ---
];

const mallaContainer = document.getElementById("malla");
const estadoMaterias = {};

function crearTarjetas() {
  const porSemestre = {};
  materias.forEach(m => {
    if (!porSemestre[m.semestre]) porSemestre[m.semestre] = [];
    porSemestre[m.semestre].push(m);
    estadoMaterias[m.codigo] = false; // inicialmente no aprobadas
  });

  for (let s = 1; s <= 10; s++) {
    const div = document.createElement("div");
    div.className = `semestre semestre-${s}`;
    const titulo = document.createElement("h2");
    titulo.textContent = `${s}º Semestre`;
    div.appendChild(titulo);

    (porSemestre[s] || []).forEach(m => {
      const mat = document.createElement("div");
      mat.className = "materia";
      mat.dataset.codigo = m.codigo;
      if (m.requisitos) {
        mat.dataset.requisitos = m.requisitos.join(",");
        mat.classList.add("bloqueada");
      }
      mat.textContent = `${m.codigo} - ${m.nombre}`;
      mat.addEventListener("click", () => toggleAprobada(mat));
      div.appendChild(mat);
    });

    mallaContainer.appendChild(div);
  }

  actualizarEstados();
}

function toggleAprobada(elemento) {
  const codigo = elemento.dataset.codigo;
  const aprobada = elemento.classList.toggle("aprobada");
  estadoMaterias[codigo] = aprobada;
  actualizarEstados();
}

function actualizarEstados() {
  document.querySelectorAll(".materia").forEach(el => {
    const requisitos = el.dataset.requisitos?.split(",") || [];
    const codigo = el.dataset.codigo;

    if (estadoMaterias[codigo]) return; // ya aprobada

    if (requisitos.length === 0) {
      el.classList.remove("bloqueada", "habilitada");
    } else {
      const habilitada = requisitos.every(req => estadoMaterias[req]);
      if (habilitada) {
        el.classList.remove("bloqueada");
        el.classList.add("habilitada");
      } else {
        el.classList.remove("habilitada");
        el.classList.add("bloqueada");
      }
    }
  });
}

crearTarjetas();
