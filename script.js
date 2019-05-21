//beign 

// BMI = mass / height^2 = mass/(height * height). 

// Declare 

var massMark, massJohn, heightMark, heightJohn;
var BMIMark, BMIJohn, highMark, highJohn;

massMark = prompt ('Mark \'s mass' );
heightMark = prompt ('Mark \'s height' );
massJohn = prompt ('John \'s mass' );
heightJohn = prompt('John \'s height');

BMIMark = massMark/ heightMark**2; 
BMIJohn = massJohn/ heightJohn**2;

highMark = BMIMark > BMIJohn;
highJohn = BMIJohn > BMIMark; 

console.log('Is Mark\'s BMI higher than John\'s? ' + highMark);

//end
