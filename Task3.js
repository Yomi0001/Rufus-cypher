function paraFunctionName(number){


 let paravarname = [];
 for(let i = 1; i <=number; i++){
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
        paravarname.push("yu-gi-oh");
    }else if(i % 2 === 0 && i % 3 === 0){
        paravarname.push("yu-gi");
    }else if(i % 2 === 0 && i % 5 === 0){
        paravarname.push("yu-oh");
    }else if(i % 3 === 0 && 1 % 5 === 0){
        paravarname.push("gi-oh")
    }else if(i % 2 === 0){
        paravarname.push("yu");
    }else if(i % 3 === 0){
        paravarname.push("gi");
    }else if(i % 5 === 0){
        paravarname.push("oh");
    }else{
        paravarname.push(i);
    }
}

 console.log(paravarname);
 return paravarname;

}


paraFunctionName(100);
paraFunctionName(20); 
