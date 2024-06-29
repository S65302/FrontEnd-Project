// JavaScript code can be added here if needed
// For example, adding functionality to the navigation links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.topnav a');
    
    links.forEach(link => {
      link.addEventListener('click', function() {
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipeForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Here you can handle the form submission, e.g., validate inputs or send data to a server
      // For demonstration purposes, you can log the form data to console
      const formData = new FormData(this);
      console.log({
        'Recipe Name': formData.get('recipe-name'),
        'Ingredients': formData.get('ingredients'),
        'Instructions': formData.get('instructions')
      });
  
      // Optionally, you can redirect or show a success message
      // window.location.href = 'submit_recipe.html';
      // alert('Recipe added successfully!');
    });
  });

// JavaScript for modal functionality and form handling
function openModal() {
  document.getElementById('id01').style.display = 'block';
}

function closeModal() {
  document.getElementById('id01').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');

  // Function to handle Enter key press
  function handleEnterKeyPress(event, inputElement) {
    if (event.key === 'Enter' || event.keyCode === 13) { // Check for Enter key
      event.preventDefault(); // Prevent default Enter behavior (form submission)

      const { selectionStart, selectionEnd } = inputElement; // Get cursor position

      // Insert a list item at the cursor position
      inputElement.value = inputElement.value.slice(0, selectionStart) +
                           '\n- ' +
                           inputElement.value.slice(selectionEnd);

      // Adjust cursor position after inserting list item
      inputElement.selectionStart = inputElement.selectionEnd = selectionStart + 3;
    }
  }

  // Event listeners for Enter key press in ingredients and instructions fields
  ingredientsInput.addEventListener('keydown', event => {
    handleEnterKeyPress(event, ingredientsInput);
  });

  instructionsInput.addEventListener('keydown', event => {
    handleEnterKeyPress(event, instructionsInput);
  });
});
