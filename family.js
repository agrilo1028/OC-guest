const firstMemberDetails = document.getElementById('first-member-details');
const placeholder = document.getElementById('add-member');
const addButton = document.getElementById('add-button');
const firstDelete = document.getElementById('delete1');
const bDelete = document.getElementById('bdelete');
const newMemberBlock = document.getElementById('new-member');
const buttons = document.getElementById('buttons');
const newName = document.getElementById('family-member-name');
const textarea = document.getElementById('name');
const saveButton = document.getElementById('save');
const select = document.getElementById('parentesco');
const novoParentesco = document.getElementById('novo-parentesco');
const bEdit = document.getElementById('bedit');
const date = document.getElementById('date')

newMemberBlock.hidden = true;
novoParentesco.hidden = true;
placeholder.hidden = true;


//second section

const newMemberBlock2 = document.getElementById('new-member2');
const buttons2 = document.getElementById('buttons2');
const newName2 = document.getElementById('family-member-name2');
const placeholder2 = document.getElementById('add-member2');
const addButton2 = document.getElementById('add-button2');
const textarea2 = document.getElementById('name2');
const saveButton2 = document.getElementById('save2');
const select2 = document.getElementById('parentesco2');
const novoParentesco2 = document.getElementById('novo-parentesco2');
const b2Delete = document.getElementById('b2delete');
const b2Edit = document.getElementById('b2edit');
const date2 = document.getElementById('date2')

newMemberBlock2.hidden = true;
novoParentesco2.hidden = true;

//third section

const newMemberBlock3 = document.getElementById('new-member3');
const buttons3 = document.getElementById('buttons3');
const newName3 = document.getElementById('family-member-name3');
const placeholder3 = document.getElementById('add-member3');
const addButton3 = document.getElementById('add-button3');
const textarea3 = document.getElementById('name3');
const saveButton3 = document.getElementById('save3');
const select3 = document.getElementById('parentesco3');
const novoParentesco3 = document.getElementById('novo-parentesco3');
const b3Delete = document.getElementById('b3delete');
const b3Edit = document.getElementById('b3edit');
const date3 = document.getElementById('date3')

newMemberBlock3.hidden = true;
novoParentesco3.hidden = true;


//first section

const delete1 = () => {
    placeholder.hidden = false;
    firstMemberDetails.hidden = true;
}
firstDelete.addEventListener('click', delete1);

const edit1 = () => {

}

const newNember = () => {
    newMemberBlock.hidden = false;
    buttons.hidden = true;
    placeholder.hidden = true;
    saveButton.hidden = false;
    select.hidden = false;
    select.value = 'select'
    textarea.hidden = false;
    textarea.value = '';
    date.value = 'dd.mm.yyyy'
}

const display = () => {
    buttons.hidden = false;
    addButton.hidden = true;
    textarea.hidden = true;
    saveButton.hidden = true;
    select.hidden = true;
    novoParentesco.hidden = false;
    novoParentesco.style.textDecoration = 'underline';
    newName.hidden = false;
}

const delete11 = () => {
    placeholder.hidden = false;
    newMemberBlock.hidden = true;
    newName.hidden = true;
    newName.innerHTML = '';
    novoParentesco.hidden = true;
}

const edit = () => {
    buttons.hidden = true;
    textarea.hidden = false;
    newName.hidden= true;
    select.hidden = false;
    novoParentesco.hidden = true;
    saveButton.hidden = false;
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
bDelete.addEventListener('click', delete11);
bEdit.addEventListener('click', edit);
textarea.addEventListener('change', updateValue);
    function updateValue(e) {
        newName.textContent = e.target.value;
    };
select.addEventListener('change', updateValue2)
    function updateValue2(i) {
        novoParentesco.textContent = i.target.value;
    };
saveButton.addEventListener('click', display);

//second section

const newNember2 = () => {
    newMemberBlock2.hidden = false;
    buttons2.hidden = true;
    placeholder2.hidden = true;
    saveButton2.hidden = false;
    select2.hidden = false;
    select2.value = 'select'
    textarea2.hidden = false;
    textarea2.value = '';
    date.value = 'dd.mm.yyyy'
}

const display2 = () => {
    buttons2.hidden = false;
    addButton2.hidden = true;
    textarea2.hidden = true;
    saveButton2.hidden = true;
    select2.hidden = true;
    novoParentesco2.hidden = false;
    novoParentesco2.style.textDecoration = 'underline';
    newName2.hidden = false;
}

const delete2 = () => {
    placeholder2.hidden = false;
    newMemberBlock2.hidden = true;
    newName2.hidden = true;
    newName2.innerHTML = '';
    novoParentesco2.hidden = true;
}

const edit2 = () => {
    buttons2.hidden = true;
    textarea2.hidden = false;
    newName2.hidden= true;
    select2.hidden = false;
    novoParentesco2.hidden = true;
    saveButton2.hidden = false;
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

b2Delete.addEventListener('click', delete2);

b2Edit.addEventListener('click', edit2);
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

const newNember3 = () => {
    newMemberBlock3.hidden = false;
    buttons3.hidden = true;
    placeholder3.hidden = true;
    saveButton3.hidden = false;
    select3.hidden = false;
    select3.value = 'select'
    textarea3.hidden = false;
    textarea3.value = '';
    date.value = 'dd.mm.yyyy'
}

const display3 = () => {
    buttons3.hidden = false;
    addButton3.hidden = true;
    textarea3.hidden = true;
    saveButton3.hidden = true;
    select3.hidden = true;
    novoParentesco3.hidden = false;
    novoParentesco3.style.textDecoration = 'underline';
    newName3.hidden = false;
}

const delete3 = () => {
    placeholder3.hidden = false;
    newMemberBlock3.hidden = true;
    newName3.hidden = true;
    newName3.innerHTML = '';
    novoParentesco3.hidden = true;
}

const edit3 = () => {
    buttons3.hidden = true;
    textarea3.hidden = false;
    newName3.hidden= true;
    select3.hidden = false;
    novoParentesco3.hidden = true;
    saveButton3.hidden = false;
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

b3Delete.addEventListener('click', delete3);

b3Edit.addEventListener('click', edit3);
textarea3.addEventListener('change', updateValue11);
    function updateValue11(eee) {
        newName3.textContent = eee.target.value;
    };
select3.addEventListener('change', updateValue31)
    function updateValue31(iii) {
        novoParentesco3.textContent = iii.target.value;
    };
saveButton3.addEventListener('click', display3);