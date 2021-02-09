// let username = '';
// let passBox = '';


const validUser = (value) => {
    if(username.length > 1) {
        return value;
    } else {
        console.log('Your username must have at least two characters')
    }
};

const validPass = value => {
    if(passBox.length < 7) {
        return value;
    } else {
        console.log('Your password must have at least seven characters')
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
