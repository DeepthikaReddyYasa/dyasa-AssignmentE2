const inputE1 = document.quertSelector('input');
const divE1 = document.querySelectorAll('div');
const showE1= document.getElementById('show');
divE1.onClick = function(e) {
    const value = parseInt('inputE1.value');
    showE1.textContent='${value} + 1 = ${value + 1}';
}