const input = document.querySelector('.login');
const button = document.querySelector('.submit');
const form = document.querySelector('.login_form');

const validateInput = ({target})=>{
    if(target.value.length > 2){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled','');
    }
}

const handleSumbit = (event)=>{
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input',validateInput);
form.addEventListener('submit',handleSumbit);