let input = document.querySelector("input");
function display(char) {
    input.value += char;
}

//result
function result() {
    input.value = eval(input.value);
}

//clear
function remove() {
    input.value="";
}

//backspace
function back(char) {
    input.value = input.value.slice(0,-1)
}
