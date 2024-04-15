let add = document.getElementById("add")
let remove = document.getElementById("remove")
let item_element = document.getElementById("items")
let items = 0

item_element.innerHTML = items
items = Number(items)

// Images
let big_images = document.getElementsByClassName("big_image")
light_main.src = "images/image-product-1.jpg"
main_image.src = "images/image-product-1.jpg"
let thumbnails = document.getElementsByClassName("thumbnails")
let thumb_picture = document.querySelectorAll(".thumbnails")
thumbnails = Object.values(thumbnails)
let level = 0
console.log(level)

//Lightbox
let lightbox = document.getElementById("lightbox")
let light_close = document.getElementById("light_close")
let light_next = document.getElementById("light_next")
let light_previous = document.getElementById("light_previous")


let list = []
// forEach é uma função para eu olhar cada elemento de um array!
// Preciso estudar mais sobre
thumbnails.forEach(function(elementos) {
    elementos.addEventListener("click", image_click)
    let source = elementos.getAttribute("src")
    source = source.replace('-thumbnail', '')
    list.push(source)
    list = [...new Set(list)]
    

    function image_click()
    {
        level = source.match(/\d+/)
        change_image()
    }
})


main_image.addEventListener("click", open)
light_close.addEventListener("click", close)
light_next.addEventListener("click", next)
light_previous.addEventListener("click", previous)

add.addEventListener("click", add_item)
remove.addEventListener("click", remove_item)

function open()
{
    lightbox.style.display = "flex"
}

function close()
{
    lightbox.style.display = "none"
}

function change_image()
{
    console.log("level " + level)
    for(let x = 0; x < big_images.length; x++)
    {
        big_images[x].src = list[level - 1]
    }
}

function next()
{
    if (level >= list.length)
    {
        console.log("Fazer nada")
    }
    else
    {
        level++
        change_image()
    }
}
function previous()
{
    if (level <= 1)
    {
        console.log("Fazer nada")
    }
    else
    {
        level--
        change_image()
    }
}

function add_item()
{
    console.log("adicionando!")
    items += 1
    item_element.innerHTML = items
}

function remove_item()
{
    if (items <= 0)
    {
        console.log("Não pode diminuir mais!")
    }
    else
    {
        console.log("removendo!")
        items -= 1
        item_element.innerHTML = items
    }
}