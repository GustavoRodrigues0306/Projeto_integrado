
let emailInput = document.getElementById("email1");
let senhaInput = document.getElementById("senha1");

emailInput.addEventListener("input", (elemento) => {
    let value = elemento.target.value;
  
    if (value.length >= 6 && value.length <= 30) {
      emailInput.classList.remove("error");
      emailInput.classList.add("correct");
    } else if (value.length == 0) {
      emailInput.classList.remove("error");
      emailInput.classList.remove("correct");
    } else {
      emailInput.classList.remove("correct");
      emailInput.classList.add("error");
    }
  
    console.log(value.length);
  });
  

  senhaInput.addEventListener("input", (elemento) => {
    let value = elemento.target.value;
  
    if (value.length >= 6 && value.length <= 10) {
      senhaInput.classList.remove("error");
      senhaInput.classList.add("correct");
    } else if (value.length == 0) {
      senhaInput.classList.remove("error");
      senhaInput.classList.remove("correct");
    } else {
      senhaInput.classList.remove("correct");
      senhaInput.classList.add("error");
    }
  
    console.log(value.length);
  });

  
  