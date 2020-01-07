const colors = require ("colors");
const { teaTypes } = require("./teaTimes"); 

module.exports = function (){
    console.log("Reccomended steep times by tea type"); 
    console.log('---------'); 

   /* teaTypes.forEach((type) => {
    console.log("%s %s", colors.bold(teaTypes.name), colors.blue(teaTypes.steepTime));
        });
    }; */

/*
    teaTypes.forEach((type) => {
        console.log('%s %s', colors.bold(teaTypes.name), colors.grey('/ '+ teaTypes.steepTime));
    });
};*/



const teaInfo = Object.entries(teaTypes)
for (const [name, steepTime] of teaInfo){
    console.log(colors.blue (`${name}`), colors.green (`${steepTime}`)  )
}
}