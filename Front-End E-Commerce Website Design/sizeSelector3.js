function sizeSelectorC(value) {
	
	var availableNumbers =[
	[27,26,28],
	[26,30,29],
	[26,28,30],
	[27,28,29],
	[28,29,30],
	[26,28,30],
	[27,29,30],
	[27,29,28],
	[26,27,30],
	[27,28,29],
	[26,28,30],
	[28,29,30],
	];
	
	var i=0;
	var div = document.getElementById("rightMenu");
	
	for(i;i<availableNumbers.length;i++){
		
				
			if(availableNumbers[i][0] != value && availableNumbers[i][1] !=value && availableNumbers[i][2]!= value  ){
				div.childNodes[i+1].style.display='none';	

			}		
			
		
		
	}

	
	
}