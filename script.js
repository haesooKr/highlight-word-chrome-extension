let reg1;
let reg2;

let word = prompt("What word you want to highlight?");
regSet(word);

function regSet(text){
  reg1 = new RegExp(text, "gi");
  reg2 = new RegExp(`(${text})`, "gi")
  highlightText(document.body);
}

function highlightText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(highlightText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(reg1)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        reg2,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
  }
}

