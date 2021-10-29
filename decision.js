function choose() {
var form_string = document.getElementById("input1").value
const form_list = form_string.split(",")
const choice = form_list[Math.floor(Math.random() * form_list.length)];
document.getElementById("input2").value = choice
}

function reset(){
document.getElementById("input2").value = "";
document.getElementById("input1").value = "";
}