import transpile from "ts-to-jsdoc";

const tsTextArea = document.getElementById("typescript");
const jsdocTextArea = document.getElementById("jsdoc");
const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", () => {
  try {
    const transpiledCode = transpile(tsTextArea.value);
    jsdocTextArea.value = transpiledCode;
  } catch (e) {
    console.log("error while transpiling", e);
  }
});
