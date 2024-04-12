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
let image = document.getElementsByClassName("thumbnails")
let images = Object.values(image)
let level = 0
console.log(level)

//Lightbox
let lightbox = document.getElementById("lightbox")
let light_close = document.getElementById("light_close")
let light_next = document.getElementById("light_next")
let light_previous = document.getElementById("light_previous")


// forEach é uma função para eu olhar cada elemento de um array!
// Preciso estudar mais sobre
// TODO: Adicionar a camada branca em cima da imagem selecionada
images.forEach(function(elementos) {
    elementos.addEventListener("click", image_click)
    
    function image_click()
    {
        level = images.indexOf(elementos) + 1
        console.log(level)

        change_image()
    }
});

//TODO: Fazer "ver mais de perto a imagem"
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
        big_images[x].src = `images/image-product-${level}.jpg`
    }
}

function next()
{
    if (level >= images.length)
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
    console.log(level)
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