var listOfProducts = [[], []]
var listToSearch = {}
var id = 0

class Product {

    constructor (name, img, line, price) {
        // The img have to be into the products folder
        this.name = name;
        this.img = img;
        this.id = id+1; id++
        listOfProducts[line-1].push(this);
        listToSearch[id] = this
        this.price = price
    }
}

ProdL1_1 = new Product("Cafetera Moulinex", "img-cafetera-moulinex.jpg", 1, 15000);
ProdL1_2 = new Product("TV Samsung Smart", "img-tv-samsung-smart.jpg", 1, 40000);
ProdL1_3 = new Product("MACBOOK PRO", "img-macbook-pro-2019.jpg", 1, 35000);
ProdL1_4 = new Product("Samsung Galaxy", "img-samsung-galaxy-s10.jpg", 1, 50000)

ProdL2_1 = new Product("Samsung Galaxy","img-samsung-galaxy-s10.jpg",2, 40000)
ProdL2_2 = new Product("TV Samsung Smart", "img-tv-samsung-smart.jpg", 2, 40000)

const ProductsLine1 = document.getElementById("PL1")
for (let i = 0; i < listOfProducts[0].length; i++) {

    element = listOfProducts[0][i]

    var textToAdd = `` + `<div class="product-card">` +
    `<img src="img/productos/${element.img}" alt="">` +
    `<label for="PCI${element.id}">${element.name}</label>` +
    `<br>` +
    `<input type="submit" id="PCI${element.id}" value="Comprar"> <!-- PCI: Product Card Input -->` +
    `</div>` + ``

    ProductsLine1.innerHTML += textToAdd

}

const ProductsLine2 = document.getElementById("PL2")
for (let i=0; i<listOfProducts[1].length; i++) {
    element = listOfProducts[1][i]

    var textToAdd = `` + `<div class="product-card">` +
    `<img src="img/productos/${element.img}" alt="">` +
    `<br>` +
    `<label for="PCI${element.id}">${element.name}</label>` +
    `<br>` + 
    `<input type="submit" id="PCI${element.id}" value="Comprar"> <!-- PCI: Product Card Input -->` +
    `</div>` + ``

    ProductsLine2.innerHTML += textToAdd
}

document.getElementById("login-button").addEventListener("click", (e) => {
    let name = document.getElementById("II1").value
    let email = document.getElementById("II2").value
    let password = document.getElementById("II3").value
    
    if(
        (name == "ferrixCoding") &&
        (email == "federico.porras2006@gmail.com") &&
        (password == "justLearning")
    ) {
        document.getElementById("HL2_right").style.display = "none"
        document.getElementById("personLogged").style.display = "inline-block"

        document.getElementById("nameLogged").innerHTML = "FerrixCoding"
    }
    else {

        var anonymousMode = confirm("No tenes una cuenta registrada, ¿Deseas acceder en anonimo?")

        if (anonymousMode) {
            document.getElementById("HL2_right").style.display = "none"
            document.getElementById("personLogged").style.display = "inline-block"
            document.getElementById("nameLogged").innerHTML = "Anonymous User"
        }
    }
})

var sectionShoppingCart = document.getElementById("ShoppingCart")
var ShoppingCart = []

function addProdShopCart(product){
    let placeToAdd = document.getElementById("ShoppingCartBody")

    let textToAdd = `<tr>` +
        `<td>${product.name}</td>` +
        `<td>$${product.price}</td>` +
        `</tr>`

    placeToAdd.innerHTML += textToAdd
}

var buyInputs = document.querySelectorAll(".product-card input")
for (let i=0; i<buyInputs.length; i++) {
    buyInputs[i].addEventListener("click", () => {
        let chosenProduct = listToSearch[i+1]
        ShoppingCart.push(chosenProduct)
        addProdShopCart(chosenProduct)
    })
}

document.getElementById("clearShoppingCartButton").addEventListener("click", () => {
    console.log("asad")
    ShoppingCart = []
    let placeToClear = document.getElementById("ShoppingCartBody")
    placeToClear.innerHTML = ""
})