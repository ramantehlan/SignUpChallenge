<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>repl.it</title>
<link href="index.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="content">
<form>
<div class="form-group">
<span>Full Name (Optional)</span>
<input type="text" id="username" />
</div>
<div class="form-group">
<span>Email</span>
<input type="text" id="username" />
</div>
<div class="form-group">
<span>Username</span>
<input type="text" id="username" />
</div>
<div class="form-group">
<span>Password</span>
<input type="password" id="password" />
</div>
<input type="submit" value="submit"/>
</form>
</div>
<div class="intro">
<div><p>Using this markup as a base, please improve the usability and polish of the
sign-up form.</p>
<p>This is meant to be a quick exercise, so please don't feel the need to
spend more than an hour or so on it. Also, we are using native CSS and JS, but free to
use any libraries you find necessary.</p>
<p>You are in no way expected to do all of the following (and are not limited
to these changes), but some ways you could improve the form include:</p>
<ul>
<li>Add a visual indicator to inform the user of the strength of their
password</li>
<li>Add client-side validation to the form</li>
<li>Make the form more accessible to screen readers</li>
<li>Add styling to the form to make it more visually appealing</li>
<li>Right now the page refreshes on submit. Can you make it submit in the
background and add a loading state?</li>
</ul>
<p>When you are done, please click <kbd>save</kbd> above and send us the
link.</p>
</div>
</div>
<script src="index.js"></script>
</body>
</html>
index.js
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