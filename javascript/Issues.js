var count =1;
function addRow(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    var cell13 = row.insertCell(12);
    var cell14 = row.insertCell(13);
   


    cell1.innerHTML = "I-"+count;
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    cell10.innerHTML = "";
    cell11.innerHTML = "";
    cell12.innerHTML = "";
    cell13.innerHTML = "";
    cell14.innerHTML = "";

    count++;
    
}

function deleteRow() {
    var table = document.getElementById("myTable");
    var row = table.deleteRow(-1);
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    count--;
    
}







