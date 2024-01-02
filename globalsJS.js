//__dirname  - path to current directory 
//__filename - file name
// require  - function to use modules
// modeule  - info abt current module 
// process  - info about env where the program is being executed 
//5 utils

//console.log("Yes",__dirname);

const hello = (name) => {
    console.log(`Hello it's ${name}`);
}
module.exports = hello