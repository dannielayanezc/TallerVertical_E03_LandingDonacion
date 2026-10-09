/* =========================================================
   Enderezando Curvas · Interacciones
   - Selector de monto: al elegir un botón verde se muestra
     la versión del diseño donde ese botón está seleccionado.
   ========================================================= */

// Versión del selector para cada botón (0 = $200, 1 = $500, 2 = $1,000, 3 = Otra cantidad)
const VERSIONES_MONTO = [
  'https://raw.githubusercontent.com/dannielayanezc/TallerVertical_E03/main/dinero1_ec.svg',
  'https://raw.githubusercontent.com/dannielayanezc/TallerVertical_E03/main/dinero2_ec.svg',
  'https://raw.githubusercontent.com/dannielayanezc/TallerVertical_E03/main/dinero3_ec.svg',
  'https://raw.githubusercontent.com/dannielayanezc/TallerVertical_E03/main/dinero4_ec.svg'
];

// Precarga las 4 versiones para que el cambio sea instantáneo
VERSIONES_MONTO.forEach(src => { const i = new Image(); i.src = src; });

const contenedorMontos = document.getElementById('montos');
const botonesMonto = contenedorMontos.querySelectorAll('.monto');

// Monto elegido (por si después quieres usarlo, p. ej. en el link de "Donar ahora")
let montoSeleccionado = '200';

function seleccionarMonto(indice) {
  contenedorMontos.style.setProperty('--img', `url('${VERSIONES_MONTO[indice]}')`);

  botonesMonto.forEach((boton, i) => {
    boton.setAttribute('aria-pressed', i === indice ? 'true' : 'false');
  });

  montoSeleccionado = botonesMonto[indice].dataset.monto;
}

botonesMonto.forEach(boton => {
  boton.addEventListener('click', () => {
    seleccionarMonto(Number(boton.dataset.index));
  });
});

// Estado inicial: $200 seleccionado (como en el diseño)
seleccionarMonto(0);
