const fs = require('fs');

fs.readFile('../02/nodejs_architecture.txt', {encoding: 'utf-8'}, (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('File Read Successfully');
        console.log(data);
    }
});