
// alert('Hi there');
const toHide = document.getElementById('hide-insta');
const profileAndFaqs = document.getElementById('show-profile');
const menuIcon = document.getElementById("menu-icon")

toHide.hidden = false;
profileAndFaqs.hidden = true;
menuIcon.hidden = false;

let showProfile = () => {
    profileAndFaqs.hidden = false;
    profileAndFaqs.style.display = 'inline-block';
    toHide.hidden = true;
    menuIcon.style.display = 'none';
}

menuIcon.addEventListener('click', showProfile);

//my profile buttons

const addButton = document.getElementById('add');
const saveButton = document.getElementById('save');
const textBoxBillAdd = document.getElementById('billing');
const newBillAdd = document.getElementById('new-billing');

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
    newBillAdd.style.backgroundColor = 'black';
    newBillAdd.style.color = 'white';
    textBoxBillAdd.hidden = true;
    saveButton.hidden = true;
    addButton.hidden = false;
    addButton.innerHTML = 'Edit';
}

addButton.addEventListener('click', mySave);
textBoxBillAdd.addEventListener('change', updateValue);
    function updateValue(e) {
        newBillAdd.textContent = e.target.value;
    }
saveButton.addEventListener('click', display);
