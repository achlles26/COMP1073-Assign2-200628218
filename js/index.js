let select = document.querySelector("select");
let output = document.querySelector("p");

let option1 = document.createElement("option")

option1.value = "small";
option1.textContent = "Small";

select.appendChild(option1);

let option2 = document.createElement("option")

option2.value = "medium";
option2.textContent = "Medium";

select.appendChild(option2);

let option3 = document.createElement("option");

option3.value = "large";
option3.textContent = "Large";

select.appendChild(option3);