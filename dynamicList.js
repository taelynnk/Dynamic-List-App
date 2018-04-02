var button1 = document.getElementById('addFirstItem');

function addItem() {
    var ul = document.getElementsByTagName('ul')[0];
    var newItem = document.createElement('li');
    var textbox = document.getElementById('input');
    var input = document.getElementById('input').value;
    var deleteButton = document.createElement('button');
    ul.appendChild(newItem);
    newItem.textContent = input;
    deleteButton.textContent = 'Delete Item';

    newItem.appendChild(deleteButton);

    textbox.focus();
    textbox.value = "";




    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
        textbox.focus();
        textbox.value = "";

    });


}

button1.addEventListener('click', addItem);
