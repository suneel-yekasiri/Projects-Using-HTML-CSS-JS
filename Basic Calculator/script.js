const calc = document.querySelector("#calc");
const t1 = calc.querySelector(".t1");
const b1 = calc.querySelectorAll("button");

b1.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let text = t1.textContent.trim();
    if (value === "clear") {
      t1.textContent = "0";
    } else if (value === "backspace") {
      t1.textContent = text.substring(0, text.length - 1);
    } else if (value === "=") {
      t1.textContent = eval(text);
    } else if (value === "+/-") {
      t1.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else {
      t1.textContent = text === "0" ? value : text + value;
    }
  });
});
