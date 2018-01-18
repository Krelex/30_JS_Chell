
let pressed = [];
const secretCode = "fico";
const secretcode = "wesbos";
let pokusaj;

let triger_one = false;
let triger_two = false;
let triger_three = false;

window.addEventListener('keyup', (e) => {

	// pressed.push(e.key);
	// pressed.splice(secretcode.length-1 , pressed.length - secretcode.length);
	// console.log(pressed); 
	// if (pressed.join('').includes(secretcode)) {
	// 	cornify_add();
	// }


	//-----------------------------------------

	pressed.push(e.key);                       
	pokusaj = pressed.join('');
	console.log(pokusaj);
	if (pokusaj.length >= 5) {
		pokusaj = "";
		pressed = [];
	}
	                                                 //moja varijanta 1
	if (pokusaj == secretCode) {
		document.body.style.background = 'blue';
	}

    // -----------------------------------------
	if (e.key == "a") {
		triger_one =true;
		console.log("good!");
		}

	if (e.key == "s") {
		triger_two=true;                             //moja varijanta 2
		console.log("nice!");
		}

	if (e.key == "d") {
		triger_three=true;
		console.log("excelent!");
		}

	if (triger_one === true && triger_two === true && triger_three === true ) {
		document.body.style.background = 'red';
	}	
});
