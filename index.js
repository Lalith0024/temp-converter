const textbox = document.getElementById("textbox");
const radio1 = document.getElementById("tofar");
const radio2 = document.getElementById("tocel");
const result = document.getElementById("result");

function convert() {
    let temp;
    
    if (textbox.value === "") {
        result.textContent = "Please enter some value 🤓";
        result.classList.remove('show');
        setTimeout(() => result.classList.add('show'), 250);
        return; // Exit the function early if no value is entered
    }
    
    if (radio1.checked) {
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        if (temp > 68){
            result.textContent = temp.toFixed(1) + " °F" + "🥵";
            
        }
        else{
            result.textContent = temp.toFixed(1) + " °F" + "🥶";
        }
    } else if (radio2.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        if (temp > 68){
            result.textContent = temp.toFixed(1) + " °C" + "🥵";
        }
        else{
            result.textContent = temp.toFixed(1) + " °C" + "🥶";
        }
    } else {
        result.textContent = "PLEASE SELECT A UNIT 🥹";
    }
    result.classList.remove('show');
    setTimeout(() => result.classList.add('show'), 250);
    if (isNaN(textbox.value)){
        result.textContent = "PLEASE ENTER A VALID INTEGER ☝️"
        
    }
}

