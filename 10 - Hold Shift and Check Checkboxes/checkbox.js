let checkbox = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChek;

function handleChek (e) {

	let inBetween = false ;
	if(e.shiftKey && this.checked) {
	console.log(e);
		checkbox.forEach(chekbox => {

			if (chekbox === this || chekbox === lastChek){
				inBetween = !inBetween;
				console.log("ajmo!!!!!!!");
			}

			if(inBetween) {
				chekbox.checked = true;
			}
		});
	}
	lastChek = this ;
}

checkbox.forEach(chkbox => chkbox.addEventListener("click", handleChek));