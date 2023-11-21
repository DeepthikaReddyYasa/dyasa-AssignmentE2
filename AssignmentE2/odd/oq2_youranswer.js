const inputE1= document.querySelector('input');
inputE1.onChange = function(e){
    const value = ParseInt('input.value');
    for(i=0;i<=value;i++)
    {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.textContent = 'value';
      tr.appendChild(td);
      Document.querySelector('tbody').appendChild('tr');   
    }
}