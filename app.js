let count = 0;

// Submit button events
document.getElementById('add-btn').addEventListener('click', function () {
    // Update counter
    count++

    // Get the Time
    const dateTime = new Date();
    const time = dateTime.toLocaleString();

    // Get the input task
    const inputValue = document.getElementById('input-value');

    // Get the table position
    const tablePosition = document.getElementById('table-data');

    // Create the table info
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="row">${count}</th>
    <td>${time}</td>
    <td>${inputValue.value}</td>
    <td>
    <button type="button" class="btn btn-success done-btn">Done</button>
    <button type="button" class="btn btn-danger delete-btn">Delete</button>
    </td>
    `;
    // Add the info in the table
    tablePosition.appendChild(tr);

    // Clear the input Screen
    inputValue.value = '';

    // // Done button events
    // const doneButtons = document.getElementsByClassName('done-btn');
    // for (const doneButton of doneButtons) {
    //     doneButton.addEventListener('click', function (event) {
    //         event.target.parentNode.parentNode.style.textDecoration = 'line-through';
    //     });
    // }

    // // Delete button events
    // const deleteButtons = document.getElementsByClassName('delete-btn');
    // for (const deleteButton of deleteButtons) {
    //     deleteButton.addEventListener('click', function (event) {
    //         event.target.parentNode.parentNode.style.display = 'none';
    //     });
    // }

});

document.getElementById('table-data').addEventListener('click', function (e) {
    if (e.target.innerText == 'Done') {
        e.target.parentNode.parentNode.style.textDecoration = 'line-through';
    }
    else if (e.target.innerText == 'Delete') {
        e.target.parentNode.parentNode.style.display = 'none';
    }
})

