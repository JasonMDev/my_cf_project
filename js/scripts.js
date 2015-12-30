// Twitter script
!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
    js.id=id;
    js.src=p+'://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js,fjs);
    }
  } (document, 'script', 'twitter-wjs');

// Facebook Script
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
  }( document, 'script', 'facebook-jssdk'));

//When the document is ready the following actions will take place.
$(document).ready(function() {
	// Change tag's background.
	$("#message-box").css("background","#ffb380");

	//Stellar.js for paralax effect  '.paralax-section'
  $(window).stellar(); 
  
  //Tooltip script via "bootstrap.min.js" targeting single id.
  $(function () {
  	$('#item1').tooltip();
  	});

  //Tooltip script via "bootstrap.min.js" targeting class button.
  $(function () {
  	$('[data-toggle="tooltip"]').tooltip();
  	}); 
  
  //Creates smooth scrolling effect for menus.
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
  	var href = $.attr(this, 'href');
    $root.animate({
    	scrollTop: $(href).offset().top
    	}, 500, function () {
    		window.location.hash = href;
    		});
    return false;
    });

  //Contact Submit Button
	$("#btn-submit--contact").on("click", function() {
		//Can check in the console of the developers tools.
		//console.log("Clicked!!");
		var comment = $("#message-box").val();
		//console.log(comment);
		$("#visible-comment").html(comment);
		$("#visible-comment").css("color","white");
		$("#message-box").hide();
		return false;
	});

  //Character count in the Contact message box.
  $("#message-box").on("keyup", function() {
    //Testing that we have caight the correct key.
    console.log("Keyup Happened!!");
  });

});


