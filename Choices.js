function addCost() {
    let valu1 = document.getElementById("value1").value;
    let valu2 = parseInt(document.getElementById("value2").value);
    let price;
    
    let tabl = document.getElementById("abed1");
    let name1 = "The first ladies";
    let name2 = "The wager";
    let name3 = "Bad summer people";
    let name4 = "Small Mercies";
    let name5 = "Happy place";
    let name6 = "The covenant water";
  
    if (valu1 == name1) {
     price = 10;
    } else if (valu1 == name2) {
      price = 13;
    } else if (valu1 == name3) {
      price = 8;
    } else if (valu1 == name4) {
      price = 9;
    } else if (valu1 == name5) {
      price = 15;
    } else if (valu1 == name6) {
      price = 5;
    } else {
      alert("Invalid book name!");
      return;
    }
  
    let totalCost = price * valu2;
  
    let tr = document.createElement("tr");
  
    let td1 = document.createElement("td");
    td1.innerHTML = valu1;
    tr.appendChild(td1);
  
    let td2 = document.createElement("td");
    td2.innerHTML = "$" + price;
    tr.appendChild(td2);
  
    let td3 = document.createElement("td");
    td3.innerHTML = valu2;
    tr.appendChild(td3);
  
    let td4 = document.createElement("td");
    td4.innerHTML = "$" + totalCost;
    tr.appendChild(td4);
  
    let td5 = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class","btn btn-primary");
    deleteButton.onclick = function() {
      tabl.deleteRow(tr.rowIndex);
      calculateTotal();
    };
    td5.appendChild(deleteButton);
    tr.appendChild(td5);
  
    tabl.appendChild(tr);
    
  
    calculateTotal();
    
    
  }

  function calculateTotal() {
    let tabl = document.getElementById("abed1");
    let rows = tabl.rows;
    let total = 0;
    for (let i = 1; i < rows.length; i++) { 
      let cells = rows[i].cells;
      let priceCell = cells[3].innerHTML;
      total += parseFloat(priceCell.substring(1)); 

    }
    
    
    document.getElementById("totalPrice").innerHTML = "Total Price: $" + total;
  }

  