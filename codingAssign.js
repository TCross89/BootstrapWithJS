function myFunction() {
    let firstN = document.getElementById('fname').value;
    let lastN = document.getElementById('lname').value;
    let age = document.getElementById('age').value;
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = firstN;
  cell2.innerHTML = lastN;
  cell3.innerHTML = age;
  
  document.getElementById('newName').reset();
}