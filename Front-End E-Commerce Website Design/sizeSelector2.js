function sizeSelectorK(value) {
	
	var availableNumbers =[
	[37,36,38],
	[36,40,39],
	[36,38,40],
	[37,38,39],
	[38,39,40],
	[36,38,40],
	[37,39,40],
	[37,39,38],
	[36,37,40],
	[37,38,39],
	[36,38,40],
	[38,39,40],
	];
	
	var i=0;
	var div = document.getElementById("rightMenu");
	
	for(i;i<availableNumbers.length;i++){
		
				
			if(availableNumbers[i][0] != value && availableNumbers[i][1] !=value && availableNumbers[i][2]!= value  ){
				div.childNodes[i+1].style.display='none';	

			}		
			
		
		
	}

	
	
}