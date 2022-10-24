// Person
class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

// Teacher
class Teacher extends Person {

    constructor(firstName, lastName, yearsTeachingExperience){
        super(firstName, lastName);
        this.yearsTeachingExperience = yearsTeachingExperience;
    }
}

// Student
class Student extends Person {
    constructor(firstName,lastName,hobbies=[]){
        super(firstName,lastName);
        this.hobbies = hobbies;
        this.money = 100;
    }

    sendMoney(amount, target){
        this.money -= amount;
        target.receiveMoney(amount);
    }

    receiveMoney(amount){
        this.money += amount;
    }
}

// Lecture
// Students and teacher
class Lecture{
    constructor(topic, zoomLink, teacher, students=[]){
        this.topic = topic;
        this.zoomLink = zoomLink;
        this.teacer = teacher
        this.students = students;
        this.inProgress = false;
    }

    createAttendanceList(){
        const fullNames = []
        for (let i = 0 ; i < this.students.length ; i++) {
            const student = this.students[i];
            fullNames.push(student.fullName());
        }
        return fullNames;
    }
}


// Tests
const teacherInstance1 = new Teacher("Robert", "Santos", 2);
const teacherInstance2 = new Teacher("Neil", "Mos", 10);
const studentInstance1 = new Student("Steve", "Tobias", ["golf","drum wizard","baking"]);
const studentInstance2 = new Student("Colby", "Leed", ["pizza"]);
const studentInstance3 = new Student("Pascal", "Schaer", ["protecting the city of gotham"]);

const lectureInstance1 = new Lecture("OOP Intro", "zoomLink.com/pwd=herberb", teacherInstance1, [studentInstance1, studentInstance2, studentInstance3])

// console.log(teacherInstance1.fullName())
// console.log(studentInstance1.fullName())
// console.log(lectureInstance1)

studentInstance1.sendMoney(50, studentInstance2)
console.log(studentInstance1.money)
console.log(studentInstance2.money)