const textbox = document.getElementById("textbox");
const radio1 = document.getElementById("tofar");
const radio2 = document.getElementById("tocel");
const result = document.getElementById("result");
const placeholderMsg = document.querySelector("p[style]"); // "Awaiting input..." line

function convert() {
    const value = textbox.value.trim();
    const num = Number(value);

    if (placeholderMsg) placeholderMsg.style.display = "none"; // Hide placeholder

    if (value === "") {
        showResult("Please enter some value 🤓");
        return;
    }

    if (isNaN(num)) {
        showResult("PLEASE ENTER A VALID INTEGER ☝️");
        return;
    }

    let converted = 0;
    let emoji = "";

    if (radio1.checked) {
        converted = num * 9 / 5 + 32;
        emoji = converted > 68 ? "🥵" : "🥶";
        showResult(`${converted.toFixed(1)} °F ${emoji}`);
    } else if (radio2.checked) {
        converted = (num - 32) * 5 / 9;
        emoji = converted > 20 ? "" : "🥶";
        showResult(`${converted.toFixed(1)} °C ${emoji}`);
    } else {
        showResult("PLEASE SELECT A UNIT 🥹");
    }
}

function showResult(text) {
    result.textContent = text;
    result.classList.remove("show");
    void result.offsetWidth; // Restart animation
    result.classList.add("show");
}
