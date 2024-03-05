const scores: Array<number> = []
const names: Array<string> = []

// this can take either boolean or number as an input and return either boolean or number
function identityOne(val: boolean | number): boolean | number {
    return val
}

// this can take number as an input and return as a string
function identityTwo(val: any): any {
    return val
}

// this will lock the value type being passed in as argument
function identityThree<Type>(val: Type): Type {
    return val
}

identityThree("2")
identityThree(true)

// same as identityThree. It doesn't need to be T or Type always, you can use anything here.
function identityFour<T>(val: T): T {
    return val
}



interface Bottle {
    brand: string,
    type: number 
}

identityFour<Bottle>({brand: "test", type: 1})      // Have to use this way if custom type






// with array and arrow functions

function getSearchProducts<T>(products: T[]): T {    // must return an element from passed array
    // some database operations
    const index = 3
    return products[index]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // some database operations
    const index = 10
    return products[index]
}

const getMoreSearchProducts2 = <T,>(products: T[]): T => {  // some people use comma as this to avoid any confusions that this is any related to jsx component tag and rather it is a generic tag. This is also valid.
    // some database operations
    const index = 10
    return products[index]
}




function anotherFunction<T, U> (valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, "4")

function anotherFunction2<T, U extends number> (valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction2(3, "4")
anotherFunction2(3, 4.6)


interface Database {
    connection: string
    username: string
    password: string
}

function anotherFunction3<T, U extends Database> (valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction3(5, {})




interface Quiz {
    name: string
    type: string
}
interface Course {
    name: string
    author: string
    subject: string
}
class Sellable<T> {     // this class may define the common use cases of Quiz and Course
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}