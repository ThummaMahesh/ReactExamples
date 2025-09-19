// ✅ Calculate total cart value
export function calculateTotal(cartItems) {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// ✅ Calculate button discount (flat %)
export function calculateButtonDiscount(totalPrice, discountPercentage) {
  return parseFloat(((totalPrice * discountPercentage) / 100).toFixed(2));
}

// ✅ Get coupon discount (case-insensitive)
export function getCouponDiscount(couponCode, totalPrice) {
  const discounts = {
    BLACKFRIDAY: 20,
    NEWYEAR: 15,
    SUMMER: 10,
    MAHESH14: 20,
    WINTER: 5,
  };

  // normalize input (case-insensitive + trim)
  const code = couponCode ? couponCode.toUpperCase().trim() : "";
  let discountPercentage = discounts[code] || 0;

  return {
    isValid: discountPercentage > 0,
    discountPercentage,
    discountAmount: parseFloat(
      ((totalPrice * discountPercentage) / 100).toFixed(2)
    ),
  };
}

// ✅ Combine everything → Final Price
export function calculateFinalPrice(cartItems, buttonDiscountPercentage, couponCode) {
  const total = calculateTotal(cartItems);

  const buttonDiscount = calculateButtonDiscount(total, buttonDiscountPercentage);
  const afterButtonDiscount = total - buttonDiscount;

  const coupon = getCouponDiscount(couponCode, afterButtonDiscount);

  const finalPrice = afterButtonDiscount - coupon.discountAmount;

  return {
    total,
    buttonDiscount,
    coupon,
    finalPrice: finalPrice < 0 ? 0 : parseFloat(finalPrice.toFixed(2)),
  };
}
