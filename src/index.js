function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fb9717fd9t00e1ao1ceeb9082c6f7345";
  let context =
    "You are an expert in hiking quotes and love to craft inspiring short quotes. Your mission is to generate a 4-line hiking quote in basic HTML, separating each line with a <br />. Ensure the quote follows the user's instructions. Do not include a title. Sign the quote with 'SheCodes AI' inside a <strong> element at the end, NOT at the beginning.";
  let prompt = `User instructions: Enter the topic of a hiking quote ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a hiking quote about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
