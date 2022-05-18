// Example1
// when never occurs in two types one is exception error and other one is infine loop
function errorgenerate(message:string,code:number): never{
    throw {message: message, code: code};
}
const Infiniteloop = (): never => {
    while(true)
    {
        console.log(`I'm Inifinete`);
    }
};
// Infiniteloop();

errorgenerate('an error is present',1030); 
console.log(errorgenerate('failed',3903));

// Example2


