
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const nameForm = document.querySelector("#formName");
const nameResult = document.querySelector("#resultName");


function functionName(event) {
  event.preventDefault();
  var myFirstName = firstNameInput.value;
  var myLastName = lastNameInput.value;
  resultName.innerText = "Welcome " + myFirstName + " " + myLastName + "! How are you?" ;



}

formName.onsubmit = functionName;


//// ----------------------------




