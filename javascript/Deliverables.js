var count = 1;
function addRow(){

    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var ID = row.insertCell(0);
    var Name = row.insertCell(1);
    var Description = row.insertCell(2);
    var DueDate = row.insertCell(3);
    var Requirements = row.insertCell(4);
    var Tasks = row.insertCell(5);

    ID.innerHTML = "D-"+count;
    Name.innerHTML = "";
    Description.innerHTML = "";
    DueDate.innerHTML = ""
    Requirements.innerHTML = "";
    Tasks.innerHTML = "";

    

    count++;
}

function deleteRow() {
    var table = document.getElementById("myTable");
    var row = table.deleteRow(-1);
    count--;
}