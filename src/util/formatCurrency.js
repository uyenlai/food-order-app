export const formatCurrency = (num) => {
  const option = {
    style: "currency",
    currency: "USD",
  };

  return new Intl.NumberFormat("en-US", option).format(num);
};
