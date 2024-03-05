document.getElementById('myForm').addEventListener('submit', function(e) {
  var firstName = document.getElementById('firstName').value;
  if (firstName === '') {
      e.preventDefault();
      document.getElementById('error-message').innerText = 'Need a first name!!';
  }
});
window.addEventListener("DOMContentLoaded", function() {
  let params = new URLSearchParams(window.location.search);
  for (let param of params) {
      console.log(param);
  }
});
