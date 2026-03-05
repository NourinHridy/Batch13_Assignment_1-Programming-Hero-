function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return "Invalid";
    }
    
    let haCount = 0;
    let naCount = 0;

    for(let i of array){
        if(i === "ha"){
            haCount++;
        }else if(i === "na"){
            naCount++;
        }
    }

    if(haCount > naCount){
        return true;
    }
    else if(haCount < naCount){
        return false;
    }
    else {return "equal";}

    

    // const itemisString = array.every(i => typeof i === 'string'); //i doesn't need to be declared in js.

    // if(!itemisString){
    //     return "Invalid";
    // }
}

// const input = 12345;
// const output = gonoVote(input);

// console.log(output);