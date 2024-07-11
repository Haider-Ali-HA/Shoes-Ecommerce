const CurrencyConvert = ({ price }) => {
  return Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  }).format(price);
};

export default CurrencyConvert;
