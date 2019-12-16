const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files  = require ('./lib/files'); 
const inquirer = require ("./lib/inquirer");

clear();

console.log(
    chalk.blueBright(
        figlet.textSync("GittyNitty",{horizontalLayout: "full"})
    )
); 

if (files.directoryExists(".git")){
    console.log(chalk.red("this already exists mate"));
    process.exit();
} 
else {
    console.log("These are not the gits you're looking for "); 
}

const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    console.log(credentials); 
}; 

run(); 