function typeSelectorEK(value){
  //var content = ["klasik","klasik","klasik","klasik","klasik","klasik","klasik","günlük","günlük","günlük","günlük","klasik"];
	var content = [1,1,1,1,1,1,1,2,2,2,2,1];
	
	var div = document.getElementById("rightMenu");
	var i=1;
	
	for(i;i<content.length+1;i++){
		
		if (value==1 && content[i-1]!=1){
			div.childNodes[i].style.display='none';
			
		}
		
		else if (value==2 && content[i-1]!=2) {
			div.childNodes[i].style.display='none';
			
		}
		
	}	
}	



