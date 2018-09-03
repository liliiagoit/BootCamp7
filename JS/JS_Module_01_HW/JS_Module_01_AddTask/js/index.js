"use strict"

// Add hometask TourAgency

const sharm = 15;
const hurgada = 25;
const taba = 6;

const tourClient = prompt('Введите необходимое количество мест!');
let getNumber = tourClient;
if (Number.isInteger(+getNumber)) {
     if (getNumber > 25) {
        alert('Извините, столько мест нет ни в одной группе!');
    } else {
        if (getNumber <= taba) {
            let answer = confirm('Есть свободные места в группе `Таба`. Желаете поехать?');
            if(answer) {
                alert('Приятного путешествия в группе <Таба>');
            } else {
                    alert('Нам очень жаль, приходите еще!');
                } 
            } if(getNumber >= taba && getNumber <= sharm) {
                let answer = confirm ('Есть свободные места в группе `Шарм`. Желаете поехать?');
                if(answer) {
                    alert('Приятного путешествия в группе <Шарм>');
                } else {
                        alert('Нам очень жаль, приходите еще!');
                    }
                } if(getNumber >= sharm && getNumber <= hurgada) {
                    let answer = confirm ('Есть свободные места в группе `Хургада`. Желаете поехать?');
                    if(answer) {
                        alert('Приятного путешествия в группе <Хургада>');
                     } else  {
                            alert('Нам очень жаль, приходите еще!');
                        }
                    }
    }
}  else {
    alert("Ошибка ввода!");
} 