function getMessage(a,b) {

	if (typeof(a) == Boolean) {
		if (a === true) {
			alert('Я попал в ' + b);
		}else{
			alert("Я никуда не попал");
		}
	}

	if (typeof(a) == Number) {
		alert('Я прыгнул на ' + a*100 + ' сантиметров');
	}

	if (Array.isArray(a)) {
		for (var i = 0; i < a.length; i++) {
			var sum =+ a[i];
			alert('Я прошел ' + sum + ' шагов');
		}		
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		for (var i = 0; i < a.length; i++) {
			var length =+ a[i]*b[i];
			alert('Я прошел ' + length + ' шагов');
		}		
	} 
}