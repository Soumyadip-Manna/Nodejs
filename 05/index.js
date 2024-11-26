const fs = require('fs');

const data = 'Nodejs is an asynchronous event-driven JavaScript runtime';

fs.writeFile('./nodejs_architecture.txt',data,(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('text file creation successfully');
    }
});


// code for deleting a file
/*
fs.unlink('./nodejs_architecture.txt',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('file delection successfully');
});
*/