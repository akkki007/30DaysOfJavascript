//classes

class Person {
  name = "akshay";
  age = 30;
  func = () => {
    return "Hello User";
  };
  updateAge = (age) => {
    this.age = age;
    console.log(this.age);
  };
}

obj = new Person();
console.log(obj.func());
obj.updateAge(20);

class Student extends Person {
  studentId = 102;
  method = () => {
    return this.studentId
  }
}
