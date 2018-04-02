var button = document.getElementById('addFirstItem');

function addFirstItem() {
    var ul = document.getElementsByTagName('ul')[0];
    var newItem = document.createElement('li');
    var input = newItem.value;

    ul.appendChild(input);


}

button.addEventListener('click', addFirstItem);

var button2 = document.getElementById('addOtherItems');

function addOtherItems() {


}
