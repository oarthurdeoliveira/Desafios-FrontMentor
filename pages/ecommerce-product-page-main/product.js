let add = document.getElementById("add")
let remove = document.getElementById("remove")
let item_element = document.getElementById("items")
let items = 0

item_element.innerHTML = items
items = Number(items)

let main_image = document.getElementById("main_image")
main_image.src = "images/image-product-1.jpg"
let image = document.getElementsByClassName("thumbnails")
let images = Object.values(image)



// forEach é uma função para eu olhar cada elemento de um array!
// Preciso estudar mais sobre
// TODO: Adicionar a camada branca em cima da imagem selecionada
images.forEach(function(elementos) {
    elementos.addEventListener("click", image_click)
    
    function image_click()
    {
        let number = images.indexOf(elementos)
        main_image.src = `images/image-product-${number + 1}.jpg`
        
    }
});

//TODO: Fazer "ver mais de perto a imagem"
main_image.addEventListener("click", teste)

add.addEventListener("click", add_item)
remove.addEventListener("click", remove_item)

function teste()
{
    console.log(images[1])
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