function analyzeText(str) {
    // Your code here
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