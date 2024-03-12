function saveNumber() {
    const numberInput = document.getElementById('numberInput');
    const inputValue = numberInput.value;

    if (inputValue !== '') {
        const numberList = document.getElementById('numberList');
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        numberList.appendChild(listItem);

        // Send the number to the server (PHP/MySQL) for storage here
        // You'll need AJAX or fetch API to communicate with the server
    } else {
        alert('Please enter a number.');
    }
}
