let duvidaInput = document.getElementById("duvida");
let duvidaLabel = document.querySelector('label[for="duvi"]');

duvidaInput.addEventListener("input", (elemento) => {
    let value = elemento.target.value;
  
    if (value.length >= 6 && value.length <= 40) {
      duvidaInput.classList.remove("error");
      duvidaInput.classList.add("correct");
    } else if (value.length == 0) {
      duvidaInput.classList.remove("error");
      duvidaInput.classList.remove("correct");
    } else {
      duvidaInput.classList.remove("correct");
      duvidaInput.classList.add("error");
    }
  
    console.log(value.length);
  });
  