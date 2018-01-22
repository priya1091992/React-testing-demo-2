jest.mock('./request');

var user = require('./user');

it('works with resolves', () => {
  return expect(user.getUserName(5)).resolves.toEqual('Paul');
});

it('works with promises', () => {
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

it('tests error with rejects', () => {
  return expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});
