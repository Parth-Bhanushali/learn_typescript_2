"use strict";
const scores = [];
const names = [];
// this can take either boolean or number as an input and return either boolean or number
function identityOne(val) {
    return val;
}
// this can take number as an input and return as a string
function identityTwo(val) {
    return val;
}
// this will lock the value type being passed in as argument
function identityThree(val) {
    return val;
}
identityThree("2");
identityThree(true);
// same as identityThree. It doesn't need to be T or Type always, you can use anything here.
function identityFour(val) {
    return val;
}
identityFour({ brand: "test", type: 1 }); // Have to use this way if custom type
// with array and arrow functions
function getSearchProducts(products) {
    // some database operations
    const index = 3;
    return products[index];
}
const getMoreSearchProducts = (products) => {
    // some database operations
    const index = 10;
    return products[index];
};
const getMoreSearchProducts2 = (products) => {
    // some database operations
    const index = 10;
    return products[index];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, "4");
function anotherFunction2(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction2(3, "4");
anotherFunction2(3, 4.6);
function anotherFunction3(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction3(5, {});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
