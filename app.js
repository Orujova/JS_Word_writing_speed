const input = document.querySelector("input");
const results = document.querySelector(".result");
const h1 = document.createElement("h1");
let sentence = "We love programming!";
let intervalId;

function typeSentence() {
  let i = 0;
  h1.innerHTML = "";
  const speed = parseInt(input.value) === 1 ? 100 : parseInt(input.value);
  intervalId = setInterval(() => {
    if (i >= sentence.length) {
      clearInterval(intervalId);
      return;
    }
    const loop = () => {
      h1.textContent += sentence.charAt(i);
      i++;
    };
    loop();
    if (i === sentence.length) {
      h1.innerHTML = "";
      i = 0;
      loop();
    }
  }, speed);
}

input.addEventListener("input", () => {
  clearInterval(intervalId);
  typeSentence();
});

results.append(h1);
typeSentence();
