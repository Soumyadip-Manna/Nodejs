const os = require('os');

const osInformation = {
    'operating system name' : os.type(),
    'os release':os.release()
};

console.log(osInformation);