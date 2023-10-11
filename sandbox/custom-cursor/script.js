const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', event => {
    cursor.setAttribute("style", "top: "+(event.pageY - 10)+"px; left: "+(event.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})