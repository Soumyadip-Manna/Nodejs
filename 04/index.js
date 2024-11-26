const fs = require('http');
const additionalData = ' It is asychronous model and non blocking Io OPERATION IMPROVE THE SCALABLITY AND PERFORMANCE OF WEB application.';
fs.appendFile('./nodejs_architecture.txt',additionalData,(err) => {
    if(err){
        console.log(err);
    }
    console.log('data inserted successfully');
});