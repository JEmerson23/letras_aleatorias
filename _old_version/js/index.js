const saida = document.getElementById('saida');
const Pri_l = document.getElementById('pletra'), Seg_l = document.getElementById('sletra');
const btn_Gerar = document.getElementById('btn_gerar');

//P código abaixo é a função principal
function letraRandom(la, lz, ul = "up") { //gera uma letra aleatória entre as selecionadas 
  function aleatorio(min, max) { //Gera um número aleatorio entre os 2 escolhidos
    min = Math.ceil(min); max = Math.floor(max); return Math.floor(Math.random()*(max-min+1))+min;
  }let alfabeto = ["a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"]; let a,
  z; if (la.length > 0 && lz.length > 0) {
    if (isNaN(la) === false) {
      a = "a";
    } else {
      a = la.toLowerCase();
    }if (isNaN(lz) === false) {
      z = "z";
    } else {
      z = lz.toLowerCase();
    }let pletra = alfabeto.indexOf(a),
    uletra = alfabeto.indexOf(z); let letra_esc = alfabeto[aleatorio(pletra, uletra)]; switch (ul) {
      case 'up': return letra_esc.toUpperCase(); break;
      case 'low': return letra_esc.toLowerCase(); break;
      default: console.error("Erro na função letraRandom  parâmetro três aceita apenas [up ou low]...");
      }} else {
      console.error("Parâmetro(s) da função letraRandom estão vazio(s)"); return "0";
    }}

  btn_Gerar.onclick = function () {
    saida.innerText = letraRandom(Pri_l.value, Seg_l.value)
   }