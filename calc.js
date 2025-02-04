let inputText = document.getElementById("input");
let list = document.getElementsByClassName("item");
let btnC = document.getElementById("cc");

btnC.onclick = () => {
    inputText.value = "";
};

for (let i = 0; i < list.length; i++) {
    list[i].onclick = () => {
        inputText.value += list[i].textContent;
    };
}

let btnRes = document.getElementById("res");

btnRes.onclick = () => {
    inputText.value = eval(inputText.value);
};
