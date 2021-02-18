//edit name

const currentName = document.getElementById('current-name');
const newName = document.getElementById('new-name');
const editName = document.getElementById('edit-name');
const saveName = document.getElementById('save-name');
const newNamep = document.getElementById('saved-new-name')

newName.hidden = true;
saveName.hidden = true;

//edit DOB

const DOB = document.getElementById('date');
const editDate = document.getElementById('edit-date');
const saveDate = document.getElementById('save-date');

saveDate.hidden = true;

const dateBorder = () => {
    DOB.style.borderColor = 'white';
    editDate.hidden = true;
    saveDate.hidden = false;
}

const newDate = () => {
    DOB.style.borderColor = '#1C343D';
    editDate.hidden = false;
    saveDate.hidden = true;
}

editDate.addEventListener('click', dateBorder)
saveDate.addEventListener('click', newDate)

//home address

const addHome = document.getElementById('add-home');
const editHome = document.getElementById('edit-home');
const deleteHome = document.getElementById('delete-home');
const saveHome = document.getElementById('save-home');
const home = document.getElementById('home');
const newHome = document.getElementById('new-home');
const currentHome = document.getElementById('current-home');
const homeTag = document.getElementById('home-tr');


//billing address

const addButton = document.getElementById('add');
const saveButton = document.getElementById('save');
const textBoxBillAdd = document.getElementById('billing');
const newBillAdd = document.getElementById('new-billing');
const buttons = document.getElementsByClassName('space-up');
const editBilling = document.getElementById('edit-billing');
const deleteBilling = document.getElementById('delete-billing')

textBoxBillAdd.hidden = true;
newBillAdd.hidden = true;
saveButton.hidden = true;
newNamep.hidden = true;
editBilling.hidden = true;
deleteBilling.hidden = true;

//edit name function

const editNameFunction = () => {
    newName.hidden = false;
    saveName.hidden = false;
    currentName.hidden = true;
    editName.hidden = true;
    newNamep.hidden = true;
}

const displayNewName = () => {
    newName.hidden = true;
    saveName.hidden = true;
    newNamep.hidden = false;
    editName.hidden = false;
}

editName.addEventListener('click', editNameFunction);
newName.addEventListener('change', updateValuee);
    function updateValuee(ename) {
        newNamep.textContent = ename.target.value;
    }
saveName.addEventListener('click', displayNewName)

//function home

saveHome.hidden = true;
addHome.hidden = true;
home.hidden = true;
newHome.hidden = true;

const editHomeAdd = () => {
    addHome.hidden = true;
    saveHome.hidden = false;
    editHome.hidden = true;
    deleteHome.hidden = true;
    home.hidden = false;
    home.value = '';
    currentHome.hidden = true;
    homeTag.style.paddingTop = '10px';
}

const saveHomeAdd = () => {
    home.hidden = true;
    newHome.hidden = false;
    saveHome.hidden = true;
    editHome.hidden = false;
    deleteHome.hidden = false;
}

const deleteHomeAdd = () => {
    newHome.hidden = true;
    editHome.hidden = true;
    deleteHome.hidden = true;
    addHome.hidden = false;
    currentHome.hidden = true;
}

addHome.addEventListener('click', editHomeAdd);
editHome.addEventListener('click', editHomeAdd);
home.addEventListener('change', updateHome);
    function updateHome(homeAdd) {
        newHome.textContent = homeAdd.target.value;
    }
saveHome.addEventListener('click', saveHomeAdd);
deleteHome.addEventListener('click', deleteHomeAdd);
addHome.addEventListener('click', editHomeAdd);

//function billing

function mySave() {
    textBoxBillAdd.hidden = false;
    addButton.hidden = true;
    saveButton.hidden = false;
    textBoxBillAdd.value = '';
}

function display() {
    newBillAdd.hidden = false;
    textBoxBillAdd.hidden = true;
    saveButton.hidden = true;
    editBilling.hidden = false;
    deleteBilling.hidden = false;
    buttons.style.display = 'block';

}

function editBillingFunction() {
    newBillAdd.hidden = true;
    textBoxBillAdd.hidden = false;
    saveButton.hidden = false;
    editBilling.hidden = true;
    deleteBilling.hidden = true;
}

function reverse() {
    addButton.hidden = false;
    saveButton.hidden = true;
    textBoxBillAdd.hidden = true;
    editBilling.hidden = true;
    deleteBilling.hidden = true;
    newBillAdd.hidden = true;
}

addButton.addEventListener('click', mySave);
textBoxBillAdd.addEventListener('change', updateValue);
    function updateValue(e) {
        newBillAdd.textContent = e.target.value;
    }
saveButton.addEventListener('click', display);
editBilling.addEventListener('click', editBillingFunction);
deleteBilling.addEventListener('click', reverse);