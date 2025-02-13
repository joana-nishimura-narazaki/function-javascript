# Functions  

This repository contains the activities I completed as part of the **"Functions"** course at Digital Innovation One.  

## Activity 1: Approved Students  
- I created a function that receives an array of students and a number representing the final average grade.  
- The function iterates through the array and populates a new auxiliary array only with students whose grades are greater than or equal to the final average.  
- I applied the **object destructuring** technique to manipulate the necessary properties of each student.  

## Activity 2: This  
- Using the given function `calculaIdade`, I used the **call** and **apply** methods to modify the value of `this`.  
- I created custom objects to test and understand how `this` behaves in different contexts.

function calculateAge(years) {  
    return `In ${years} years, ${this.name} will be ${  
        this.age + years  
    } years old.`;  
}     
