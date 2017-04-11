import sayHello from '../src';

test('two plus two equals four', () => {
  expect(2 + 2).toBe(4);
});

test('say hello', () => {
  expect(sayHello()).toEqual('hello');
});
