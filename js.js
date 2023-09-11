function checarAltura() {
    var input11 = document.getElementById("input1");
    var input22 = document.getElementById("input2");
    var input33 = document.getElementById("input3");
  
    var altura1 = parseFloat(input11.value);
    var altura2 = parseFloat(input22.value);
    var altura3 = parseFloat(input33.value);
  
    var i = 0;
    var homens = 0;
    var mulheres = 0;
  
    while (i <= 14) {
      genero = prompt("Informe seu genero, homem = 1, mulher = 2: ");
      i += 1;
  
      if (genero == 1) {
        homens += 1;
      } else {
        mulheres += 1;
      }
  
      if (mulheres > 1) {
        console.log("Entraram", mulheres, "mulheres");
      } else if (mulheres == 1) {
        console.log("Entrou uma mulher");
      } else {
        console.log("Não entraram mulheres");
      }
    }
  
    function maior() {
      var max = altura1;
  
      if (altura2 > max) {
        max = altura2;
      }
      if (altura3 > max) {
        max = altura3;
      }
  
      return max;
    }
  
    function menor() {
      var min = altura1;
  
      if (altura2 < min) {
        min = altura2;
      }
      if (altura3 < min) {
        min = altura3;
      }
  
      return min;
    }
  
    var maior1 = maior(altura1, altura2, altura3);
    var menor1 = menor(altura1, altura2, altura3);
  
    console.log("o maior tem: ", maior1);
    console.log("O menor tem: ", menor1);
    console.log("A média de altura é:", (altura1 + altura2 + altura3) / 3);
  }
  
  document.getElementById("butao").onclick = checarAltura;
  