const btnRandom = document.querySelector(".btn_random");
const btnReset = document.querySelector(".btn_reset");
const outputElement = document.getElementById("output");
const inputContainer = document.getElementById("inputContainer");
const messageElement = document.getElementById("message"); // Asegúrate de que existe en tu HTML
const triesElement = document.getElementById("tries");

const diccionario = [
  "agente",
  "alcalo",
  "ballet",
  "boceto",
  "cactus",
  "cierre",
  "dorado",
  "editor",
  "fuerte",
  "gracia",
  "hablar",
  "lentes",
  "morado",
  "planta",
  "quinto",
  "recibo",
  "saludo",
  "silla",
  "temor",
  "vacuna",
  "verde",
  "vocal",
  "brillo",
  "cielo",
  "genial",
  "marcar",
  "pelota",
  "señal",
  "ajuste",
  "bocado",
  "correr",
  "dientes",
  "espera",
  "fuente",
  "jovenes",
  "luzida",
  "nacido",
  "pintar",
  "recuer",
  "saliva",
  "tardea",
  "vuelve",
  "zumbir",
];

let originalWord = ""; // Variable para almacenar la palabra original
let shuffledText = ""; // Variable para almacenar la palabra desordenada
let totalTries = 0;
const maxTries = 5;

window.addEventListener("load", (event) => {
  Tries();
  console.log(totalTries);
  
  // triesElement.textContent = `Tries(${totalTries}/${maxTries}):`;
});

btnRandom.addEventListener("click", function () {
  function generateAndShuffle() {
    originalWord = diccionario[Math.floor(Math.random() * diccionario.length)];
    shuffledText = originalWord
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    return shuffledText;
  }

  shuffledText = generateAndShuffle();

  // Clear previous inputs
  inputContainer.innerHTML = "";

  // Create new input fields
  shuffledText.split("").forEach((char, index) => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = ""; // Optional: Set initial value if needed
    input.className = "input_value"; // Add the class here
    input.maxLength = 1;
    input.dataset.index = index;
    input.addEventListener("input", handleInput);
    input.addEventListener("keydown", handleKeyDown);
    inputContainer.appendChild(input);
  });

  outputElement.textContent = shuffledText;
});

function generateRandom() {
  const indice = Math.floor(Math.random() * diccionario.length);
  return diccionario[indice];
}

btnReset.addEventListener("click", function () {
  shuffledText = "";
  originalWord = "";
  outputElement.textContent = "";
  inputContainer.innerHTML = ""; // Clear the input fields
  totalTries = "";
});

function handleInput(event) {
  const input = event.target;
  const inputs = Array.from(inputContainer.querySelectorAll(".input_value"));
  const index = inputs.indexOf(input);

  // Move focus to the next input when a letter is typed
  if (input.value.length === 1 && index < inputs.length - 1) {
    inputs[index + 1].focus();
  }

  // Move focus to the previous input if the input is empty and not the first one
  if (input.value.length === 0 && index > 0) {
    inputs[index - 1].focus();
  }

  validateInput();
}

function handleKeyDown(event) {
  const input = event.target;
  const inputs = Array.from(inputContainer.querySelectorAll(".input_value"));
  const index = inputs.indexOf(input);

  // Allow backspace navigation
  if (event.key === "Backspace") {
    if (input.value.length === 0 && index > 0) {
      inputs[index - 1].focus();
    }
  }
}

function validateInput() {
  const inputs = Array.from(inputContainer.querySelectorAll(".input_value"));
  const userInput = inputs.map((input) => input.value).join("");

  if (userInput.length === originalWord.length) {
    if (userInput === originalWord) {
      // messageElement.textContent = "¡Correcto!";
      // messageElement.style.color = "green";
      alert("Correcto");
    } else {
      totalTries += totalTries
    }
  }
}


function Tries(){
  console.log(totalTries);
  
  // triesElement.textContent = `Tries(${totalTries}/${maxTries}):`;
}