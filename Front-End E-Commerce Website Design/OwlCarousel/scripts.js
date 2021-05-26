
$(document).ready(function(){
		  $("#rightMenu div").hover(function(){
			  $(this).find(".imgset1").css("display", "none"); 
			   $(this).find(".imgset2").css("display", "block"); 
		  },
		  function(){
			   $(this).find(".imgset2").css("display", "none"); 
			   $(this).find(".imgset1").css("display", "block"); 
		  });
		});
		
		
		
$(document).ready(function(){
		  $("#rightMenu div").hover(function(){
			  $(this).find(".imgset3").css("display", "none"); 
			   $(this).find(".imgset4").css("display", "block"); 
		  },
		  function(){
			   $(this).find(".imgset4").css("display", "none"); 
			   $(this).find(".imgset3").css("display", "block"); 
		  });
		});		

$(document).ready(function(){
		  $("#rightMenu div").hover(function(){
			  $(this).find(".imgset5").css("display", "none"); 
			   $(this).find(".imgset6").css("display", "block"); 
		  },
		  function(){
			   $(this).find(".imgset6").css("display", "none"); 
			   $(this).find(".imgset5").css("display", "block"); 
		  });
		});	
		
		
$(document).ready(function(){
		  $("#leftMenuCatogories a ").hover(function(){
			  $(this).css("background-color", "#f4f4f4"); 
		  },
		  function(){
			 $(this).css("background-color", "#fff"); 
		  });
		});




$(document).ready(function(){
	
		
	$('.owl-one').owlCarousel({
		
		loop:true,
		autoHeight:false,
		items:1,
		autoplay:true,
		autoplayHoverPause:true,
			
	})
	
	$('.owl-two').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
		
	})
	$( ".owl-two .owl-next" ).mouseover(function() {
		$(this).css("backgroundColor", "rgba(0, 0, 0, 0)");
	});
	$( ".owl-two .owl-prev" ).mouseover(function() {
		$(this).css("backgroundColor", "rgba(0, 0, 0, 0)");
	});
	
	
	
	
});

$(document).ready(function(){
		  $("#Elements li a , #Elements2 a ").hover(function(){
			  $(this).css("background-color", "#f4f4f4"); 
		  },
		  function(){
			$(this).css("background-color", "#fff"); 
		  });
		});
$(document).ready(function(){
		  $("#FooterLinks div ").hover(function(){
			  $(this).css("background-color", "#6b4471"); 

		  },
		  function(){
			$(this).css("background-color", "#4d3251");

		  });
		});
		
		
		
		
$(document).ready(function(){
		  $("#Elements li a , #Elements2 a ").hover(function(){
			  $(this).css("background-color", "#f4f4f4"); 
		  },
		  function(){
			$(this).css("background-color", "#fff"); 
		  });
		});
		$(document).ready(function(){
		  $("#FooterLinks div ").hover(function(){
			  $(this).css("background-color", "#6b4471"); 

		  },
		  function(){
			$(this).css("background-color", "#4d3251");

		  });	
		});
		
$(document).ready(function(){
	$(".btn").click(function(){
	  $(".bgpopup").css("display","flex");
	  var image= $(this).parent().parent().find(".imgset1").attr('src');
	  var price= $(this).parent().find("p").text();
	  $("#imgpopup img").attr("src",image);
	  $("#pricepopup p").text(price);
	});
	$(".close").click(function(){
	  $(".bgpopup").css("display","none");
	});
	
});
$(document).on('keydown', function(event) {
   if (event.key == "Escape") {
   $(".bgpopup").css("display","none");
     $(".ürünf").find("p").text("");
	  $(".innerA").text("Numara Secimi");
     }
   });
   
 $(document).ready(function(){
	 var pricesC = [50,100,150,200,70,90,110,130,170,190,210,230];
	$(".sbutton").click(function(){
	  $(".bgpopup").css("display","flex");
	  var image= $(this).parent().parent().find("img").attr('src');
	  var price= $(this).parent().find("p").text();	
	  var index= $(this).index(".sbutton");
	  $("#imgpopup img").attr("src",image);
	  $("#pricepopup p").text(pricesC[index]+"TL");
	});
	$(".close").click(function(){
	  $(".bgpopup").css("display","none");
	  $(".ürünf").find("p").text("");
	  $(".innerA").text("Numara Secimi");
	});
	
});  
$(document).ready(function(){
	$(".numberChoices").click(function(){
		var selected = $(this).text();
		$(".ddmenu").css("visibility","hidden");
		$(".innerA").text("SEÇİLEN NUMARA :"+selected);
	});
	$(".innerA").hover(function(){
		$(".ddmenu").css("visibility","visible");
		$(".ddmenu").css("opacity","1");
	});
		$(".dropdownnumber").mouseleave(function(){
		$(".ddmenu").css("visibility","hidden");
		$(".ddmenu").css("opacity","0");
	});
	$(".innerA").hover(function(){
		$(".ddmenu").css("visibility","visible");
		$(".ddmenu").css("opacity","1");
	});
	$(".tamamlab").click(function(){
		var text = $(".innerA").text();
		if(text === "Numara Secimi"){
		$(".ürünf").find("p").text("NUMARA SEÇİNİZ");
		}
		else 
		$(".ürünf").find("p").text("BAŞARIYLA TAMAMLANDI");
	});
	
});




		
		
		
		
		

		
		