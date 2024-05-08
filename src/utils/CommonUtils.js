
//Format price to 2 decimal places
export function formatPrice(price,currency="") {
   return `${price.toFixed(2)} ${currency}`;
}