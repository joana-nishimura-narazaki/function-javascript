function calculateAge(years) {  
    return `In ${years} years, ${this.name} will be ${  
        this.age + years  
    } years old.`;  
}  

const person1 = {  
    name: 'Amelia',  
    age: 23,  
};  

const person2 = {  
    name: 'Marcia',  
    age: 20,  
};  

const person3 = {  
    name: 'Jonas',  
    age: 13,  
};  

console.log(calculateAge.call(person3, [4]));