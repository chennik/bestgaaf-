// tea types and their reccomended steeptimes are exported here 

exports.teaTypes = [
    {name: " Black tea ", steepTime: "2 minutes and then 20 minutes of pure bliss"},
     {name: " Green tea ", steepTime: "6  minutes"},
      {name: " Mint tea ", steepTime: "doesn't matter really"},
       {name: " Rooibos ", steepTime: " you really shouldn't but it's about 4 minutes"}
];

exports.teaTypes = exports.teaTypes.map (function(i){
    return i.name + ' (' + i.steepTime + ' ) '; 
}); 


 /*
 console.log(exports);
*/