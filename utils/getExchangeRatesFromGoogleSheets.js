// utils/getExchangeRatesFromGoogleSheets.js

const { google } = require('googleapis');

export const getExchangeRatesFromGoogleSheets = async () => {
  try {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets.readonly']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'ExchangeRates!A2:B', // Adjust the range as needed
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      console.log('No data found.');
      return {};
    }

    // Convert rows to an object
    const exchangeRates = {};
    rows.forEach((row) => {
      const [currency, rate] = row;
      if (currency && rate) {
        exchangeRates[currency.trim().toUpperCase()] = parseFloat(rate);
      }
    });

    return exchangeRates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};
