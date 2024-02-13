"use strict";
class Course {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Student {
    constructor(name, courses = [], balance = 0) {
        this.name = name;
        this.courses = courses;
        this.balance = balance;
        this.generateStudentID();
    }
    generateStudentID() {
        this.id = Student.idCounter++;
    }
    enroll(course) {
        this.courses.push(course);
        this.balance += course.cost;
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received. Remaining balance: $${this.balance}`);
    }
    showStatus() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log('Courses Enrolled:');
        this.courses.forEach((course) => {
            console.log(`${course.name} - $${course.cost}`);
        });
        console.log(`Total Balance: $${this.balance}`);
    }
}
Student.idCounter = 10000;
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    findStudentById(studentId) {
        return this.students.find((student) => student.id === studentId);
    }
}
// Example Usage
const system = new StudentManagementSystem();
const course1 = new Course('Math', 500);
const course2 = new Course('History', 400);
const student1 = new Student('John Doe');
const student2 = new Student('Jane Smith');
system.addStudent(student1);
system.addStudent(student2);
student1.enroll(course1);
student1.enroll(course2);
student2.enroll(course1);
student1.viewBalance();
student2.viewBalance();
student1.payTuition(200);
student1.viewBalance();
console.log('\nStudent Status:');
student1.showStatus();
student2.showStatus();
