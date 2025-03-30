const input = document.getElementById('input-text');
const inputButton = document.getElementById('input-button');

input.addEventListener('keypress', function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('input-button').click();
  }
});
