document.getElementById('number').addEventListener('input', function() {
    let number = document.getElementById('number').value;
    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    for(let i = 1; i <= number; i++) {
        let li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
    }
});