const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

li.append(deleteButton);
list.append(li);

// Add Chapter button click event
button.addEventListener('click', function() {

    if (input.value.trim !== '') {

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = input.value;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
        li.removeChild(li);
    });

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the list
    list.appendChild(li);

    // Clear the input field
    inputElement.value = '';
} else {
    console.log('Please enter a chapter name');
}

inputElement.focus();
});
