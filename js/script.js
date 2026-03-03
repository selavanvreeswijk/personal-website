const inputs = document.querySelectorAll("input");

// Bron: uitleg + workshop van Victor
inputs.forEach(input => {

  input.addEventListener("blur", () => {

    const errorMessage = input.parentElement.querySelector(".error-message");

    if (!input.checkValidity()) {

        input.classList.remove("success");
        input.classList.add("error");

        errorMessage.textContent = input.validationMessage;
         errorMessage.style.display = "block";

    } else {

        input.classList.remove("error");
        input.classList.add("success");

        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    }
  });
});

// Ipv novalidate op de html te gebruiken, voorkomt browser pop-up WERKT NOG NIET

// document.querySelectorAll("input").forEach(input => {

//   input.addEventListener("invalid", function(event){
//     event.preventDefault();
//   });

// });

// document.querySelector("form").addEventListener("submit", function(e) {

//   if (!this.checkValidity()) {
//     e.preventDefault();
//   }

// });