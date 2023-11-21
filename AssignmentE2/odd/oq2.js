document.getElementById('limit').addEventListener('input', function() {
    let limit = document.getElementById('limit').value;
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    for(let i = 1; i <= limit; i++) {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.textContent = i;
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
});