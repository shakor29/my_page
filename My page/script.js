const email = document.querySelector('#input input');
const btn = document.querySelector('#input button');
const text = document.querySelector('.validate-msg');

    // validate Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const emValue = email.value;
  
    if (validateEmail(emValue) == false) {
      btn.classList.add('invalid');
      email.classList.add("border-red")
      text.textContent = 'please provide a valid email';
      text.classList.remove('good-mail');
      return false;
  } else {
      email.value = '';
      btn.classList.remove('invalid');
      email.classList.remove('border-red');
      text.textContent = 'Successfull';
      setTimeout(function(){ text.textContent = ""}, 3000);
      text.classList.add('good-mail');
  }
  return true;
}


  btn.addEventListener("click", validate);




















