const SUPPORTED_CARDS = ['visa', 'mastercard'];

function calculateInvoice(lineItems) {
  const subtotal = lineItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  return { subtotal, total: subtotal };
}

function isCardSupported(brand) {
  return SUPPORTED_CARDS.includes(String(brand).toLowerCase());
}

module.exports = { calculateInvoice, isCardSupported, SUPPORTED_CARDS };
