export const countryToCurrency = {
  US: "USD",
  KE: "KES",
  BR: "BRL",
  PL: "PLN",
};

export const getCurrencyCode = (countryCode) => {
  console.log("The Country code is", countryCode.toUpperCase());
  return countryToCurrency[countryCode.toUpperCase()] || "USD";
};
