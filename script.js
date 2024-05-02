const inputString = prompt(
  "Enter a word with no special chars. Just letters and numbers :"
);

const inputArray = inputString.split(""); // splint string into array

let reversedArray = [];
function reverser(inArray) {
  for (let i = inArray.length - 1; i >= 0; i--) {
    reversedArray.push(inArray[i]);
  }
  return reversedArray;
}
document.getElementById("h3-el").innerText = `Your stirng is: ${inputString}
Your reversed stirng is: ${reverser(inputString).toString().replace(/,/g, "")}`; // remove commas from output
