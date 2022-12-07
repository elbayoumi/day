
function Student(_width, _height, _array) {
    this.width = _width;
    this.height = _height;
    this.array = _array;

}



function Courses(_id, _name, coursName, _grade) {
    this.id = _id;
    this.name = _name;
    this.coursName = coursName;
    this.grade = _grade;
}
Student.prototype.desplay = function () {
    let value = "\n"
    for (let i = 0; i < this.array.length; i++) value += "\n" + this.array[i].coursName + " : " + this.array[i].grade
    return value
}
Student.prototype.desplayGrade = function () {
    let value = 0
    for (let i = 0; i < this.array.length; i++) value += parseInt(this.array[i].grade)
    return value / this.array.length
}
let cours1 = new Courses(1, "eaa", " react ", "100%")
let cours2 = new Courses(2, "za3bola", " html", "100%")
let cours3 = new Courses(3, "zaater", " css", "101%")
let cours4 = new Courses(4, "mano", " angular", "100%")
let cours5 = new Courses(5, "abdo", " java script", "99%")
let cours6 = new Courses(6, "medo", " c++", "99.9%")
let Students = [cours1, cours2, cours3, cours4, cours5, cours6];
let StudentOpj = new Student(10, 10, Students)
console.log(`the total of Courses  with grades    : \n ${StudentOpj.desplay()} \n
the average grade is : ${StudentOpj.desplayGrade()}`); 
