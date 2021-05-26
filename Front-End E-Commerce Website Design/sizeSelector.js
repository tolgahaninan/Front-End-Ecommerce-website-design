function sizeSelector(value) {
	
	var availableNumbers =[
	[40,41,42],
	[41,42,43],
	[40,44,43],
	[41,42,44],
	[40,42,43],
	[41,42,44],
	[41,42,44],
	[40,42,43],
	[40,41,44],
	[41,42,44],
	[40,42,44],
	[40,44,43],
	];
	
	var i=0;
	var div = document.getElementById("rightMenu");
	
	for(i;i<availableNumbers.length;i++){
		
				
			if(availableNumbers[i][0] != value && availableNumbers[i][1] !=value && availableNumbers[i][2]!= value  ){
				div.childNodes[i+1].style.display='none';	

			}		
			
		
		
	}

	
	
}