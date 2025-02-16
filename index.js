const textbox = document.getElementById("textbox")
const radio1 = document.getElementById("tofar")
const radio2 = document.getElementById("tocel")
const result = document.getElementById("result")

let temp;

function convert(){
    if(tofar.checked){
        temp = Number(textbox.value)
        temp = temp*9/5+32
        result.textContent = temp.toFixed(1) + "F"
    }

    else if(tocel.checked){
        temp = Number(textbox.value)
        temp = temp*9/5+32
        result.textContent = temp + "C"
        
    }
    else{
        result.textContent = "PLEASE SELECT A UNIT"
    }
}