export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-DE").format(price);
};

export const totalPrice = (cart) => {
  if (cart.length > 0) {
    let totalPrice = 0;
    cart.map((cartItem) => {
      return (totalPrice += cartItem.count * cartItem.priceOfProduct);
    });

    return totalPrice;
  }
};

export const totalPriceOfTrackingOrder = (array) => {
  if (array?.length > 0) {
    let totalPrice = 0;
    array.map((item) => {
      return (totalPrice += item.quantityOrdered * item.priceOfProduct);
    });

    return totalPrice;
  }
};
