const {sum,sub}=require("./second.js");


sum(2,3);
sub(4,1);
// sum(2,3);    private
console.log("1st file running");
console.log(module.exports);







// (function(){
//     console.log("both file want's to run together");

//     function sum(a,b){
//     console.log(a+b);
// }

// sum(2,3)
// })();