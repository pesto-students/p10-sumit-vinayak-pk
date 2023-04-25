var Person = function(){};

Person.prototype.initialize = function(name,age){
    this.name = name;
    this.age = age;
}

var Teacher = function(){};

Teacher.prototype.teach = function(subject){

    console.log(`${this.name} is now teaching ${subject}`)

}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var teacher = new Teacher();

teacher.initialize('Adam', 45);
teacher.teach('Inheritance')