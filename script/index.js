window.addEventListener(
  "DOMContentLoaded", 
  () => {
    const $generateBtn = 
      document.querySelector("#generate_button"),
      $output = document.querySelector("#output_display");

    if($generateBtn && $output) {
      const $inputFirstLetter = 
        document.getElementById("input_first_letter"),
      $inputLastLetter = document.getElementById("input_last_letter");

      $generateBtn.addEventListener(
        "click", 
        () => {
          $output.innerText = 
            generate($inputFirstLetter.value[0], $inputLastLetter.value[0]);
        }
      );
    }
  }
);

function generate(from, to) {
  const letters = ((alphabet) => {
    const i1 = alphabet.indexOf(from),
    i2 = alphabet.indexOf(to);

    if(i1 != -1 && i2 != -1) {
      return i1 - i2 < 0 ? alphabet.slice(i1, i2+1) : alphabet.slice(i2, i1+1);
    } 

    return alphabet;
  })("abcdefghijklmnopqrstuvwxyz"),
  LETTERS_LEN = letters.length;

  let index, letter, BREAKER = 0;

  while(typeof letter !== "string") {
    index = parseInt(Math.random()*LETTERS_LEN);
    letter = letters[index];

    if(generate.__hist__ === letter) {
      letter = null;
      continue;
    } else {
      generate.__hist__ = letter;
    }

    if(BREAKER > 999) break;

    BREAKER++;
  }

  return letter;
}