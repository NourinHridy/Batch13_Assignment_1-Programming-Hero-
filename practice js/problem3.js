function finalScore(omr) {
    //write your code here
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
