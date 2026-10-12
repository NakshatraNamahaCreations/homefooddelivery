// Order pricing rules — shared by the checkout page and the payment function,
// so the amount charged always matches what the customer was shown.

export const DELIVERY_FEE = 49;
export const FREE_DELIVERY_ABOVE = 499;
export const GST_RATE = 0.05;

export function orderTotals(subTotal) {
  const deliveryFee = subTotal >= FREE_DELIVERY_ABOVE || subTotal === 0 ? 0 : DELIVERY_FEE;
  const gst = +(subTotal * GST_RATE).toFixed(2);
  const grandTotal = +(subTotal + deliveryFee + gst).toFixed(2);
  return { subTotal, deliveryFee, gst, grandTotal };
}
