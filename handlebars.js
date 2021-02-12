
// alert('Hi there');
const toHide = document.getElementById('hide-insta');
const profileAndFaqs = document.getElementById('show-profile');
const menuIcon = document.getElementById("menu-icon");
const menuIcon2 = document.getElementById('menu-icon2');

toHide.hidden = false;
profileAndFaqs.hidden = true;
menuIcon.hidden = false;

let showProfile = () => {
    profileAndFaqs.hidden = false;
    profileAndFaqs.style.display = 'inline-block';
    toHide.hidden = true;
    menuIcon.hidden = true;
}

let reset = () => {
    profileAndFaqs.hidden = true;
    profileAndFaqs.style.display = 'none';
    toHide.hidden = false;
    menuIcon.hidden = false;
}

menuIcon.addEventListener('click', showProfile);
menuIcon2.addEventListener('click', reset);
