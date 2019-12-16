const inquirer = require ("inquirer");

const files = require ("./files");

module.exports = {
   askGithubCredentials: () => {
       const questions = [
           {
            name:"username",
            type:"input",
            message:"Enter your Github username or email adress:", 
            validate: function( value ) {
                if (value.length){
                    return true; 
                } else {
                    return "please enter your username or email adress.";
                }
            }
           },
           {
               name: "password", 
               type: "password", 
               message: "enter your password", 
               validate: function(value){
                   if (value.length){
                       return true;
            } else { 
                return "please enter your password. ";
            } 
           }
         }
       ];
       return inquirer.prompt(questions); 
     } , 
};