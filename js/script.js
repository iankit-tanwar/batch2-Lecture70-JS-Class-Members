

class MyClassA {
    // property /variable
    x = 10;
    z;

    // constructor method
    constructor() { // constuctor is a especial method to used initilaize the property 
        this.z = 70;
    }

    // method
}

class MyClassB extends MyClassA {
    // property /variable
    y = 60;

    // constructor method
    constructor() {

        super()
    }
    // method
    show() {
        console.log(this.x + this.y + this.z)
    }
}
let ob = new MyClassB();
ob.show();