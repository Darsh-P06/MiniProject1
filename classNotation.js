/**
 * Mini Project 1
 * Using JavaScript Class Notation for Course and Assignment
 * Produces the same output as plainObjects.js
 *
 * This version uses modern ES6 classes, which provide
 * cleaner syntax while still using prototypes under the hood.
 */


//Assignment Class
//Represents one assignment with a title and due date
class Assignment {
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }

    //Method to print assignment information
    printAssignment(){
        console.log(' Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

//Course Class 
//Represents an academic course containing multiple assignments
class Course {
    constructor(courseName, instructor, creditHours, assignments){
        this.courseName = courseName;
        this.instructor = instructor; 
        this.creditHours = creditHours;
        this.assignments = assignments;
    }

    //Method to print course info and all assignment details
    courseInfo(){
        console.log('Course: ' + this.courseName + 
            ' | Instructor: ' + this.instructor + 
            ' | Credit Hours: ' + this.creditHours
        );

        console.log('Assignments >>>');
        for(let a of this.assignments){
            a.printAssignment();
        }
    }
}

//Create Assignment objects using class notation 
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

//create course objects using class notation
let c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1, a2]);
let c2 = new Course('Data Science', 'Dr. Evil', 6, [a3, a4]);

// -------------------
// Output
// -------------------
c1.courseInfo();
c2.courseInfo();
