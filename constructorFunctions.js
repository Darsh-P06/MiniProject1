/**
 * Mini Project 1
 * Using Constructor Functions for Course and Assignment
 * Produces the same output as plainObjects.js
 */

// -------------------
// Constructor Functions
// -------------------

function Assignment(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
}
// Method added to the Assignment prototype
// Prints the assignemnt information in formatted form
Assignment.prototype.printAssignment = function () {
    console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
};

//Course Constructor
//Represents a university course containing multiple assignments
function Course(courseName, instructor, creditHours, assignments) {
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = assignments; // array of Assignment objects
}

//Method added to the course prototype 
//Prints course details and all its assignments
Course.prototype.courseInfo = function () {
    console.log('Course: ' + this.courseName +
                ' | Instructor: ' + this.instructor +
                ' | Credit Hours: ' + this.creditHours);

    console.log('Assignments >>>');
    for (let a of this.assignments) {
        a.printAssignment();
    }
};


// Assignment objects
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

// Course objects
let c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1, a2]);
let c2 = new Course('Data Science', 'Dr. Evil', 6, [a3, a4]);

// -------------------
// Output
// -------------------
c1.courseInfo();
c2.courseInfo();

