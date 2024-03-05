"use strict";
// type narrowing
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide an ID");
        return;
    }
    id.toLowerCase();
}
// something to be cautious here about is, though it may look like every case is handled here
// but actually it does not handle the case where string is empty (which is a falsy value) or
// when no value(s) are passed over maybe.
// this may not break the code but these cases should be handled according to the documentation
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) { // used when values can be constructed using new keyword
        console.log(x.toDateString());
    }
    else {
        x.toUpperCase();
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    // if you hover over the pet in below conditions, typescript is still confused
    // because the return type of isFish method is boolean, which even though handles
    // the cases below but isFish method does not behaving as properly as it should be.
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function isFish_2(pet) {
    return pet.swim !== undefined;
}
function getFood_2(pet) {
    // Now hover over the pet below and you see the correct behavior
    if (isFish_2(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        // case "rectangle":
        //     return shape.length * shape.width
        default: // according to documentation, it is good to have this case. If some new type (e.g. Rectangle in this case) gets added then the code must yell at you to handle the case
            const _defaultForShape = shape; // one good use case of never which depicts here that it will never be assigned to the shape so useful and forces you to handle every possible case.  
            return _defaultForShape;
    }
}
