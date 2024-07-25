export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (!cart) return localStorage.setItem("cart", JSON.stringify([]));
  return JSON.parse(cart) || [];
};

export const addToCart = (product) => {
  if (!product) return;

  const payload = {
    id: product.id,
    price: product.price,
    qty: 1,
  };

  const existingCart = getCart();
  let cart = [];
  if (existingCart) {
    const existingProduct = existingCart.find((item) => item.id === product.id);
    if (existingProduct) {
      cart = existingCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
    } else {
      cart = [...existingCart, payload];
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    return "ADDED";
  } else {
    cart.push(payload);
    localStorage.setItem("cart", JSON.stringify(cart));
    return "ADDED";
  }
};
