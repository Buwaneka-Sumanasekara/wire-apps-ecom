

export function formatPrice(price,currency="") {
   return `${price.toFixed(2)} ${currency}`;
}