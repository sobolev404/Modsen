// Создайте класс Book со свойствами названия,
// автора и года публикации. Включите метод
// отображения сведений о книге. Создайте
// подкласс под названием «Ebook», который
// наследуется от класса «Book» и включает
// дополнительное свойство для цены книги.
// Переопределите метод отображения, чтобы
// включить цену книги. Создайте экземпляр
// класса «Электронная книга» и отобразите его
// сведения

class Book {
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    
    displayInfo(){
        console.log("Title: "+this.title)
        console.log("Author: "+this.author)
        console.log("Year: " +this.year)
    }
}

class Ebook extends Book{
    constructor(title,author,year,price){
        super(title,author,year);
        this.price=price+"$";
    }
    
    displayInfo(){
        super.displayInfo();
        console.log("Price: " +this.price);
    }
}

let harryPotterBook = new Ebook('Harry Potter',"Joanne Rowling",1997,"29.99")
harryPotterBook.displayInfo()