import { expect } from 'chai';
import { helloWorld } from '../assembly/contract';

describe('Hello World Contract', () => {
  it('should return "Hello, Celo!"', () => {
    expect(helloWorld()).to.equal('Hello, Celo!');
  });
});



