document.querySelector('p').addEventListener('click', function() {
    let num = document.getElementById('num').value;
    let result = num * num;
    document.getElementById('result').textContent = num + ' x ' + num + ' = ' + result;
});