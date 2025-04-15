// Changing text content dynamically
const changeTextButton = document.getElementById('change-text-btn');
const textContent = document.getElementById('text-content');

changeTextButton.addEventListener('click', () => {
    textContent.textContent = "The text content has been changed!";
});

// Modifying CSS styles via JavaScript
const toggleStyleButton = document.getElementById('toggle-style-btn');

toggleStyleButton.addEventListener('click', () => {
    const currentStyle = document.body.style.backgroundColor;
    if (currentStyle === 'lightblue') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
});

// Adding or removing an element when a button is clicked
const addRemoveButton = document.getElementById('add-remove-btn');
const dynamicContainer = document.getElementById('dynamic-container');

addRemoveButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'A new element has been added!';
    dynamicContainer.appendChild(newElement);

    // Remove if the element already exists
    if (dynamicContainer.contains(newElement)) {
        dynamicContainer.removeChild(newElement);
    }
});
