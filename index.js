const textbox = document.getElementById("textbox");
const radio1 = document.getElementById("tofar");
const radio2 = document.getElementById("tocel");
const result = document.getElementById("result");

function convert() {
    let temp;
    if (radio1.checked) {
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    } else if (radio2.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + " °C";
    } else {
        result.textContent = "PLEASE SELECT A UNIT";
    }
    result.classList.remove('show');
    setTimeout(() => result.classList.add('show'), 250);
}
