const test = require('node:test');
const assert = require('node:assert');
const { calculateInvoice, isCardSupported, cardSecurityCodeLength } = require('../src/billing');

test('calculates invoice subtotal from line items', () => {
  const invoice = calculateInvoice([{ unitPrice: 25, quantity: 2 }, { unitPrice: 10, quantity: 1 }]);

  assert.strictEqual(invoice.subtotal, 60);
});

test('supports visa and mastercard', () => {
  assert.ok(isCardSupported('VISA'));
  assert.ok(isCardSupported('mastercard'));
});

test('supports amex with a 4-digit security code', () => {
  assert.ok(isCardSupported('AMEX'));
  assert.strictEqual(cardSecurityCodeLength('amex'), 4);
  assert.strictEqual(cardSecurityCodeLength('visa'), 3);
});
