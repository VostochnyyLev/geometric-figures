function showResultInDomKvadrat() {
  const square = resultSquare(squareCalc());
  document.getElementById("ploschadKvadrata").innerHTML = square;
}

function squareCalc() {
  const calc = formulasSquare(elDlinaStoroniKvadrata());
  return calc;
}

function elDlinaStoroniKvadrata() {
  const elSquare = document.getElementById("dlinaStoroniKvadrata").value;

  return elSquare;
}

function resultSquare(ploschadKvadrata) {
  return `${ploschadKvadrata}`;
}
//end square

//start rectangle

function showResultInDomPriamougolnika() {
  const rectangle = resultRectangle(rectangleCalc());

  document.getElementById("ploschadPriamougolnika").innerHTML = rectangle;
}

function rectangleCalc() {
  const calcRectangle = formulaRectangle(
    elPervayaStoronaPriamougolnika(),
    elDrugayaStoronaPriamougolnika()
  );
  return calcRectangle;
}

function elPervayaStoronaPriamougolnika() {
  const elOneRectangle = document.getElementById(
    "pervayaStoronaPriamougolnika"
  ).value;
  return elOneRectangle;
}

function elDrugayaStoronaPriamougolnika() {
  const elTwoRectangle = document.getElementById(
    "drugayaStoronaPriamougolnika"
  ).value;
  return elTwoRectangle;
}

function resultRectangle(ploschadPriamougolnika) {
  return `${ploschadPriamougolnika}`;
}
//end rectangle

//start Parallelogram

function showResultInDomParalelograma() {
  const parallelogram = resultParallelogram(parallelogramCalc());

  document.getElementById("ploschadParalelograma").innerHTML = parallelogram;
}

function parallelogramCalc() {
  const calcParellelogram = formulaParallelogram(
    elDlinaStoronyParalelograma(),
    elDlinaVisotyParalelograma()
  );
  return calcParellelogram;
}

function elDlinaStoronyParalelograma() {
  const elOneParallelogram = document.getElementById(
    "dlinaStoronyParalelograma"
  ).value;
  return elOneParallelogram;
}

function elDlinaVisotyParalelograma() {
  const elTwoParallelogram = document.getElementById(
    "dlinaVisotyParalelograma"
  ).value;
  return elTwoParallelogram;
}

function resultParallelogram(ploschadParalelograma) {
  return `${ploschadParalelograma}`;
}
//end Parallelogram

//start Rhombus

function showResultInDomRomba() {
  const rhombus = resultRhombus(rhombusCalc());

  document.getElementById("ploschadRomba").innerHTML = rhombus;
}

function rhombusCalc() {
  const calcRhombus = formulaRhombus(
    elDlinaStoronyRomba(),
    elDlinaVisotyRomba()
  );
  return calcRhombus;
}

function elDlinaStoronyRomba() {
  const elOneRhombus = document.getElementById("dlinaStoronyRomba").value;
  return elOneRhombus;
}

function elDlinaVisotyRomba() {
  const elTwoRhombus = document.getElementById("dlinaVisotyRomba").value;
  return elTwoRhombus;
}

function resultRhombus(ploschadRomba) {
  return `${ploschadRomba}`;
}
