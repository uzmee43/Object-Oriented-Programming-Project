#! /usr/bin/env node
import { longFormatters } from "date-fns";
import inquirer from "inquirer";

class Student{
    name:string;
    constructor(n:string){
        this.name = n
    }


}
class Person{
    student:Student[]=[]
    addStudent(obj:Student){
        this.student.push(obj)

    }
}
const person = new Person();
const programStart=async(person:Person)=>{
    do{
    console.log("*****WELLCOME****!");
    const ans = await inquirer.prompt({
        name:"select",
        type:"list",
        message:"\n ****whom would you like to interact with? ****\n ",
        choices:["staff","student","Exit"]
    })
    if(ans.select == "staff"){
        console.log("**....you approach the staff room.....**");
        
        
    }
    else if(ans.select=="student"){
        const ans = await inquirer.prompt({
            name:"student",
            type:"input",
            message:"*****Enter the student name***** "
        } )
        const student = person.student.find(val => val.name == ans.student)

        
    
        if(!student){
            const name = new Student(ans.student)
            
        person.addStudent(name)
        console.log(`****Hello Dear I am ${name.name} nice to meet you **** `);
        console.log("\n *:*:*new student added*:*:* \n");
        console.log(" ***current student list !*** ");
        console.log(person.student);
        
        
    }
     if(student){
            console.log(`\n ** Hello Dear I am ${student.name} nice to see you again **\n `);
            console.log("***Existing student list***");
            console.log(person.student);
            
    
            
      }   }   
        
    else if(ans.select =="Exit" ){
        console.log("EXITING THE PROGRAM......... ");
        process.exit()
    }
    
  
    }while(true)

    }

    programStart(person)













