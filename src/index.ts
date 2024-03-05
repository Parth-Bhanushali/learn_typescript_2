class User {
    email: string
    name: string
    city: string = ""                                   // by default it is public so no need to annotate
    private readonly state: string = "Maharashtra"      // private will make it accessible within the class only
    #town: string = ""                                  // private but this is javascript related, while keyword private is from typescript

    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const parth = new User ("p@p.com", "parth")
parth.city = "Chennai"
parth.state




// another cleaner way to write class in typescript might be following:
class User2 {
    readonly city: string = "Vadodara"
    constructor(
        public email: string, 
        public name: string,
        private userId: number
    ) {}
}

const parth2 = new User2 ("p@p.com", "parth", 12)



// getters and setters
class User3 {
    
    private _courseCount = 1
    protected availableToChild: boolean = true
    readonly city: string = "Vadodara"
    
    constructor(
        public email: string, 
        public name: string,
        private userId: number
    ) {}

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this._courseCount
    }

    set courseCountErrorProne(courseNum: number): void {      // setters can not have return type as annotation in typescript

    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

    private deleteToken() {     // only accessible within the class
        console.log("Token deleted")
    }
}

const parth3 = new User3 ("p@p.com", "parth", 12)


// Inheritance and access modifiers
class SubUser extends User3 {
    isFamily: boolean = true

    changeCourseCount() {
        this._courseCount = 4   // private property of parent won't be accessible to child. To get access, it needs to be marked as protected rather.
        this.availableToChild = true    // e.g. of accessing protected property
    }
}

console.log(new SubUser("email", "name", 123).getAppleEmail);


export {}

