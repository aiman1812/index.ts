#! usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
 {message: "enter number1",type: "number",name: "number1"},
 {message: "enter number2",type: "number",name: "number2"},
 {
    message:"select one of the operation to perform operation",
    types:"list",
    name:"operator",
    choices:["+","-","*","/","**","%"],
},   
]);

if(answer.operator === "+") {
    console.log(answer.number1 + answer.number2);
}else if(answer.operator === "-") {
    console.log(answer.number1 - answer.number2);
}else if(answer.operator === "*") {
    console.log(answer.number1 * answer.number2);
}else if(answer.operator === "/") {
    console.log(answer.number1 / answer.number2);
}else if(answer.operator === "**") {
    console.log(answer.number1 **answer.number2);
}else if(answer.operator === "%") {
    console.log(answer.number1 % answer.number2);
}else{
    console.log("please select valid operator")
}