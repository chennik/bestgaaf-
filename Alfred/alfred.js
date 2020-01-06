const program = require ('commander');
program.version = ('1.0.0');

program
.option ("-d, --debug","output debug so you have a clue of what you're doing")
.option("-b, --black"," Black Tea, the drink of gods ")
.option("-g, --green"," Green tea, also pretty good ")
.option("-m, --mint"," Mint tea, pretty good with some middle eastern food")
.option("-r, --rooibos","Rooibos, yikes ");

program.parse(process.argv); 


if (program.debug) console.log(program.opts());
console.log("Tea Type:");
if (program.black) console.log("- Black tea !!");
if (program.green) console.log("Green tea is also cool");