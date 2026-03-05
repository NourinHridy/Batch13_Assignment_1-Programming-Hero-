function validOtp(otp) {
    // Your code here
    if (typeof otp != 'string' ){
        return "Invalid";
    }
    if(otp.startsWith("ph", 0) && otp.length === 8){
        return true;
    }
    else{return false;}
}

const output = validOtp("ph-10985");
console.log(output);