
function Box(_width, _height, _array) {
    this.width = _width;
    this.height = _height;
    this.array = _array;

}



function Books(_id, _name, _writer_name, _numOfPages) {
    this.id = _id;
    this.name = _name;
    this.writer_name = _writer_name;
    this.num_of_pages = _numOfPages;
}
Box.prototype.valueof = function () {
    let value = 0
    for (let i = 0; i < this.array.length; i++)value += this.array[i].num_of_pages
    return value
}
let book1 = new Books(1, "road to react", "ROBINWIERUCH", 150)
let book2 = new Books(2, "road to react", "ROBINWIERUCH", 200)
let book3 = new Books(3, "road to react", "ROBINWIERUCH", 101)
let book4 = new Books(4, "road to react", "ROBINWIERUCH", 103)
let book5 = new Books(5, "road to react", "ROBINWIERUCH", 105)
let book6 = new Books(6, "road to react", "ROBINWIERUCH", 106)
let boxs = [book1, book2, book3, book4, book5, book6];
let BoxOpj = new Box(10, 10, boxs)
console.log(`the totel pages of books ${BoxOpj.valueof()} 
the area is : ${BoxOpj.height * BoxOpj.width}`); 
