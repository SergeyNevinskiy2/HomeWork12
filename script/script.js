'use strict';

const currentTime = new Date();
let userAge = prompt('Введите год рождения?');

if ( userAge === null || userAge === '' || userAge === isNaN(+userAge)) {
    alert('Жаль, что вы не захотели ввести свой возраст')
}else {
    userAge = currentTime.getFullYear() - userAge;
};

const userCity = prompt('В каком городе живешь?');

if(userCity === null || userCity === '') {
    alert('Жаль, что не ввели название города')
}

const sport = {
    football:'Messi',
    basketball:'Jordan',
    tennis: 'Niva'
}

let userSport = prompt('Какой любимый спорт?');

if(userSport === null || userSport === '') {
    alert('Жаль, что не ввели любимый спорт')

}else if (sport[userSport.toLocaleLowerCase()] !== undefined) {
    userSport = `как ${sport[userSport.toLocaleLowerCase()]}`;
}else {
    userSport = 'Спортсменом'   
};

switch (userCity.toLocaleLowerCase()) {

case '' :
    alert('Ты ничего не ввел');
break;

case 'киев' :
    alert(`Тебе ${userAge}, ты живешь в столице Украины, круто ты хочешь стать ${userSport}`);
break;

case 'москва' :
    alert(`Тебе ${userAge}, ты живешь в столице орков идиот, круто ты хочешь стать ${userSport}`);
break;

case 'минск' :
    alert(`Тебе ${userAge}, ты живешь в столице друзей орков идиот, круто ты хочешь стать ${userSport}`);
break;
default :
alert(`Тебе ${userAge}, ты живешь в ${userCity}, круто ты хочешь стать ${userSport}`);
};