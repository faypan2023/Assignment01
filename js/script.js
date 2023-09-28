// STEP 1 Convert the following highlighted identifiers to Camel Case notation:
let someMonth
function theMonth()
let currentMonth
let summerMonth
let myLibraryFunction

// STEP 2 an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
let numericLiteral = 7;
let stringLiteral = "hello world!";
let booleanLiteral = true;
let nullLiteral = null;

// STEP 3 two examples of complex / variable expressions.
function calculateTotal(price, quantity){
    return price*quantity;
}
let foodPrice=10;
let foodQuantity=12;
let totalCost=calculateTotal(foodPrice, foodQuantity)//example 1

let firstName = "victor"
let lastName = "kay"
let fullName = firstName + " " + lastName;
console.log(fullName)//example 2

//STEP 4 Declare (but do not assign) 9 variables for the following identifiers: 
let firstName
let lastName
let strAddress
let city
let state
let strZipCode
let intYourAge
let referralSource
let boolMayWeContactYou

//STEP 5 demonstrate 3 ways for declaring and assigning values to the above variables.
let firstName;
firstName = "Nolan";
let city;
city = "San Diego";
let boolMayWeContactYou;
boolMayWeContactYou = true;//way 1


let firstName = "Nolan";
let city = "San Diego";
let boolMayWeContactYou = true;//way 2

let firstName = "Nolan", city = "San Diego", boolMayWeContactYou = true;//way 3

//STEP 6 Create a variable.Add a number and a string and display the coerced result in the browser’s console window.
let age = 35;
alert("Happy birthday to your" + age + "years old!")

//STEP 7
let boolValue = true;
let strValue = "is a number."
let result1 = boolValue + " " + strValue;
console.log(result1)//add a Boolean and a string and display the coerced result.

let numValue = 7;
let boolValue = true;
let result2 = numValue + boolValue;
console.log(result2)//add a number and a Boolean and display the coerced result.

//STEP 8 fix the string literal
let someString = 'Who once said, "\Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString)

//STEP 9
let x = null;
console.log(x);//Create a variable that produces a null value in the console window.

let y;
console.log(y);//create a variable that produces an undefined value in the console window.

//STEP 10 Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
console.log(typeof "hello");
console.log(typeof 7);
console.log(typeof true);
console.log(typeof {phoneNumber:"8582578567"});
console.log(typeof undefinedItem);

//STEP 11 use the concatenation operator (+) to display text in the alert box
let firstName = "Fei"
let lastName = "Pan"
alert("Hello" +" " +firstName +" " +lastName+ ", welcome to the JavaScript class!")

//STEP 12 Declare a variable called name and set it equal to your name.
//Substitute your name in the previous alert string with the variable instead.
let name = "Fei Pan"
alert(`Hello ${name}, welcome to the JavaScript class!`)

//STEP 13 
let name = "Fei Pan";
let course = "JavaScript";
let alertMessage = "Hello" +" " + name + ", welcome to the " + course +" " + "class!"
alert(alertMessage)

//STEP 14 add a break line
let name = "Fei Pan";
let course = "JavaScript";
let alertMessage = "Hello" +" " + name + ", \nwelcome to the " + course +" " + "class!"
alert(alertMessage)

//STEP 15 Replace the hardcoded string of your name with a prompt that asks the user for their name.
let name= prompt("Please enter your name:")
let course = "JavaScript";
let alertMessage = "Hello " + name + ", \nwelcome to the " + course + " class!"
alert(alertMessage)

//STEP 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking.
let name= prompt("Please enter your name:")
let course=prompt("Please enter the class you are taking:");
let alertMessage = "Hello " + name + ", \nwelcome to the " + course + " class!"
alert(alertMessage)

//STEP 17 Display the sum of 10 and 20 in the console window.
let x = 10;
let y = 20;
let sum = x+y;
console.log(sum);

//STEP 18 Add and assign 20 to that variable 20 and display the result in the console window.
let x = 20;
x += 20;
console.log(x);

//STEP 19 Multiply and assign 5 to that variable 20
let x = 20;
x *= 5;
console.log(x);//display 100.

//STEP 20 Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variabl.
let x = 20%3;
x/=1;
console.log(x);

//STEP 21 Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
let a = 5;
let b = 10;
console.log(b>a || b-a>a)

//STEP 22 Using a set of Comparison and Logical operators, write an application that evaluates to false 
let a = 5;
let b = "5";
console.log(a=b && a===b);
