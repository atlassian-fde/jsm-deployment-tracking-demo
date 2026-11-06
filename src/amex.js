const AMEX = 'amex';

function isAmex(brand) {
  return String(brand).toLowerCase() === AMEX;
}

module.exports = { AMEX, isAmex };
