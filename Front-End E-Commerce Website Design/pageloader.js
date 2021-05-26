function contentLoader(value){
	var content = ["Firma Adı : Moda Kundura", "Telefon (Dahili): (0464) 212 19 91", "Telefon (Harici): 05438542161","E-mail : modakundura53@gmail.com","Adres: Yeniköy, Bakırcılar Cd. 7b, 53100 Rize Merkez/Rize","Posta Kodu : 53950","Ülke : Türkiye ","Şehir : Rize","İlçe: Merkez"];
	var output="";
	
	var i=0;
	for(i;i<content.length;i++){
	var el = document.createElement("p");
	var t = document.createTextNode(content[i]);
	el.appendChild(t);
	value.appendChild(el);
	}
}

function contentLoader2(value){
	var content = "Lorem ipsum dolor sit amet, option forensibus abhorreant usu et. Nam an iriure interesset, no impedit rationibus elaboraret quo. Aperiri ancillae pertinax in nam. Nam fugit suavitate id. No sit consul oportere assentior, aeterno vulputate elaboraret mea in.Ad quo paulo tritani accumsan, vel ex essent impetus suscipiantur. Euismod electram mea ne, id quo tritani omnesque. Sea cu reque munere delectus, ex dicant commodo vis, brute tincidunt ne vis. Sea ut novum causae, viderer dolorum deleniti te mea. At his latine consequat vituperatoribus, nam mazim eirmod eu, te inani urbanitas intellegam sed. At dolor vituperata cum, mea ea atomorum definitiones.Ne augue nostrud philosophia eam. His eu nulla decore melius, eam ignota regione diceret et. Epicurei imperdiet ex cum. Vim doming nonumes argumentum id. Ea pro accusam salutandi, usu ad vivendo adipisci tincidunt. Ei legere maiestatis contentiones mei, sea tota vidisse ut.Quot velit mentitum ius ei, his id postea voluptatum, duo brute ornatus patrioque ad. His id volumus vivendum, cum ne congue aliquid complectitur. Te usu dictas omittantur concludaturque, sapientem scribentur et has, dico zril ex eos. Suas facilis pro ea, ea option oportere instructior ius. Eu habeo possit scripta pro, ea nam populo everti singulis, ut officiis iudicabit referrentur sed.Ullum exerci adipiscing duo in, id usu eligendi voluptatum argumentum. Labores tacimates ad sea, quod aliquid debitis ea sit. Sed in nisl ubique, no regione epicuri nostrum sit, ne usu nisl dolore. Eu mei erant iusto hendrerit, sit ferri elitr verterem cu, ex his vivendo appareat suavitate."
	var output="";
	
	
	var el = document.createElement("p");
	var t = document.createTextNode(content);
	el.appendChild(t);
	value.appendChild(el);
	
}

function contentLoader3(value){
	var content = "Lorem ipsum dolor sit amet, option forensibus abhorreant usu et. Nam an iriure interesset, no impedit rationibus elaboraret quo. Aperiri ancillae pertinax in nam. Nam fugit suavitate id. No sit consul oportere assentior, aeterno vulputate elaboraret mea in.Ad quo paulo tritani accumsan, vel ex essent impetus suscipiantur. Euismod electram mea ne, id quo tritani omnesque. Sea cu reque munere delectus, ex dicant commodo vis, brute tincidunt ne vis. Sea ut novum causae, viderer dolorum deleniti te mea. At his latine consequat vituperatoribus, nam mazim eirmod eu, te inani urbanitas intellegam sed. At dolor vituperata cum, mea ea atomorum definitiones.Ne augue nostrud philosophia eam. His eu nulla decore melius, eam ignota regione diceret et. Epicurei imperdiet ex cum. Vim doming nonumes argumentum id. Ea pro accusam salutandi, usu ad vivendo adipisci tincidunt. Ei legere maiestatis contentiones mei, sea tota vidisse ut.Quot velit mentitum ius ei, his id postea voluptatum, duo brute ornatus patrioque ad. His id volumus vivendum, cum ne congue aliquid complectitur. Te usu dictas omittantur concludaturque, sapientem scribentur et has, dico zril ex eos. Suas facilis pro ea, ea option oportere instructior ius. Eu habeo possit scripta pro, ea nam populo everti singulis, ut officiis iudicabit referrentur sed.Ullum exerci adipiscing duo in, id usu eligendi voluptatum argumentum. Labores tacimates ad sea, quod aliquid debitis ea sit. Sed in nisl ubique, no regione epicuri nostrum sit, ne usu nisl dolore. Eu mei erant iusto hendrerit, sit ferri elitr verterem cu, ex his vivendo appareat suavitate."
	var output="";
	
	
	var el = document.createElement("p");
	var t = document.createTextNode(content);
	el.appendChild(t);
	value.appendChild(el);
}

function contentLoaderE(value){
	var content = ["ErkekUrun/e1.jpg","ErkekUrun/e2.jpg","ErkekUrun/e3.jpg","ErkekUrun/e4.jpg","ErkekUrun/e5.jpg","ErkekUrun/e6.jpg","ErkekUrun/e7.jpg","ErkekUrun/e8.jpg","ErkekUrun/e9.jpg","ErkekUrun/e10.jpg","ErkekUrun/ee11.jpg","ErkekUrun/ee12.jpg",];
	var content2 = ["ErkekUrun/e11.jpg","ErkekUrun/e22.jpg","ErkekUrun/e33.jpg","ErkekUrun/e44.jpg","ErkekUrun/e55.jpg","ErkekUrun/e66.jpg","ErkekUrun/e77.jpg","ErkekUrun/e88.jpg","ErkekUrun/e99.jpg","ErkekUrun/e1010.jpg","ErkekUrun/ee1111.jpg","ErkekUrun/ee1212.jpg",];
	var pricesE = [550,500,450,400,230,390,410,230,170,690,510,230];
	var i=0;
		
		for(i;i<content.length;i++){
			var x= document.createElement("div");
			var h= document.createElement("div");
			var y = document.createElement("img");
			var o = document.createElement("img");
			var a = document.createElement("img");
			var z = document.createElement("p");
			var c= document.createElement("button");
			
			y.setAttribute("class","imgset1");
			o.setAttribute("class","imgset2");
			a.setAttribute("src","basket.png");
			c.setAttribute("class","btn");
			
			h.setAttribute("class","basketdiv");
			var t = document.createTextNode(pricesE[i]+"TL");
			c.appendChild(a);
			h.appendChild(c);
			z.appendChild(t);
			h.appendChild(z);
			
				
			y.src = content[i];
			o.src = content2[i];
			
			
			x.appendChild(y);
			x.appendChild(o);
			x.appendChild(h);
			value.appendChild(x);
	
		}
}

function contentLoaderK(value){
	var content = ["KadınUrun/k1.jpg","KadınUrun/k2.jpg","KadınUrun/k3.jpg","KadınUrun/k4.jpg","KadınUrun/k5.jpg","KadınUrun/k6.jpg","KadınUrun/k7.jpg","KadınUrun/k8.jpg","KadınUrun/k9.jpg","KadınUrun/k10.jpg","KadınUrun/k11.jpg","KadınUrun/kk12.jpg",];
	var content2 = ["KadınUrun/k11.jpg","KadınUrun/k22.jpg","KadınUrun/k33.jpg","KadınUrun/k44.jpg","KadınUrun/k55.jpg","KadınUrun/k66.jpg","KadınUrun/k77.jpg","KadınUrun/k88.jpg","KadınUrun/k99.jpg","KadınUrun/k1010.jpg","KadınUrun/kk1111.jpg","KadınUrun/kk1212.jpg",];
	var pricesK = [500,120,180,260,260,290,310,330,370,390,410,530];
	var i=0;
		
			for(i;i<content.length;i++){
			var x= document.createElement("div");
			var h= document.createElement("div");
			var y = document.createElement("img");
			var o = document.createElement("img");
			var a = document.createElement("img");
			var z = document.createElement("p");
			var c= document.createElement("button");
			
			y.setAttribute("class","imgset1");
			o.setAttribute("class","imgset2");
			a.setAttribute("src","basket.png");
			c.setAttribute("class","btn");
			
			h.setAttribute("class","basketdiv");
			var t = document.createTextNode(pricesK[i]+"TL");
			c.appendChild(a);
			h.appendChild(c);
			z.appendChild(t);
			h.appendChild(z);
			
				
			y.src = content[i];
			o.src = content2[i];
			
			
			x.appendChild(y);
			x.appendChild(o);
			x.appendChild(h);
			value.appendChild(x);
	
		}
}

function contentLoaderC(value){
	var content = ["CocukUrun/c1.jpg","CocukUrun/c2.jpg","CocukUrun/c3.jpg","CocukUrun/c4.jpg","CocukUrun/c5.jpg","CocukUrun/c6.jpg","CocukUrun/c7.jpg","CocukUrun/c8.jpg","CocukUrun/c9.jpg","CocukUrun/c10.jpg","CocukUrun/cc11.jpg","CocukUrun/cc12.jpg",];
	var content2 = ["CocukUrun/c11.jpg","CocukUrun/c22.jpg","CocukUrun/c33.jpg","CocukUrun/c44.jpg","CocukUrun/c55.jpg","CocukUrun/c66.jpg","CocukUrun/c77.jpg","CocukUrun/c88.jpg","CocukUrun/c99.jpg","CocukUrun/c1010.jpg","CocukUrun/cc1111.jpg","CocukUrun/cc1212.jpg",];
	var pricesC = [50,100,150,200,70,90,110,130,170,190,210,230];
	var i=0;
		
		for(i;i<content.length;i++){
			var x= document.createElement("div");
			var h= document.createElement("div");
			var y = document.createElement("img");
			var o = document.createElement("img");
			var a = document.createElement("img");
			var z = document.createElement("p");
			var c= document.createElement("button");
			
			y.setAttribute("class","imgset1");
			o.setAttribute("class","imgset2");
			a.setAttribute("src","basket.png");
			c.setAttribute("class","btn");
			
			h.setAttribute("class","basketdiv");
			var t = document.createTextNode(pricesC[i]+"TL");
			c.appendChild(a);
			h.appendChild(c);
			z.appendChild(t);
			h.appendChild(z);
			
				
			y.src = content[i];
			o.src = content2[i];
			
			
			x.appendChild(y);
			x.appendChild(o);
			x.appendChild(h);
			value.appendChild(x);
	
		}
}







