class Course {
    constructor(public name: string, public cost: number) {}
  }
  
  class Student {
    static idCounter: number = 10000;
  
    constructor(
      public name: string,
      public courses: Course[] = [],
      public balance: number = 0
    ) {
      this.generateStudentID();
    }
  
    private generateStudentID() {
      this.id = Student.idCounter++;
    }
  
    enroll(course: Course) {
      this.courses.push(course);
      this.balance += course.cost;
    }
  
    viewBalance() {
      console.log(`Balance for ${this.name}: $${this.balance}`);
    }
  
    payTuition(amount: number) {
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
  
  class StudentManagementSystem {
    private students: Student[] = [];
  
    addStudent(student: Student) {
      this.students.push(student);
    }
  
    findStudentById(studentId: number): Student | undefined {
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
  