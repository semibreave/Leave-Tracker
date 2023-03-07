function getMonthInfo(year, month) {
  // create a new Date object with the year and month
  const date = new Date(year, month - 1, 1);

  // get the number of days in the month
  const daysInMonth = new Date(year, month, 0).getDate();

  // get the day of the week the 1st falls on (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = date.getDay();

  return {
    daysInMonth,
    firstDayOfWeek
  };
}

function populateCalendar(year,month) {
  
  const table = document.getElementById("calendar-table");
  const thead = document.getElementById("calendar-thead");
  const headerRow = document.createElement("tr");
  
  /////////////////////////////////////////////////////////// First Row ///////////////////////////////////////////////////////////////
  
  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
	daysArray.forEach((headerText) => {
	const headerCell = document.createElement("th");
	headerCell.textContent = headerText;
	headerRow.appendChild(headerCell);
	});
	thead.appendChild(headerRow);
	
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
  //////////////////////////////////////////// ///////////Subsequent rows ///////////////////////////////////////////////////////////////	
	
	const daysInMonth = (getMonthInfo(year,month)).daysInMonth;
	const firstDayOfWeek = (getMonthInfo(year,month)).firstDayOfWeek;
	
	var dataRow = document.createElement("tr");
	
	if(firstDayOfWeek != 0){
		
		for(let i = 0; i < firstDayOfWeek; i++){
			
			const dateCell = document.createElement("td");
			dateCell.textContent = "";
			dataRow.appendChild(dateCell);
		}
	}
	
	for (let i = 1; i <= daysInMonth; i++){
		
		const dateCell = document.createElement("td");
		dateCell.textContent = i;
		dataRow.appendChild(dateCell);
		
		if(dataRow.cells.length == 7){
			
			table.appendChild(dataRow);
			dataRow = document.createElement("tr");
			
		}
	}
	
	table.appendChild(dataRow);	
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
}

