const { AMEX, isAmex } = require('./amex');

const SUPPORTED_CARDS = ['visa', 'mastercard', AMEX];

function calculateInvoice(lineItems) {
  const subtotal = lineItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  return { subtotal, total: subtotal };
}

function isCardSupported(brand) {
  return SUPPORTED_CARDS.includes(String(brand).toLowerCase());
}

function cardSecurityCodeLength(brand) {
  return isAmex(brand) ? 4 : 3;
}

module.exports = { calculateInvoice, isCardSupported, cardSecurityCodeLength, SUPPORTED_CARDS };
