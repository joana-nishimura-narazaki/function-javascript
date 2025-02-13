const students = [  
    {  
        name: 'John',  
        grade: 5,  
        class: '1B',  
    },  
    {  
        name: 'Sophia',  
        grade: 9,  
        class: '1B',  
    },  
    {  
        name: 'Paul',  
        grade: 6,  
        class: '2C',  
    },  
    {  
        name: 'Zane',  
        grade: 3,  
        class: '2C',  
    },
];


function approvedStudents(arr, average){
    let approved = []; 

    for(let i=0; i <arr.length; i++){

       const {grade, name} = arr[i];

     if(arr[i].grade >= average) {
     approved.push(name);
     }
    }
  return approved;
}

console.log(approvedStudents(students, 5))