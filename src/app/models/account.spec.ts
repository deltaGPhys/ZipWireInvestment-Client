import { Account } from './Account';

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account(null,null,null,null,null)).toBeTruthy();
  });
});
