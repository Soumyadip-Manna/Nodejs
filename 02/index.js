const fs = require('fs');
const data = "Nodejs is an asynchronous event-driven JavaScript runtime";
fs.writeFile('./nodejs_architecture.txt',data,(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('File creation Successful');
    }
});