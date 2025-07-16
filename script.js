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

    // --- SEMESTRE 7 ---
  { codigo: "CIV204", nombre: "Análisis Estructural 1", semestre: 7, requisitos: ["CIV374"] },
  { codigo: "CIV206", nombre: "Análisis Matricial de Estructuras", semestre: 7, requisitos: ["CIV374"] },
  { codigo: "CIV372", nombre: "Ingeniería Económica", semestre: 7, requisitos: ["CIV248"] },
  { codigo: "CIV325", nombre: "Carreteras 2", semestre: 7, requisitos: ["CIV323"] },
  { codigo: "CIV246", nombre: "Análisis Estructural Metálicas y Madera", semestre: 7, requisitos: ["CIV374"] },
  { codigo: "CIV524", nombre: "Construcción de Edificios 2", semestre: 7, requisitos: ["CIV346"] },
  { codigo: "CIV232", nombre: "Obras Hidráulicas 1", semestre: 7, requisitos: ["CIV230"] },
  { codigo: "CIV285", nombre: "Gestión de Higiene y Seguridad Industrial", semestre: 7, requisitos: ["CIV346"] },
  { codigo: "CIV338", nombre: "Ingeniería Sanitaria 1", semestre: 7, requisitos: ["CIV230"] },
  { codigo: "CIV231", nombre: "Hidrología", semestre: 7, requisitos: ["CIV230"] },

  // --- SEMESTRE 8 ---
  { codigo: "CIV209", nombre: "Hormigón Armado 1", semestre: 8, requisitos: ["CIV218", "CIV204"] },
  { codigo: "CIV410", nombre: "Ingeniería Legal", semestre: 8, requisitos: ["CIV372"] },
  { codigo: "CIV250", nombre: "Fundaciones", semestre: 8, requisitos: ["CIV219", "CIV204"] },
  { codigo: "CIV307", nombre: "Estructuras Especiales", semestre: 8, requisitos: ["CIV204", "CIV206"] },
  { codigo: "CIV308", nombre: "Elasticidad Aplicada", semestre: 8, requisitos: ["CIV204", "CIV206"] },
  { codigo: "CIV376", nombre: "Sistemas de Ingeniería", semestre: 8, requisitos: ["CIV248"] },
  { codigo: "CIV247", nombre: "Máquinas y Equipos de Construcción", semestre: 8, requisitos: ["CIV325"] },
  { codigo: "CIV528", nombre: "Tráfico y Transporte", semestre: 8, requisitos: ["CIV325", "CIV329"] },
  { codigo: "CIV357", nombre: "Hidrología Aplicada", semestre: 8, requisitos: ["CIV231"] },
  { codigo: "CIV365", nombre: "Obras Hidráulicas 2", semestre: 8, requisitos: ["CIV232"] },
  { codigo: "CIV339", nombre: "Ingeniería Sanitaria 2", semestre: 8, requisitos: ["CIV338"] },
  { codigo: "CIV326", nombre: "Carreteras 3", semestre: 8, requisitos: ["CIV325"] },

    // --- SEMESTRE 9 ---
  { codigo: "CIV210", nombre: "Hormigón Armado 2", semestre: 9, requisitos: ["CIV209"] },
  { codigo: "CIV309", nombre: "Dinámica de Estructuras", semestre: 9, requisitos: ["CIV209", "CIV308"] },
  { codigo: "CIV280", nombre: "Elaboración y Gestión de Proyectos", semestre: 9, requisitos: ["CIV410"] },
  { codigo: "CIV312", nombre: "Puentes", semestre: 9, requisitos: ["CIV209"] },
  { codigo: "CIV311", nombre: "Hormigón Pretensado", semestre: 9, requisitos: ["CIV209"] },
  { codigo: "CIV207", nombre: "Análisis Estructural 2", semestre: 9, requisitos: ["CIV204"] },
  { codigo: "CIV287", nombre: "Admin. y Seguimiento de Obras", semestre: 9, requisitos: ["CIV376"] },
  { codigo: "CIV327", nombre: "Aeropuertos", semestre: 9, requisitos: ["CIV209"] },
  { codigo: "CIV324", nombre: "Ferrocarriles", semestre: 9, requisitos: ["CIV247"] },
  { codigo: "CIV366", nombre: "Modelación Hidráulica", semestre: 9, requisitos: ["CIV365"] },
  { codigo: "CIV359", nombre: "Tratamiento de Agua Potable", semestre: 9, requisitos: ["CIV339"] },
  { codigo: "CIV360", nombre: "Tratamiento de Aguas Negras", semestre: 9, requisitos: ["CIV339"] },
  { codigo: "CIV340", nombre: "Laboratorio de Ingeniería Sanitaria", semestre: 9, requisitos: ["CIV339"] },
  { codigo: "CIV345", nombre: "Instalaciones Hidrosanitarias e Industriales", semestre: 9, requisitos: ["CIV232"] },
  { codigo: "CIV222", nombre: "Mecánica de Rocas (Geotecnia)", semestre: 9, requisitos: ["CIV250"] },
  { codigo: "CIV251", nombre: "Fundaciones 2", semestre: 9, requisitos: ["CIV250"] },

  // --- SEMESTRE 10 ---
  { codigo: "GRL001", nombre: "Modalidad de Graduación", semestre: 10, requisitos: ["CIV210", "CIV309", "CIV280", "CIV207", "CIV287", "CIV312", "CIV311", "CIV327", "CIV324", "CIV366", "CIV359", "CIV360", "CIV340", "CIV345", "CIV222", "CIV251"] },
  { codigo: "CIV290", nombre: "Práctica Profesional Supervisada", semestre: 10, requisitos: ["CIV210", "CIV309", "CIV280", "CIV207", "CIV287", "CIV312", "CIV311", "CIV327", "CIV324", "CIV366", "CIV359", "CIV360", "CIV340", "CIV345", "CIV222", "CIV251"] },

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
