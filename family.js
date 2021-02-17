const firstMemberDetails = document.getElementById('first-member-details');
const placeholder = document.getElementById('add-member');
const addButton = document.getElementById('add-button');
const firstDelete = document.getElementById('delete1');

placeholder.hidden = true;

const delete1 = () => {
    placeholder.hidden = false;
    firstMemberDetails.hidden = true;
}
firstDelete.addEventListener('click', delete1);

const newMemberBlock = document.getElementById('new-member');
const buttons = document.getElementById('buttons');
const newName = document.getElementById('family-member-name');
const textarea = document.getElementById('name');
const saveButton = document.getElementById('save');
const select = document.getElementById('parentesco');
const novoParentesco = document.getElementById('novo-parentesco')

newMemberBlock.hidden = true;
novoParentesco.hidden = true;

const newNember = () => {
    newMemberBlock.hidden = false;
    buttons.hidden = true;
    placeholder.hidden = true;
    saveButton.hidden = false;
}

const display = () => {
    buttons.hidden = false;
    addButton.hidden = true;
    textarea.hidden = true;
    saveButton.hidden = true;
    select.hidden = true;
    novoParentesco.hidden = false;
    novoParentesco.style.textDecoration = 'underline';
}

addButton.addEventListener('click', newNember);
textarea.addEventListener('change', updateValue);
    function updateValue(e) {
        newName.textContent = e.target.value;
    };
select.addEventListener('change', updateValue2)
    function updateValue2(i) {
        novoParentesco.textContent = i.target.value;
    };
saveButton.addEventListener('click', display);

const newMemberBlock2 = document.getElementById('new-member2');
const buttons2 = document.getElementById('buttons2');
const newName2 = document.getElementById('family-member-name2');
const placeholder2 = document.getElementById('add-member2');
const addButton2 = document.getElementById('add-button2');
const textarea2 = document.getElementById('name2');
const saveButton2 = document.getElementById('save2');
const select2 = document.getElementById('parentesco2');
const novoParentesco2 = document.getElementById('novo-parentesco2')

newMemberBlock2.hidden = true;
novoParentesco2.hidden = true;

const newNember2 = () => {
    newMemberBlock2.hidden = false;
    buttons2.hidden = true;
    placeholder2.hidden = true;
    saveButton2.hidden = false;
}

const display2 = () => {
    buttons2.hidden = false;
    addButton2.hidden = true;
    textarea2.hidden = true;
    saveButton2.hidden = true;
    select2.hidden = true;
    novoParentesco2.hidden = false;
    novoParentesco2.style.textDecoration = 'underline';
}

addButton2.addEventListener('click', newNember2);
textarea2.addEventListener('change', updateValue1);
    function updateValue1(ee) {
        newName2.textContent = ee.target.value;
    };
select2.addEventListener('change', updateValue21)
    function updateValue21(ii) {
        novoParentesco2.textContent = ii.target.value;
    };
saveButton2.addEventListener('click', display2);

//third section

const newMemberBlock3 = document.getElementById('new-member3');
const buttons3 = document.getElementById('buttons3');
const newName3 = document.getElementById('family-member-name3');
const placeholder3 = document.getElementById('add-member3');
const addButton3 = document.getElementById('add-button3');
const textarea3 = document.getElementById('name3');
const saveButton3 = document.getElementById('save3');
const select3 = document.getElementById('parentesco3');
const novoParentesco3 = document.getElementById('novo-parentesco3')

newMemberBlock3.hidden = true;
novoParentesco3.hidden = true;

const newNember3 = () => {
    newMemberBlock3.hidden = false;
    buttons3.hidden = true;
    placeholder3.hidden = true;
    saveButton3.hidden = false;
}

const display3 = () => {
    buttons3.hidden = false;
    addButton3.hidden = true;
    textarea3.hidden = true;
    saveButton3.hidden = true;
    select3.hidden = true;
    novoParentesco3.hidden = false;
    novoParentesco3.style.textDecoration = 'underline';
}

addButton3.addEventListener('click', newNember3);
textarea3.addEventListener('change', updateValue11);
    function updateValue11(eee) {
        newName3.textContent = eee.target.value;
    };
select3.addEventListener('change', updateValue31)
    function updateValue31(iii) {
        novoParentesco3.textContent = iii.target.value;
    };
saveButton3.addEventListener('click', display3);
