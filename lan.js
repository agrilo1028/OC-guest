//log in page

let username = document.getElementById('username');
let passBox = documnent.getElementById('passBox');
let arrow = document.getElementById('arrow');

const validUser = (value) => {
    if(username.length > 1) {
        return value;
    } else {
        return 'Your username must have at least two characters'
    }
};

const validPass = value => {
    if(passBox.length < 7) {
        return value;
    } else {
        return 'Your password must have at least seven characters'
    }
}

const submit = () => {
    if(validUser && validPass) {
        window.location.href = './lan-home.html'
    } else {
        window.location.href = './ochome.html'
    }s
}

submit();





//hotels list page

let stayedHotels = document.getElementById('stayed');
let nonStayedHotels = document.getElementById('notStayed');


class hotel {
    constructor(name, logo){
        this._name = name;
        this._logo = logo;
        this._stayed = false;
    }

    get(name) {
        return this._name;
    }

    get(logo) {
        return this._logo;
    }

    get(stayed) {
        return this._stayed;
    }

    hasStayed = (hotel) => this._stayed = !this._stayed;

    createStayedHotel = (hotel) => {
        let recentlyStayed = [];
        let nonStayed = [];
        if(hasStayed) {
            recentlyStayed.push(hotel._logo,hotel._name);
            return recentlyStayed;
        } else {
            nonStayed.push(hotel._logo, hotel._name);
            return nonStayed;
        }
        
    }
};

const LAN = new hotel('The Lanesborough', './images/LAN.png')

hasStayed(LAN);
console.log(createStayedHotel(LAN));
// let names = 'Ana'
// console.log(names);

const hello = 'Hello World';

console.log(hello);






















// function createMenuItem(name) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
// }
// // get the ul#menu
// const menu = document.querySelector('#menu');
// // add menu item
// menu.appendChild(createMenuItem('Home'));
// menu.appendChild(createMenuItem('Services'));
// menu.appendChild(createMenuItem('About Us'));






// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (restockSuccess()) {
//             console.log(`${itemName} are in stock at ${distributorName}`)
//             resolve(itemName);
//         } else {
//             reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);