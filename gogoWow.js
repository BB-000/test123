(function() {

	if( ! window.wowFactorOverload999_WoahThere) {
		wowFactorOverload999_WoahThere = true;

		var animates = ['bounce', 'bounceIn', 'bounceInDown', 'bounceInRight', 'bounceInLeft', 'bounceInUp', 'fadeInDownBig', 
		'fadeInUpBig', 'fadeInLeft', 'rotateIn', 'rotateInUpLeft', 'rotateInUpRight', 'rotateInDownRight', 'rotateInDownLeft',  
		'lightspeedIn', 'flipInX', 'flipInY', 'zoomIn', 'hinge', 'flash', 'rollIn', 'rubberBand'];

		var sc = document.createElement( 'script' );

		sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';

		document.body.appendChild(sc);

		var s = document.createElement('link');
	    s.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css');
	    s.setAttribute('rel', 'stylesheet');
	    s.setAttribute('type', 'text/css');
	    document.getElementsByTagName('head')[0].appendChild(s);

		sc.onload= goWow;

		var all = document.getElementsByTagName("*");

		for (var i=0, max=all.length; i < max; i++) {

			 var innerElem = all[i];

		         var animClass = animates[Math.floor(Math.random() * animates.length)];
	             innerElem.className += " wow";
	             innerElem.className += " " + animClass;		     
		};
	} else {
		var wow = new WOW();
		wow.init();
		wow.sync;
	}

	function goWow() {
		var wow = new WOW();
		wow.init();
		wow.sync();	
	};

})();