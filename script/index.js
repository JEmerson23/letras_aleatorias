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
  return "X"
}