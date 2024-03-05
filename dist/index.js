"use strict";
var _User_town;
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.city = ""; // by default it is public so no need to annotate
        this.state = "Maharashtra"; // private will make it accessible within the class only
        _User_town.set(this, ""); // private but this is javascript related, while keyword private is from typescript
        this.email = email;
        this.name = name;
    }
}
_User_town = new WeakMap();
const parth = new User("p@p.com", "parth");
parth.city = "Chennai";
parth.state;
// another cleaner way to write class in typescript might be following:
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Vadodara";
    }
}
const parth2 = new User2("p@p.com", "parth", 12);
// getters and setters
class User3 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.availableToChild = true;
        this.city = "Vadodara";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set courseCountErrorProne(courseNum): void {
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
const parth3 = new User3("p@p.com", "parth", 12);
// Inheritance and access modifiers
class SubUser extends User3 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // private property of parent won't be accessible to child. To get access, it needs to be marked as protected rather.
        this.availableToChild = true; // e.g. of accessing protected property
    }
}
console.log(new SubUser("email", "name", 123).getAppleEmail);
