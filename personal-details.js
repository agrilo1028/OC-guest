const addButton = document.getElementById('add');
const saveButton = document.getElementById('save');
const textBoxBillAdd = document.getElementById('billing');
const newBillAdd = document.getElementById('new-billing');
const buttons = document.getElementsByClassName('space-up');

textBoxBillAdd.hidden = true;
newBillAdd.hidden = true;
saveButton.hidden = true;

function mySave() {
    textBoxBillAdd.hidden = false;
    addButton.hidden = true;
    saveButton.hidden = false;
}

function display() {
    newBillAdd.hidden = false;
    textBoxBillAdd.hidden = true;
    addButton.hidden = false;
    addButton.innerHTML = 'Edit';
    saveButton.innerHTML = 'Delete'
    buttons.style.display = 'block';

}

addButton.addEventListener('click', mySave);
textBoxBillAdd.addEventListener('change', updateValue);
    function updateValue(e) {
        newBillAdd.textContent = e.target.value;
    }
saveButton.addEventListener('click', display);