document.querySelector('div').addEventListener('click', function() {
    let current = document.getElementById('current').value;
    let next = parseInt(current) + 1;
    document.getElementById('show').textContent = 'Next number is ' + next;
});