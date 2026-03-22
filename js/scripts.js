
// input from user
let name=prompt('Enter your Name');
let mathsMark=prompt('enter the mark in Maths');
let englishMark=prompt('enter the mark in English');
let chemistrymark=prompt('enter the mark in Chemistry');
let physicsMark=prompt('enter the mark in Physics');
let MalayalamMark=prompt('enter the mark in Malayalam');


// convert user string input to number
mathsMark=Number(mathsMark);
englishMark=Number(englishMark);
chemistrymark=Number(chemistrymark);
physicsMark=Number(physicsMark);
MalayalamMark=Number(MalayalamMark);


// total marks in subject
totalMarks=mathsMark+englishMark+chemistrymark+physicsMark+MalayalamMark;

//average of total mark
 avgOfMark=totalMarks/5

//  Grade based on the average marks 
let grade;
if(avgOfMark>=90){
    grade="A+ \nEliglible For Higher Studies"
}else if(avgOfMark>=80 && avgOfMark<=89){
    grade="A \nEliglible For Higher Studies"
}else if(avgOfMark>=70 && avgOfMark<=79){
    grade="B \nEliglible For Higher Studies"
}else if(avgOfMark>=60 && avgOfMark<=69){
    grade="C \nEliglible For Higher Studies"
}else if(avgOfMark>=50 && avgOfMark<=59){
    grade="D \nEliglible For Higher Studies"
}else{
    grade="F \nNot Eliglible For Higher Studies"
}

//display using alert function
 alert("Name: "+name+"\nTotal Mark: "+totalMarks+"\nAverage: "+avgOfMark+"\nGrade: "+grade )

