/* js goes here */

(function(){

	window.addEventListener('scroll', scrollFunc);

	function scrollFunc(evt){
		// console.log(window.scrollY);
		fixedNav();
	}

	var bodyObj = document.body,
		hdrObj = document.getElementsByTagName('header')[0],
		mainObj = document.getElementsByTagName('main')[0];

	/**
	* function fetches css applied styles.
	*	x needs to be a js object
	*	y needs to be a css property
	*/

	function reqStyle(obj, prop){
		return parseInt(window.getComputedStyle(obj, null).getPropertyValue(prop));
	}

	/**
	* function coverting px to vw or vw to px
	*	num needs to be interger
	*/

	function calcUnit(num){
		return (document.documentElement.clientWidth / num);
	}

	function fixedNav(){
		var scrollDist = window.scrollY;
		// console.log(scrollDist);
		if(scrollDist > reqStyle(bodyObj, 'padding-top')){
			// console.log('yes it has');
			hdrObj.classList.add('fixie');
			mainObj.style.paddingTop = (calcUnit(10) + hdrObj.clientHeight) + 'px';
			// calcUnit(10) + hdrObj.clientHeight;
		}
		else {
			hdrObj.classList.remove('fixie');
			mainObj.style.paddingTop = '10vw';
		}
	}

	window.addEventListener('resize', checkDims);

		function scrollFunc(evt){
			//fixNav(); //currently already exists in scrollFunc()
			colorChange();
		}

		var docH = 0;
		function checkDims(){
			docH = document.documentElement.scrollHeight;
		}
		checkDims();

		function colorChange(){
			var winH = window.innerHeight;
			var scrollDist = window.scrollY;
			var degreeCon = Math.ceil( (360 / (docH - winH)) * 100) / 100;
			var hue = Math.round(degreeCon * scrollDist);
			bodyObj.style.backgroundColor = 'hsla('+hue+', 30%, 50%, 1)';
			console.log(hue);
		}
})();

// console.log(document.documentElement.clientWidth);