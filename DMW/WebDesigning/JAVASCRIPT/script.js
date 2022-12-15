// alert("Hello World")

// console.log("Hello World")

// document.write("Hello World")

// var nationality = "Pakistani";
// var age = 12
// var weight = 23.5
// var Fee = true


// alert(nationality);
// console.log(age)
// document.write(weight)
// document.write("<br>")
// document.write(Fee)



// var name; //variable declear
// name = 'Xyz' //intialize
// alert(name)

// var age = 15
// var weight = 40
// var newWeight = age + weight;
// var new_weight = weight + 20
// alert(new_weight)//60
// alert(newWeight)//55

// var isFeePaid = false
// console.log(isFeePaid)

// var name1;
// alert(name1)

// var x = 0
// console.log(x);



// var a = "Hello"
// var b = typeof a;
// document.write(typeof a);
// console.log(b);
// alert(b);


// var num = 25
// var str = "Hello Javascript"
// var bol = true
// var  dec = 23.98;

// document.write("Integer data " + " ")
// document.write( "<b>"+typeof num+ "</b>");
// document.write("<br>")
// document.write("String data" + " ")
// document.write(typeof str);
// document.write("<br>")
// document.write("Boolean data" + " ");
// document.write(typeof  bol)
// document.write("<br>")
// document.write("Decimal data" + " ")
// document.write(typeof dec);


// var i = 5 ;j = 9
// alert(i)
// console.log(j)

// var a = 8
// var c = a * 4
// alert(c); //32

// var a = 45
// var b = 5 * a * 4  //5(45) * 4
// alert("result of b is"+b);
// console.log(a);

// var str1 = "Hello"+ " "+ "World"
// document.write("<br>")
// document.write(str1);


// var a = 5;
// var c = a + 10
// alert(c); //15

// var b = 5
// b += 5  // b = b + 5; //  10 = 5+5



//Increment Decrement Operator

//Prefix Increment Example

// var age = 13
// var newAge = ++age;
// document.write(age);
// document.write("<br>");
// document.write(newAge)

// //Postfix Increment Example
// var a = 13
// var b = a++
// document.write("<br>");
// document.write(a);//14
// document.write("<br>");
// document.write(b);//13

// var firstname = "John"
// var lastname = "David"

// var fullname = firstname+ " " +lastname
// alert(fullname)

// var name = "what is your name"
// var getname = prompt(name);
// console.log("Name" +getname);


// var question = "What is your name?";  
// var defaultAnswer = "John";
// var name = prompt(question, defaultAnswer);  
// alert("Name = "+ name);


// var age = "what is your age"
// var newAge = prompt(age);  //12
// var new2 = newAge + 5; //
// console.log("Age: "+new2)//125

// var age = prompt("what is your age")//5
// var num = 4;
// var ageUpd = parseInt(age)
// var newValue =  ageUpd + num //54 //9
// alert(newValue);


// var age1 = parseInt(prompt("what is your age"));
// var val = age1 + 6;
// alert(val);

// var grade = parseFloat(prompt("What is your perc"));
// var total = grade + 5;
// console.log(total);


// var a = 3
// var b = 3
// var c = '3'
// var d = a == b
// var e = a === c
// console.log(d) //true
// console.log(e)
// console.log(b > 9);

//LOGICAL OPERATOR
// var a = 60;
// var b = a > 50	&& a < 70;  
// alert(b);


// var c = 80;
// var d = c > 50	&& c < 70;  
// alert(d);

//CONDITION STATEMENT

// var age = 19
// if(age < 9){ //19 < 9
//     alert("age: "+age);
// }

// var a = parseInt(prompt("Enter num"));
// if (a == 5){
//     alert("Value of num is "+a);
// }

// var quantity = parseInt(prompt("Enter quantity of product"));
// if(quantity < 0 || isNaN(quantity)){
//     alert("Please enter a positive num");  
// }
// console.log("Quantity is: "+quantity)


// var gen = prompt("Enter your gender: ");
// var age = parseInt(prompt("Enter your age: "));
// if(age >= 18 && gen == 'male' || gen == 'Male' || gen == 'MALE'){
//     alert("You are allow to ride");
// }
// else{
//     alert("You are not allow to ride");
// }


//IF ELSE IF CONDITION
// var result = parseInt(prompt("Enter your percentage"));
// if(result >= 80 && result <= 100){
//     document.write(" Your grade is A1");
// }
// else if(result >= 70 && result <= 80){
//     document.write("Your grade is A");
// }
// else if(result >= 60 && result <= 70){
//     document.write("Your grade is B");
// }
// else if(result >= 50 && result <= 60){
//     document.write("Your grade is C");
// }
// else if(result >= 40 && result <= 50){
//     document.write("Your grade is D");
// }
// else if(result >= 0 && result <= 39){
//     document.write("Failed");
// }
// else{
//     document.write("You did not entered correct percenatge");
// }
//NESTED IF EXAMPLE

// var username = prompt("Enter userName");
// var pass = prompt("Enter Password");
// if(username != "" && pass != ""){

//     if(username == 'admin' && pass == 'admin123'){
//         alert("Login Successful");
//     }
// }
// else{
//     alert("Login Failed")
// }

//Second Example
// var age = parseInt(prompt("Enter your age"));
// var educ = prompt("Enter your education: ");
// if(age >= 18){
//     if(educ == 'Matric' || educ == 'Inter' || educ == 'Graduate'){
//         alert("You are eligible")
//     }
// }
// else{
//     alert("You are not eligible")
// }

//***********SWITCH CASE********************/

// var designation = prompt("Enter designation"); //manager
// switch(designation){
//     case 'Manager':
//         alert("Salary:20000")
//     break;
//     case 'Developer':
//         alert("Salary:30000")
//     break;
//     default:
//         alert("Enter proper designation");
//     break;
// }`

//**************WHILE LOOOP******************* */

// var i = 0
// while(i<10){
//     console.log(i);
//     i++;
// }

// var num = 0;
// var sum = 0;
// document.write("<h3>Sum Of First 10 Numbers</h3>"+"<br>")
// while(num <= 10){
//     sum = sum + num;
//     num++
//     document.write(sum+ " "+ "="+ " "+ sum+ "+" +num+ "<br>");
// }
// alert("Sum of first 10 numbers: "+sum)
//****************DO WHILE LOOP***************/

// var i;
// i = parseInt(prompt("Enter your num"));
// do{
//     i++;
//     console.log("My country name is Pakistan")
// }
// while(i<5)

//*************DO WHILE LOOP*************/
// var ans = '';
// do{
//     ans = prompt('Capital of united state');
// }
// while(ans != 'Washington');
// alert('Capital of united state is: '+ans);

//*********BREAK STATEMENT */
// document.write("BREAK STATEMENT"+"<br>"); 
// var i;
// for(i = 1;i<=5;i++){ //2<=5 //3<=5
//     if(i == 3){ //2==3 //3 == 3
//         break; 
//     }
// document.write(i+"<br>"); //1,2
// }

//*********Continue STATEMENT */
// document.write("CONTINUE STATEMENT"+"<br>"); 
// var j;
// for(j = 1;j<=5;j++){ //2<=5 //3<=5
//     if(j == 3){ //2==3 //3 == 3
//         continue; 
//     }
// document.write(j+"<br>"); //1,2
// }
//*************Display even using Continue Statement**********/

// var result = ""
// for(var k=0;k<=15;k++){
//     if((k%2) != 0){
//         continue;
//     }
//     result = result + k +'\n';
// }
// alert("Even Numbers: \n"+result);
//*****************ARRAY START***************** */
//1st Way of Array
// var marital_status = new Array(3)
// marital_status[0] = 'Single'
// marital_status[1] = 'Married'
// marital_status[2] = 'Divorced'

// document.write(marital_status[0]+"<br>"+marital_status[1]+ "<br>"+marital_status[2])


// var names = new Array("John","David","Kevin");
// alert("List of Students:\n"+names[0]+ ','+names[1]+ ','+names[2])


//*************TWO DIMENSIONAL ARRAY*********** */
// var emp = new Array(3)
// emp[0]= new Array ('abc','25','matric')
// emp[1]= new Array ('xyz','29','inter')
// emp[2]= new Array ('efg','24','matric')

// document.write("Name: "+emp[0][0]) //abc
// document.write("<br>")
// document.write("Age: "+emp[1][1]) //29
// document.write("<br>")
// alert("Education:" +emp[2][2]) //matric


//*************ARRAY METHODS************* */
// var flowers = new Array('Rose','Sunflower','Daisy')
// document.write("Number of flowers: "+flowers.length)
// document.write("<br>")
// document.write("Flowers: "+flowers.join('*'))
// document.write("<br>")
// document.write("Orchid and Lily are Added "+flowers.push("Orchid","Lily"))
// document.write("<br>")
// document.write(flowers)
// document.write("<br>")
// document.write("Flowers in Ascending Order: "+flowers.sort())
// document.write("<br>")
// document.write("Flowers Removed: "+flowers.pop())
// document.write("<br>")
// document.write(flowers)



//*************FUNCTIONS*******************/

// function message(){
//     alert("Hello World");
// }
// message()
//Add Two numbers using Function
// function add(){
//     var sum;
//     var num1 = parseInt(prompt("Enter num1"))
//     var num2 = parseInt(prompt("Enter num2"))
//     sum = num1 + num2;
//     console.log(sum);

// }
// add();
//*********FUNCTIONS WITH PARAMETER************** */
// function sum(val1,val2){
//     var res = val1+ val2;
//     alert(res)
// }
// sum(2,4)

// function sub(num1,num2){
//     var result = num1 - num2
//     alert(result)
// }
// var value1 = parseInt(prompt("Enter value 1: "))//4
// var value2 = parseInt(prompt("Enter value 2: "))//5

// sub(value1,value2)
//*********LOCAL AND GLOBAL VARIABLE***********/
// var num = 2;
// function add(){
//     var sum = num + 5 //7
//     alert(sum)
// }
// add()
// console.log(sum);

//Passing by Value

// var num = 5;
// function pass(val1){
//     var sum = val1 + val1;
//     alert("Sum of val1: "+sum);//10
// }
// pass(num);//5
// console.log(num);//5

//passing by reference

// var arr = [5,9,8,7] 
// function func(val){
//       val[0] = 20
//       alert(val)    //[20,9,8,7]
// }
// func(arr)
// console.log(arr);   //[20,9,8,7]

//Return Statement
// function add(num1,num2){
//     var result = num1 + num2;
//     alert(result)
// //     return result;
// }
//  var sum = (add(2,2)+10)
//  console.log(sum);

//*******SECOND EXAMPLE******* */
//  function square(x){
//        var sq = x * x;
//        alert(sq);//9
//        return sq;
//  }
//  var demo = (square(3)+3);
//  console.log(demo)//12


//******BOOK EXAMPLE********** */

// var names = new Array('James','Kevin','Brad')
// function change_name(name){
//       name[0] = 'Stuart'    
// }
// function Display_names(){
//       document.write("<h3> List of student names </h3>")
//       document.write('<ul>')
//       for(var i = 0;i<names.length;i++){
//             document.write('<li>'+names[i]+'</li>')
//       }
//       document.write('</ul>')
//       //**NEW UPDATED ARRAY PRINT****/
//       change_name(names)
//       document.write("<h3> List of Change student names </h3>")
//       document.write('<ul>')
//       for(var i = 0;i<names.length;i++){
//             document.write('<li>'+names[i]+'</li>')
//       }
//       document.write('</ul>')
// }
// Display_names(names)


//***********FACTORIAL PROGRAM************** */

// function fact(num){  //5
//       var i; 
//       var f = 1;
//       for(i = 1;i<=num;i++){
//             f = f * i; //1=1*1,2=1*2,=6=2*3,24=6*4,120=24*5
//       }
//       return f
// }
// var val = parseInt(prompt("Enter a num number to calculate it's factorial"));
// var res = fact(val)
// alert("Factorial of the num " +val+ " is: "+res);


//***********JAVASCRIPT OBJECT************** */
//FIRST METHOD TO USE OBJECT
// var obj = {
//       Name:'Danish',
//       Age:20,
//       Education:'Inter'
// }
// document.write("Print These Object: "+ "<br>"+
// "Name: "+obj.Name+"<br>"+
// "Age: "+obj.Age+"<br>"+
// "Education: "+obj.Education)
//Second Method to use Object
// var person = new Object()
// person.Name = 'Xyz'
// person.Salary = 20000
// person.City = 'Karachi'
// console.log("Person Object data Get:\n "+
// person.Name+"\n"+person.City+"\n"+person.Salary)

// //************Constructor Object*********//
// function employee(Name,age,salary,education){
//       this.FName = Name; //xyz
//       this.Age = age;
//       this.Salary = salary
//       this.Education = education
// }

// var Employee1 = new employee('Abc',24,20000,'inter')
// var Employee2 = new employee('Xyz',25,30000,'inter')

// alert("Name: "+Employee1.FName+"\n"+"Age: "+Employee2.Age+
// "\n"+"Salary: "+Employee1.Salary+"\n"+"Education: "+Employee2.Education)

// document.write("<br>")

// for(var key in Employee1){
//       document.write(key+ ": "+Employee1[key]+"<br>")
// }
//*********MATH BUILTIN OBJECT*********** */

// var propertyValue = Math.PI

// document.write("Property value is: "+propertyValue);
// document.write("<br>")
// var square = Math.SQRT2
// document.write("Squar value is: "+square);
// var power = Math.pow(3,2)
// document.write("<br>")
// document.write("Power: "+power)
// //******** DATE OBJECT******* */
// var today = new Date()
// var date = today.getDate();
// var month = today.getMonth();
// var year = today.getFullYear();
// document.write("<br>")
// document.write(date+'/'+month+'/'+year);
// document.write("<br>")
// //**********STRING OBJECT*************/
// var full_name = new String('DavidJamesTaylor')
// document.write("Number of char are: "+full_name.length+ '<br>');
// document.write("Charcter at position 6 is: "+full_name.charAt(6)+'</br>')
// document.write("Student\'s Full Name is :"+full_name.toUpperCase());

//*********EVENT FUNCTIONS***********
function FirstEvent(){

      console.log('Hello Function')
}

function SecondEvent(){
      alert("You have right click")
}

function ThirdEvent(){
      alert('Mouse Over')
}

function first(){
      alert('Mouse Out');
}

function formSubmit(){
      alert("Your form has been successfully submitted")
}
function load(){
      alert("Page loaded successfully")
}



function change(){
      document.getElementById("demo").innerHTML = "Change Some Text"
}


function On(){
      document.getElementById("img").src = "Images/onImage.jpg"
}

function Off(){
      document.getElementById("img").src = "Images/offImage.jpg"
}