"use strict";
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
var productsWithImgs = products.filter(p => p.photos != null && p.photos.length > 0);
var productsPriceSort = products.sort(function (a, b) {
    return a.price - b.price;
});