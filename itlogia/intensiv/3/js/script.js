/* let aaa = document.getElementsByClassName("hero__heading")[0].style.color = "red" */


let btn = document.getElementById("main__action")
btn.onclick = function () {
    document.getElementById("auto").scrollIntoView({ behavior: "smooth" });
}



var buttons = document.getElementsByClassName("car_btn")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("bron").scrollIntoView({ behavior: "smooth" });
    }
}



let request_btn = document.getElementById("request_btn")
request_btn.onclick = function () {

    if (document.getElementById("name").value === "") {
        alert("Заполните поле Имя")
    } else if (document.getElementById("tel").value === "") {
        alert("Не заполнено поле Телефон")
    } else if (document.getElementById("auto_input").value === "") {
        alert("Не выбран автомобиль")
    } else {
        alert("Заявка успешно отправлена")
    }

}


document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.rolls');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".header");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
})
});
