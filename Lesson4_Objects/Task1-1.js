"use strict";
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
// Product.prototype.make25PercentDiscount = function () {
//     this.price *= 0.75;
// };
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}
let product = new Product("BigOne", 1000);
product.make25PercentDiscount();
