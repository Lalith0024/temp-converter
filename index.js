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
        
        showResult(`The converted value for ${num}°C is ${converted.toFixed(1)} °F`);
    } else if (radio2.checked) {
        converted = (num - 32) * 5 / 9;
        
        showResult(`The converted value for ${num}°F is ${converted.toFixed(1)} °C`);
    } else {
        showResult("PLEASE SELECT A UNIT 🥹");
    }
}

function showResult(text) {
    result.textContent = text;
    result.classList.remove("show");
    void result.offsetWidth; 
    result.classList.add("show");
}
// 3D tilt effect
const mainBox = document.querySelector("main");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    mainBox.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
    mainBox.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
