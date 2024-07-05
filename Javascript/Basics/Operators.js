// D = (L-S)/L * 100  = discount

var sellingPrice = 199;
var listingPrice = 799;

var discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount percentage is : " + discountPrice);

displayDiscountPercentage = Math.round(discountPrice)
console.log(displayDiscountPercentage + "% off");