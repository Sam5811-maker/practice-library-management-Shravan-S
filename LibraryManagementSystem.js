// Practice: Library Management System
// Instructions
// Scenario:
// You are tasked with designing a library management system. The library lends out various types of items such as books, DVDs, and magazines. 
// While all items share some common properties (e.g., title, id, isAvailable), each type has unique properties and behaviors. 
// For example:
// ● Books have an author and a genre.
// ● DVDs have a director and duration.
// ● Magazines have an issueNumber and publisher.
class LibraryItem {

    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
    returnItem() {
        console.log(`The following item/s are returned : ${this.title}`);
        return this.isAvailable = true;
    }

    checkOut() {
        if(this.isAvailable) {
            console.log(`The following item/s are checked out: ${this.title}`);
            return this.isAvailable = false;
        } else {
            return `This book is not available for checkout`;
                 }
                }
            }   
    // Tasks
// 1. Step 1: Create a Base Class
// ○ Define a class LibraryItem to represent shared properties (title, id, isAvailable) and methods (e.g., checkOut() and
// returnItem()).
// 2. Step 2: Extend the Base Class
// ○ Create child classes Book, DVD, and Magazine that inherit from
// LibraryItem.
// ○ Add unique properties and methods for each child class:
// ■ Book: Add properties like author and genre.
class Books extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id); // Access properties and methods
        this.author = author;
        this.genre = genre;
        
    }
}
// ■ DVD: Add properties like director and duration.
    class DVD extends LibraryItem {
        constructor(title, id, director, duration) {
            super(title, id);
            this.director = director;
            this.duration = duration;
        }
    }
// ■ Magazine: Add properties like issueNumber and publisher.
    class Magazine extends LibraryItem {
        constructor(title, id, issueNumber, publisher) {
            super(title, id);
            this.issueNumber = issueNumber;
            this.publisher = publisher;
        }
    }

let harryPotter = new Books("Harry Potter", '03345', "JK Rowling", "Fiction");
console.log(`*********Checkout Status************`);
harryPotter.checkOut(); 
console.log(harryPotter);

console.log(`*********Return Status************`);
harryPotter.returnItem();
console.log(harryPotter);

let Despicable = new DVD("Despicable 4", '023452', "Chris Renaud", "1:20");
console.log(`*********Checkout Status************`);
Despicable.checkOut(); 
console.log(Despicable);

console.log(`*********Return Status************`);
Despicable.returnItem();
console.log(Despicable);

let Discovery = new Magazine("Discover Iceland ", '023452', "Vol-4", "Discovery");
console.log(`*********Checkout Status************`);
Discovery.checkOut(); 
console.log(Discovery);

console.log(`*********Return Status************`);
Discovery.returnItem();
console.log(Discovery);






// 3. Step 3: Instantiate Objects
// ○ Create instances of each class and test the shared and unique
// methods.
// 1
// 4. Step 4: Test the Inheritance
// ○ Use inherited methods like checkOut() and returnItem() to
// manage the availability of items.
// ○ Test accessing and displaying unique properties of each child
// class.


