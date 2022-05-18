// Example1
// when never occurs in two types one is exception error and other one is infine loop
function errorgenerate(message, code) {
    throw { message: message, code: code };
}
var Infiniteloop = function () {
    while (true) {
        console.log("I'm Inifinete");
    }
};
// Infiniteloop();
// Infiniteloop();
errorgenerate('an error is present', 1030);
// console.log(errorgenerate('failed',3903));
// Example2
