const { AMEX, isAmex } = require('./amex');

const SUPPORTED_CARDS = ['visa', 'mastercard', AMEX, 'discover'];

function calculateInvoice(lineItems, taxRate = 0) {
  if (taxRate < 0 || taxRate > 1) {
    throw new RangeError(`taxRate must be between 0 and 1, got ${taxRate}`);
  }
  const subtotal = lineItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const tax = Math.round(subtotal * taxRate * 100) / 100;
  return { subtotal, tax, total: subtotal + tax };
}

function isCardSupported(brand) {
  return SUPPORTED_CARDS.includes(String(brand).toLowerCase());
}

function cardSecurityCodeLength(brand) {
  return isAmex(brand) ? 4 : 3;
}

module.exports = { calculateInvoice, isCardSupported, cardSecurityCodeLength, SUPPORTED_CARDS };
