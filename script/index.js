window.addEventListener(
  "DOMContentLoaded", 
  () => {
    const $generateBtn = 
      document.querySelector("#generate_button"),
      $output = document.querySelector("#output_display");

    if($generateBtn && $output) {
      $generateBtn.addEventListener(
        "click", 
        () => {
          $output.innerText = generate();
        }
      );
    }
  }
);

function generate() {
  const letters = "abcdefghijklmnopqrstuvwxyz",
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