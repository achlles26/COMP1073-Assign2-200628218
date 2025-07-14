let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let select3 = document.getElementById("select3");

let output1 = document.querySelector("p");
let output2 = document.querySelector("h3");

let option1 = document.createElement("option")

option1.value = "small";
option1.textContent = "Small";

select1.appendChild(option1);

let option2 = document.createElement("option")

option2.value = "medium";
option2.textContent = "Medium";

select1.appendChild(option2);

let option3 = document.createElement("option");

option3.value = "large";
option3.textContent = "Large";

select1.appendChild(option3);

let option4 = document.createElement("option");

option4.value = "mango hurricane";
option4.textContent = "Mango Hurricane"

select2.appendChild(option4);

let option5 = document.createElement("option");

option5.value = "strawberry banana";
option5.textContent = "Strawberry Banana";

select2.appendChild(option5);

let option9 = document.createElement("option");

option9.value = "none";
option9.textContent = "None";

select3.appendChild(option9);

let option6 = document.createElement("option");

option6.value = "protein";
option6.textContent = "Protein";

select3.appendChild(option6);

let option7 = document.createElement("option");

option7.value = "calcium";
option7.textContent = "Calcium";

select3.appendChild(option7);

let option8 = document.createElement("option");

option8.value = "fibre";
option8.textContent = "Fibre";

select3.appendChild(option8);

let button = document.createElement("button");
button.textContent = "Order Now";
output1.appendChild(button);


class Smoothie {

    size;
    flavour;
    addon;

    constructor(size, flavour, addon){

        this.size = size;
        this.flavour = flavour;
        this.addon = addon;
    }
}

button.addEventListener("click", myFunction);

function myFunction(){

    let smoothie = new Smoothie(select1.value, select2.value, select3.value);

    console.log(smoothie);

    if (select3.value === "none") {

        output2.textContent = `Your order was a ${smoothie.size} ${smoothie.flavour} smoothie with no addons.`;
    } else {

        output2.textContent = `Your order was a ${smoothie.size} ${smoothie.flavour} smoothie with ${smoothie.addon}.`;
    }
}