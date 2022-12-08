export const formatPrice = (price) => {
  if (price > 9999) {
    let number = price.toString();
    let priceConvert = number.slice(0, -3);
    priceConvert = priceConvert + ".000";
    return priceConvert;
  }
};
