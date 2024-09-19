// pages/api/exchange-rates.js

import { getExchangeRatesFromGoogleSheets } from "../../../utils/getExchangeRatesFromGoogleSheets";

const GET = async () => {
  try {
    const exchangeRates = await getExchangeRatesFromGoogleSheets();
    return Response.json({ rates: exchangeRates });
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return Response.json({ error: "Failed to fetch exchange rates" });
  }
};

export { GET };
