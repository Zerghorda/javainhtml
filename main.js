Window.addEventListener("load", init);
function init() {
  const tartalomElem = document.getElementById("tartalom");
  const tartalomElemEz = document.querySelectorAll(".tart");
  console.log(tartalomElemEz);
  const etelLista = ["Mákosguba", "gordon blue"];
  etelekKiirasa(etelLista, tartalomElemEz);
}
function etelekKiirasa(etelLista, tartalomElemEz) {
  tartalomElemEz[0].innerHTML = "<ul> </ul>";
  const ulElem = document.querySelectorAll(".tartalom ul")[0];
  for (let index = 0; index < etelLista.lenght; index++) {
    let etel = etelLista[index];
    ulElem.innerHTML += "<li>" + etel + "</li>";
  }
}
