/*
This script is for the sign up page,
It will do following functions:
	
	- Indicate the strength of a password
	- Validate the form client side
	- Ajax to post the form, instead of reloading it.
	- Add Loading State.
	- Will disable the button once request is sent.

Creator:- Raman Tehlan <ramantehlan@gmail.com>
Date Of Creation: 11-September-2017
*/
	

// Form
let form = document.getElementById("form")
// Form Button
let submitButton = document.getElementById("submitButton")
// URL of form
let signinUrl = form.action
// Error box
let errorBox = document.getElementById("errorBox")
// Success box
let successBox = document.getElementById("successBox")
// All inputs
let inputs = document.getElementsByTagName('input')
// Cover 
let cover = document.getElementById("cover")
// Strings object
let errorMessage = [
	"Mandatory Fields",
	"Email is invalid",
	"user name is invalid"
]

//Function to post 
function post(url, data, cb) {
	
		var xhr = new XMLHttpRequest()
		console.log(xhr)
		xhr.onload = function() {
			cb(JSON.parse(this.responseText))
		}

		xhr.open('POST', url)
		xhr.setRequestHeader("Content-Type", "application/json")
		xhr.send(JSON.stringify(data))

}

// Function to check if a string object is empty
function isEmpty(obj){
	if(obj.value == "")
		return true
	else
		return false
}

// Function to Highlight error input
function outline(obj){
	obj.setAttribute("style","border-color: rgba(230,100,100)")
}

// Function to set input back to normal
function defaultOutline(){
	for (var i=0; i< inputs.length; i++)
    	inputs[i].setAttribute("style","border-color: rgba(120,120,120,0.2)")
}

// Function to show the hidden object
function show(obj){
	obj.setAttribute("style","display:block")
}

// Function to hide the object hidden earlier
function hide(obj){
	obj.setAttribute("style","display:none")
}

// This is the callback function for post
function postResult(res){
	// Console the result
	console.log(res)
	complete()
}

// Function to call once function completed
function complete(){
	// Make the cursor default again
	document.body.style.cursor='default'
	submitButton.setAttribute("style",'cursor: pointer')
	// Enable the submit button
	submitButton.removeAttribute('disabled')

	// To trigger the function one focus
	for (var i=0; i< inputs.length; i++){
    	inputs[i].onfocus = defaultForm
	}

	// Hide loading cover
	hide(cover)
}

// Function to reset things in form
function defaultForm(){
	// Set default outline of input
	defaultOutline()
	// Hide error box
	hide(errorBox)
	// Hide Success box
	hide(successBox)
}

// To change content of a object
function changeContent(obj , content){
	obj.innerHTML = content
}


// To check email validation
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// To check alphabets only
function validateAlpha(string){
	var re = /^[a-z]+$/i
	return re.test(string)
}

// To check user-name 
function validateUnsername(username){
	var re = /^[a-z0-9_]+$/i
	return re.test(username)
}

//Submit function
form.addEventListener("submit",function(e) {
		
	// Make cursor wait
	document.body.style.cursor='wait'
	submitButton.setAttribute("style",'cursor: wait')
	// Disable the submit button
	submitButton.setAttribute('disabled', 'disabled')
	// Display loading cover
	show(cover)

	//Collect all the data
	let name = document.getElementById("name")
	let email = document.getElementById("email")
	let username = document.getElementById("username")
	let password = document.getElementById("password")


		// To check form
		if( isEmpty(email) || isEmpty(username) || isEmpty(password) ){
				
				// To Highlight empty error
				if(isEmpty(email))
					outline(email)
				if(isEmpty(username))
					outline(username)
				if(isEmpty(password))
					outline(password)
				// To show error box
				show(errorBox)
				// To print the error
				changeContent(errorBox, errorMessage[0])
				// To complete the process 
				complete()

		}else if(!validateAlpha(name.value)){
			outline(name)
			show(errorBox)
			changeContent(errorBox, errorMessage[2])
			complete()
		}else if(!validateEmail(email.value)){
			outline(email)
			show(errorBox)
			changeContent(errorBox, errorMessage[1])
			complete()
		}else{
			// Post the form	
			post(signinUrl, {
				username: username.value,
				password: password.value
			}, 
			function(res){ 
				postResult(res) 
			})
		}

	// Stop reloading of page
	e.preventDefault()
	// Stop reloading and return false
	return false
})