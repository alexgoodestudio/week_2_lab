// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
let speedLimit= 50;
let mySpeed= 55;

// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"

if(myspeed>speedLimit){
  console.log('Slow down! Mom is mad!');
}
else if(mySpeed == speedLimit){
  console.log('Everyione is happy!!');
}
else (mySpeed< speedLimit){
  console.log('Speed up! DAd is mad!!')
}

// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
let alarmSet = True;
let openDoor= True;

// using a conditional, determine if alarm is set. 

if (alarmSet == True)
  if (openDoor == True){
    console.log("Sound Alarm!");
}
//Because if (boolean) statements are checking to see if the boolean is true, if nothing is stated in the "condition" this can be even more simplified too:
if (alarmSet && openDoor){
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
    console.log("Sound Alarm!");
}else{
  console.log('Everything is fine'!)
}

// otherwise, print "Everything is fine." to the console.

// create two variables, username and password
let username;
let password;

// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console

if ((username === "Tommy123" && password === "12345")||(username === Timmy456 && password === "6789")){
  console.log("Admin Access Successful");
}else{
  console.log("Admin Access Denied");
}
// otherwise, print "Admin Access Denied"



// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
let studentGrade;
let stdentClass;

switch(studentGrade) {
  case 'K':
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
      studentClass = "Elementary";
      break;
  case 7:
  case 8:
      studentClass = "Middle";
      break;
  case 9:
      studentClass = "Freshman";
      break;
  case 10:
      studentClass = "Sophomore";
      break;
  case 11:
      studentClass = "Junior";
      break:
  case 12:
      studentClass = "Senior"
      break:
  default:
      console.log("error");
}
console.log(studentClass);


// write a for loop that will iterate backwards from 10 to -10
for(let i = 10; i >= -10; i--){
  console.log(i)
}

// write a do/while loop that prints 1 through 50
let iterator = 1;
do{
  console.log(iterator);
  iterator++;
}while(iterator <= 50);

// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4


// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 11; i > 10; i++){
        console.log(i);
    } 
*/
