var fs = require('fs');
fs.stat('./',function(err,stats){
    if(err){
        console.log(err)
    }else{
        console.log(stats.isFile())
    }
})