window.addEventListener(
  "DOMContentLoaded", 
  () => {
    // esperar todo o DOM carregar
    const $generateBtn = 
      document.querySelector("#generate_button"),
      $output = document.querySelector("#output_display");

    if($generateBtn && $output) {
      const $inputFirstLetter = 
        document.getElementById("input_first_letter"),
      $inputLastLetter = document.getElementById("input_last_letter");

      $generateBtn.addEventListener(
        "click", $inputFirstLetter && $inputLastLetter ? 
        () => {
          console.log($inputFirstLetter.value[0], 
            $inputLastLetter.value[0])
          $output.innerText = 
            generate(splitLetters(
              $inputFirstLetter.value[0], 
              $inputLastLetter.value[0]
            ));
        } :
        () => {$output.innerHTML = generate(splitLetters())}
      );

    } else {
      console.error(
        "não encontrado elemento com id '$generate_button' \
        e/ou elemento com id '$output_display'..."
      );
    }
  }
);

function generate(lettersGroup) {
  // gerar letra aleatória
  console.log(lettersGroup)
  if(typeof lettersGroup !== "string") {
    throw new TypeError("esperado uma stringargumento");
  }

  const LETTERS_LEN = lettersGroup.length;

  let index, letter, BREAKER = 0;
  
  do {
    index = parseInt(Math.random()*LETTERS_LEN);
    letter = lettersGroup[index];

    if(generate.__hist__ === letter) {
      letter = null;
      continue;
    } else {
      generate.__hist__ = letter;
    }

    if(BREAKER > 999) break;

    BREAKER++;
  } while(typeof letter !== "string");

  return letter;
}

function splitLetters(start, end) {
  // retornar grupo de letras de start até end
  if(
    (typeof start !== "string" && start != undefined) || 
    (typeof end !== "string" && end != undefined)
  ) {
    throw new TypeError("esperado apenas strings como argumentos");
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz",
  alphabetRE = /[a-z]/;

  if(
    (alphabetRE.test(start) && alphabetRE.test(end)) && 
    (start != undefined && end != undefined)
  ) {
    const i1 = alphabet.indexOf(start.toLowerCase()),
    i2 = alphabet.indexOf(end.toLowerCase());

    if(i1 != -1 && i2 != -1) {
      return (
        i1 - i2 < 0 ?
          alphabet.slice(i1, i2+1) : alphabet.slice(i2, i1+1)
      );
    }
  }

  return alphabet;
}