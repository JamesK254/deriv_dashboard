export const convertUSDToLocal = (amountUSD, currencyCode, exchangeRates) => {
  if (currencyCode === "USD") return amountUSD;
  const rate = exchangeRates[currencyCode];
  if (!rate) {
    console.warn(
      `Exchange rate for ${currencyCode} not found. Falling back to USD.`
    );
    return formatNumber(amountUSD);
  }
  return formatNumber(amountUSD * rate);
};

export function formatNumber(num) {
    // Convert the number to a string with two decimal places
    const formattedNumber = num.toFixed(2);

    // Use a regular expression to add commas for thousands
    return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
