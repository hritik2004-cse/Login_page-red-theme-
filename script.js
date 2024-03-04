let input = document.getElementById('email');

function confirmation() {
  let emailValue = input.value.trim();

  if (emailValue === '') {
    alert('Please enter a valid email address.');
  } else {
    alert(`Dear user, your ${emailValue} has been confirmed. Check your email for confirmation.`);
  }
}
function forget(){
  alert("your reset password link has been sent to your respective email address don't take it seriously")
}
function signup(){
  alert("currently we don't have sign up page please wait for my next project stay tuned ")
}
