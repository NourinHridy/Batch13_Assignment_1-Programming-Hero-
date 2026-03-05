function newPrice(currentPrice, discount) {
    // Your code here
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

const result = newPrice(500, "5");
console.log(result);