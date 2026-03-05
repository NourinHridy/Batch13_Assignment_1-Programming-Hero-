//Problem 1
function newPrice(currentPrice, discount) {
    if (typeof discount !== 'number' || typeof currentPrice !== 'number'){
        return("Invalid");
    }
    if (discount < 0 || discount > 100){ 
        return("Invalid");
    } 
    const discountPrice = (currentPrice - (currentPrice * (discount / 100))).toFixed(3);
    let stringPrice = discountPrice.toString();
    return stringPrice;
}

// const result = newPrice(1500, 20);
// console.log(result);

//Problem 2
function validOtp(otp) {
    if (typeof otp != 'string' ){
        return "Invalid";
    }
    if(otp.startsWith("ph", 0) && otp.length === 8){
        return true;
    }
    else{return false;}
}

// const output = validOtp("ph-10985");
// console.log(output);

//Problem 3
function finalScore(omr) {
    const q = {
        right: Number(omr.right),
        wrong: Number(omr.wrong),
        skip: Number(omr.skip)
    };

    const quesNum = q.right+q.wrong+q.skip;
    if (quesNum != 100){
        return "Invalid";
    }
    const sum = Math.round(((q.right*1)+(q.wrong*(-0.5))));
    return sum;
}

// const result = finalScore({"right":67,"wrong":23,"skip":10});
// console.log(result);

//Problem 4
function gonoVote(array) {
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

//Problem 5
function analyzeText(str) {
    if(typeof str != 'string'){
        return "Invalid";
    }

    const strWOSpace = str.replace(/\s/g, "");
    const token = strWOSpace.length;

    const words = str.split(" ");
    let longwords = "";

    for(let word of words){
        if(word.length > longwords.length){
            longwords = word;
        } else if(word.length === 0){
            return "Invalid";
        }
    }

    return{
        longwords: longwords,
        token: token
    };
}

// const input = "";
// const output = analyzeText(input);

// console.log(output);