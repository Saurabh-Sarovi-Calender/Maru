var gallery = ["https://imgs.search.brave.com/DXyrqk1lnVF4ArRrR0YcbCogVVe2eDKW_EVwONzR7B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc","http://yiotis.net/filterizr/res/img/nature_2.jpg","http://yiotis.net/filterizr/res/img/city_3.jpg","http://yiotis.net/filterizr/res/img/industrial_1.jpg","http://yiotis.net/filterizr/res/img/industrial_2.jpg","http://yiotis.net/filterizr/res/img/nature_1.jpg","http://yiotis.net/filterizr/res/img/city_2.jpg","http://yiotis.net/filterizr/res/img/nature_3.jpg","http://yiotis.net/filterizr/res/img/industrial_3.jpg"]
const names = [
    "SponsorLink",
    "SponsHive",
    "FundIt",
    "Boostly",
    "PitchPoint",
    "AdAlign",
    "Sponsify",
    "BrandBridge",
    "Collaboro"
  ];

function mine(){
	for(i=0; i<gallery.length; i++){
	    var divs = document.createElement('div');
	    var divimg = document.createElement('img');
        var divimgname = document.createElement('h3');
	    divimg.setAttribute("src", gallery[i]);
        divimgname.textContent = names[i];
	    divs.classList.add('divimgname');

	    divs.classList.add('phts');
	    var a = "mycat";
	    var b = a+i;
	    divs.classList.add(b);
        divs.append(divimg);
        divs.append(divimgname);
        $(".photos").append(divs)
	}
}
mine();
$(function(){
  $(".all").click(function(){
   	$(".mycat0").fadeIn()
   	$(".mycat1").fadeIn()
   	$(".mycat2").fadeIn()
   	$(".mycat3").fadeIn()
   	$(".mycat4").fadeIn()
   	$(".mycat5").fadeIn()
   	$(".mycat6").fadeIn()
   	$(".mycat7").fadeIn()
   	$(".mycat8").fadeIn()
  })

  $(".sofa").click(function(){
   	$(".mycat0").fadeIn()
   	$(".mycat1").fadeOut()
   	$(".mycat2").fadeIn()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeOut()
   	$(".mycat5").fadeOut()
   	$(".mycat6").fadeIn()
   	$(".mycat7").fadeOut()
   	$(".mycat8").fadeOut()
  })

  $(".curtain").click(function(){
   	$(".mycat0").fadeOut()
   	$(".mycat1").fadeIn()
   	$(".mycat2").fadeOut()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeOut()
   	$(".mycat5").fadeIn()
   	$(".mycat6").fadeOut()
   	$(".mycat7").fadeIn()
   	$(".mycat8").fadeOut()
  })

  $(".wallpaper").click(function(){
   	$(".mycat0").fadeOut()
   	$(".mycat1").fadeOut()
   	$(".mycat2").fadeOut()
   	$(".mycat3").fadeIn()
   	$(".mycat4").fadeIn()
   	$(".mycat5").fadeOut()
   	$(".mycat6").fadeOut()
   	$(".mycat7").fadeOut()
   	$(".mycat8").fadeIn()
  })

  $(".mattress").click(function(){
   	$(".mycat0").fadeOut()
   	$(".mycat1").fadeOut()
   	$(".mycat2").fadeIn()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeIn()
   	$(".mycat5").fadeIn()
   	$(".mycat6").fadeOut()
   	$(".mycat7").fadeIn()
   	$(".mycat8").fadeOut()
  })

  $(".foam").click(function(){
  	$(".mycat0").fadeIn()
   	$(".mycat1").fadeIn()
   	$(".mycat2").fadeOut()
   	$(".mycat3").fadeOut()
   	$(".mycat4").fadeOut()
   	$(".mycat5").fadeOut()
   	$(".mycat6").fadeIn()
   	$(".mycat7").fadeOut()
   	$(".mycat8").fadeOut()
  })

  $(".wooden").click(function(){
    $(".mycat0").fadeIn()
     $(".mycat1").fadeIn()
     $(".mycat2").fadeOut()
     $(".mycat3").fadeOut()
     $(".mycat4").fadeOut()
     $(".mycat5").fadeOut()
     $(".mycat6").fadeIn()
     $(".mycat7").fadeOut()
     $(".mycat8").fadeOut()
})

$(".carpet").click(function(){
    $(".mycat0").fadeIn()
     $(".mycat1").fadeIn()
     $(".mycat2").fadeOut()
     $(".mycat3").fadeOut()
     $(".mycat4").fadeOut()
     $(".mycat5").fadeOut()
     $(".mycat6").fadeIn()
     $(".mycat7").fadeOut()
     $(".mycat8").fadeOut()
})

$(".bedsheet").click(function(){
    $(".mycat0").fadeIn()
     $(".mycat1").fadeIn()
     $(".mycat2").fadeOut()
     $(".mycat3").fadeOut()
     $(".mycat4").fadeOut()
     $(".mycat5").fadeOut()
     $(".mycat6").fadeIn()
     $(".mycat7").fadeOut()
     $(".mycat8").fadeOut()
})

$(".blanket").click(function(){
    $(".mycat0").fadeIn()
     $(".mycat1").fadeIn()
     $(".mycat2").fadeOut()
     $(".mycat3").fadeOut()
     $(".mycat4").fadeOut()
     $(".mycat5").fadeOut()
     $(".mycat6").fadeIn()
     $(".mycat7").fadeOut()
     $(".mycat8").fadeOut()
})

})