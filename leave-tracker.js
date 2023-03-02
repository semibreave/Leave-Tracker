function getHeaderArray(){
	
	const headerArray =  ["Date", "DOW", "Apply", "Balance"];
	
	return headerArray;

}

function getYearlyWorkingDates(startDate) {
  const datesArray = [startDate.getDate() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getFullYear()];
  
  for (let i = 1; i < 365; i++) {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + i);
    datesArray.push(newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear());
  }

  return datesArray;
}

function getYearlyWorkingDays(startDate) {
  
  const daysArray = [startDate.toDateString().split(' ')[0]];

  for (let i = 1; i < 365; i++) {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + i);
    daysArray.push(newDate.toDateString().split(' ')[0]);
  }

  return daysArray;
  
  
}

function getLeavesArray() {
   
  //all elements is 0 value at initialization.
  //element will be change to 1 whenever leave is applied
  //each element represent the yearly working days	
  
  const arr = new Array(365).fill(0);
  return arr;

}

function getBalanceArray(entitlement,leavesArray){
	
	
	const dailyEarning = entitlement/365;
	
	const balanceArray = [];
	
	var balance = 0;
	
	for(let i = 0 ; i < leavesArray.length; i++){
		
		balance += dailyEarning - leavesArray[i];
			
		//document.write(balance)
		
		balanceArray.push(balance);
	}
	
	return balanceArray;
}

function changeLeaveArrayElementTo1(arr, elementNumber) {
  
	arr[elementNumber] = 1;
  
	return arr;
}

function populateTable(headerArray, datesArray, daysArray, leavesArray, balanceArray) {
  // Get a reference to the table element in the HTML document
  const table = document.getElementById("leave-table");
  table.setAttribute("border", "1"); // add border to table

  // Create a header row and add it to the table
  const headerRow = document.createElement("tr");
  headerArray.forEach((headerText) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerCell.style.border = "1px solid black"; // add border to header cells
    headerCell.style.textAlign = "center"; // center header text
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  // Create rows for each subsequent array element and add them to the table
  for (let i = 0; i < datesArray.length; i++) {
    const dataRow = document.createElement("tr");
    const dateCell = document.createElement("td");
    dateCell.textContent = datesArray[i];
    dateCell.style.border = "1px solid black"; // add border to date cells
    dateCell.style.textAlign = "center"; // center date text
    dataRow.appendChild(dateCell);
    const dayCell = document.createElement("td");
    dayCell.textContent = daysArray[i];
    dayCell.style.border = "1px solid black"; // add border to day cells
    dayCell.style.textAlign = "center"; // center day text
    dataRow.appendChild(dayCell);
    const leaveCell = document.createElement("td");
    leaveCell.textContent = leavesArray[i];
    leaveCell.style.border = "1px solid black"; // add border to leave cells
    leaveCell.style.textAlign = "center"; // center leave text
    dataRow.appendChild(leaveCell);
    const balanceCell = document.createElement("td");
    balanceCell.textContent = balanceArray[i];
    balanceCell.style.border = "1px solid black"; // add border to balance cells
    balanceCell.style.textAlign = "center"; // center balance text
    dataRow.appendChild(balanceCell);
    table.appendChild(dataRow);
  }
}
