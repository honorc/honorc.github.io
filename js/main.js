/* this is an alert box. $ is a shortcut for jquery*/
/* alert ($); */

//use function to start javascript
function askQuestions() {


	var firstName = prompt('What is your first name?')
	var lastName = prompt('What is your last name?')
	//type message inconsole area of inspect element
	console.log(firstName + ' ' + lastName);

	var age = prompt('How old are you')
	console.log(age);
	//check if the age has been entered as a number or not
	age = parseInt(age);

	//'if' used for conditions. if condition is correct, then do {} or ELSE do this...
	if (age = parseInt(age)) {
		console.log('age entered correctly')
	} else {
		console.log('error. not a number')
	}

	if (age >= 18) {
		console.log('user is an adult')
	} else if (age >=13) {
		console.log('user is a teenager')
	} else {
		console.log('user is a child')
	} 


	if (firstName.toLowerCase() == "general" && lastName.toLowerCase() != "assembly") {
		console.log('Hello General')
	} else if (firstName.toLowerCase() == "general" && lastName.toLowerCase() == "assembly") {
		console.log('YO GA')
	} else {
		console.log('You are not cool enough to be on this site')
	}

}

//when the page has loaded (otherwise may mess with css and html)
$(function() {

	//When the user clicks on the image, run askQuestions
	$('img').on('click', askQuestions)
	
	//when the user clicks an h3. search for h2...'.' then do this function on click
	$('h2').on('click', function() {

		//hide the next element (next, hide, on are jquery shortcuts) (this refers to the h2 that has been clicked on NOT all h2s)(next refers to the next section in webpage design i.e paragraph underneath) USE TOGGLE not HIDE
		//150 is the speed of sliding
		$(this).next().slideToggle(150);

	})

});