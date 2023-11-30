const priceFormater = (price: string | undefined) => {
  if (price) return price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return "";
};

export default priceFormater;
