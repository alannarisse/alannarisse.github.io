$(".read-more").click(function() {
    $('.more-2-read').toggle(2000);
});

let addTodo = localStorage.getItem('todo')
$('.shop-list').append(`<li>${addTodo}</li>`)

$('.add-more').click(function() {
    let newItem = $('.shop-item-field').val()
    $('.shop-list').append(`<li>${newItem}</li>`)
    localStorage.setItem('todo', `${newItem}`)
    $('.shop-item-field').val('')
})


// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");