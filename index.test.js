import test from 'tape';

test('Something', assert => {
  const msg = '...should perform something.'

  const actual = 'Something';
  const expected = 'Somethin';
  assert.same(actual, expected, msg);
  assert.end();
});