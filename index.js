/*
This script is for the sign up page,
It will do following functions:
	
	- Indicate the strength of a password
	- Validate the form client side
	- Ajax to post the form, instead of reloading it.
	- Add Loading State.

[Note]

I will use just one library, which is written by me.
otherwise, I will strict to native JS, and won't be
using libraries to do things.


Creator:- Raman Tehlan <ramantehlan@gmail.com>
Date Of Creation: 11-September-2017
*/


var signinUrl = 'https://private-47ed5-interviewapitest.apiary-mock.com/signin'
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
window.submitForm = function() {
post(signinUrl, {
username: document.querySelector('#username').value,
password: document.querySelector('#password').value
}, function(res) {
console.log(res)
})
}