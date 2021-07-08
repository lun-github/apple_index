let body = document.querySelector('body'),
    div = document.createElement('div'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('div.adv');

function changeBgImg() {
    document.body.style.backgroundImage = "url(img/apple_true.jpg)";
}
changeBgImg();

document.body.innerHTML = document.body.innerHTML.replace('Мы продаем только технику Apple', 'Мы продаем только подлинную технику Apple');

column[1].removeChild(adv);

console.log(column);
