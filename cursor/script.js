const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', event => {
    cursor.setAttribute("style", "top: "+(event.pageY - 20)+"px; left: "+(event.pageX - 20)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 5000)
})