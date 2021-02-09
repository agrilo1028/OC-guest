
const addButton = document.getElementById('add');
const saveButton = document.getElementById('save');
const textBoxBillAdd = document.getElementById('billing');
const newBillAdd = document.getElementById('new-billing');

textBoxBillAdd.hidden = true;
newBillAdd.hidden = true;
saveButton.hidden = true;

// let saveNewBillAdd = (input) => {
//     localStorage.setItem('textBoxBillAdd', input.textContent);
//     let see = localStorage.getItem('textBoxBillAdd');
//     newBillAdd.innerHTML = see;
//     console.log(see);
//     textBoxBillAdd.hidden = true;
//     addButton.innerHTML = 'Edit';
// }

function mySave() {
    textBoxBillAdd.hidden = false;
    addButton.hidden = true;
    saveButton.hidden = false;
    // input = textBoxBillAdd.value;
    // localStorage.setItem('input', JSON.ToString(input));
}

function display() {
    newBillAdd.hidden = false;
    // let output = localStorage.getItem("input");
    // newBillAdd.value = output;
    // output.textContent = e.target.value;
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


// let insertNewBillAdd = () => {
//     let input = textBoxBillAdd.value;
//     localStorage.setItem('input', input);
// }
// let saveNewBillAdd = () => {
    
//     let see = localStorage.getItem('input');
//     newBillAdd.value = see;
    
    
// }

// function newBillingAdd() {
//     return new Promise(resolve => {
//         addButton.innerHTML = 'Save';
//         textBoxBillAdd.hidden = false;
//     });
// }

// async function addNewBillAdd() {
//     const neww = await newBillingAdd()
//     .then(insertNewBillAdd).then(addButton.addEventListener('click', saveNewBillAdd));
// }

// addButton.addEventListener('click', addNewBillAdd);

// const editHome = document.getElementById('edit-home');
// const deleteHome = document.getElementById('delete-home');
// const homeAdd = document.getElementById('home-address');
// const textBoxHomeAdd = document.getElementById('home')

// deleteHome.hidden = false;
// textBoxHomeAdd.hidden = true;

// let deleteH = () => {
//     homeAdd.hidden = true;
//     deleteHome.hidden = true;
//     editHome.innerHTML = 'Add'
// }

// deleteHome.addEventListener('click', deleteH);

// function newHomeAdd() {
//     return new Promise(resolve => {
//         editHome.innerHTML = 'Save';
//         textBoxHomeAdd.hidden = false;
//     });
// }

// let saveNewHomeAdd = (input) => {
//     // textBoxHomeAdd.innerHTML = input;
//     // homeAdd.innerHTML = console.log(input.textContent);
//     localStorage.setItem('textBoxHomeAdd', input.target.value);
//     newHomeAdd.innerHTML = localStorage.getItem('textBoxHomeAdd');
//     textBoxHomeAdd.hidden = true;
//     editHome.innerHTML = 'Edit';
//     deleteHome.hidden = false;
// }

// async function addNewHomeAdd() {
//     const neww = await newHomeAdd()
//     .then(editHome.addEventListener('click', saveNewHomeAdd));
// }

// editHome.addEventListener('click', addNewHomeAdd);

// //Edit button play

// const guestName = document.getElementsByClassName('John'); //how to get by class
// const editNameButton = document.getElementById('edit-name');
// const newName = document.getElementById('new-name');

// newName.hidden = true;
// guestName.hidden = false;

// const editName = () => {
//     guestName.hidden = true;
//     newName.hidden = false;
//     newName.innerHTML = guestName.innerHTML;
//     editNameButton.innerHTML = 'Save';
// }

// const saveName = (input) => {
    
// }




















