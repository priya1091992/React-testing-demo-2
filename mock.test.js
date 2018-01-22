function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}


const mockCallback = jest.fn();
forEach([0, 1], mockCallback);

test(':-)', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});
