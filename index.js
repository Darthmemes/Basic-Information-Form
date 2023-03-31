// Import stylesheets
import './style.css';

// Write Javascript code!

function chpwd() {
  let pwd = document.getElementById('password');

  var pwdValue = document.getElementById('password').value;
  var cpwdValue = document.getElementById('checkPassword').value;

  if (pwdValue == '') {
    pwd.setCustomValidity('Enter Password');
  } else if (pwdValue != cpwdValue) {
    pwd.setCustomValidity('Your passwords must match');
  } else if (pwd.validity.patternMismatch) {
    pwd.setCustomValidity(
      'Your password must be at least 8 characters with at least one letter and one number'
    );
  } else {
    pwd.setCustomValidity('');
  }
}

document.getElementById('submitForm').addEventListener('click', chpwd);


