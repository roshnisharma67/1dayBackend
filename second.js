console.log("both file want's to run together");


function sum(a,b){
    console.log(a+b);
}



function sub(a,b){
    console.log(a-b);
}
// don't keep private export it
module.exports={sum,sub};


// as empty object 
// module.exports.sum=sum;
// module.exports.sub=sub;
// sum(2,3)