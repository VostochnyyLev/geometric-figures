import formulaParallelogram from './lib/formula/formulaParallelogram';

import formulaRectangle from './lib/formula/formulaRectangle';

import formulaRhombus from './lib/formula/formulaRhombus';

import formulasSquare from './lib/formula/formulaSquare';

// Kvadrat
window.showResultInDomKvadrat = () => {
  document.getElementById('ploschadKvadrata').innerHTML = formulasSquare(
    document.getElementById('dlinaStoroniKvadrata').value,
  );
};
// end Kvadrat

// start Paralelogram
window.showResultInDomParalelograma = () => {
  const dlinaStoronyParalelograma = document.getElementById(
    'dlinaStoronyParalelograma',
  ).value;
  const dlinaVisotyParalelograma = document.getElementById(
    'dlinaVisotyParalelograma',
  ).value;

  document.getElementById('ploschadParalelograma').innerHTML = formulaParallelogram(dlinaStoronyParalelograma, dlinaVisotyParalelograma);
};
// end Paralelogram

// start Priamougolnik
window.showResultInDomPriamougolnika = () => {
  const pervayaStoronaPriamougolnika = document.getElementById(
    'pervayaStoronaPriamougolnika',
  ).value;
  const drugayaStoronaPriamougolnika = document.getElementById(
    'drugayaStoronaPriamougolnika',
  ).value;

  document.getElementById('ploschadPriamougolnika').innerHTML = formulaRectangle(
    pervayaStoronaPriamougolnika,
    drugayaStoronaPriamougolnika,
  );
};
// end Priamougolnik

// start Rhomb
window.showResultInDomRomba = () => {
  const dlinaStoronyRomba = document.getElementById('dlinaStoronyRomba').value;
  const dlinaVisotyRomba = document.getElementById('dlinaVisotyRomba').value;

  document.getElementById('ploschadRomba').innerHTML = formulaRhombus(
    dlinaStoronyRomba,
    dlinaVisotyRomba,
  );
};
// end Rhomb
