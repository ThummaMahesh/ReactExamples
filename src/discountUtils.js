export function calculateTotal(cartItems){
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}
export function calculateButtonDiscount(totalPrice,discountPercentage){
    return totalPrice*discountPercentage/100;
}
export function getCouponDiscount(couponCode,totalPrice){
    const discounts = {
        "BLACKFRIDAY": 20,
        "NEWYEAR": 15,
        "SUMMER": 10,
        "MAHESH14": 20,
        "WINTER": 5
    };
    let discountPercentage = discounts[couponCode] || 0;
    return {
        isValid : discountPercentage > 0,
        discountPercentage,
        discountAmount : (totalPrice * discountPercentage / 100)
    }
}