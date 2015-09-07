import {
  Chain
}
from '../../../../src/core/chain/chain';

import {
  TranslationChainElement
}
from '../../../../src/core/chain/translation-chain-element';

import {
  Magnitude
}
from '../../../../src/core/types/magnitude';

let chain = null;
let first = new TranslationChainElement(new Magnitude('Hundred', 100));
let second = new TranslationChainElement(new Magnitude('Grand', 1000));
let third = new TranslationChainElement(new Magnitude('MultiGrand', 10000));

let chainIsEmptyError = 'Chain is empty';
let invalidArgElementError = 'Invalid argument for "chainElement"';
let invalidArgValueError = 'Invalid argument for "value". value should be a positive number';

beforeEach(() => {
  chain = new Chain();
});

describe('the Chain class', () => {
  it('handles empty chain', () => {
    expect(x => chain.translate(1000)).toThrow(chainIsEmptyError);
  });

  it('handles adding null chain element', () => {
    expect(x => chain.addChainElement(null)).toThrow(invalidArgElementError);
  });

  it('handles adding undefined chain element', () => {
    let test = {};
    expect(x => chain.addChainElement(test.notDefined)).toThrow(invalidArgElementError);
  });

  it('handles translating null value', () => {
    let test = {};
    expect(x => chain.translate(null)).toThrow(invalidArgValueError);
  });

  it('handles translating undefined value', () => {
    let test = {};
    expect(x => chain.translate(test.notDefined)).toThrow(invalidArgValueError);
  });

  it('handles translating string value', () => {
    expect(x => chain.translate("a")).toThrow(invalidArgValueError);
  });

  it('handles translating negative value', () => {
    expect(x => chain.translate(-1)).toThrow(invalidArgValueError);
  });

  it('detects empty chain', () => {
    expect(chain.isNotEmpty()).toBe(false);
  });

  it('detects non-empty chain', () => {
    chain.addChainElement(first);
    expect(chain.isNotEmpty()).toBe(true);
  });

  it('sets chain head and tail after adding single element', () => {
    chain.addChainElement(first);
    expect(chain.getHead().getValue()).toBe(first.getValue());
  });

  it('sets chain tail after adding single element', () => {
    chain.addChainElement(first);
    expect(chain.getTail().getValue()).toBe(first.getValue());
  });

  it('sets chain head after adding multiple elements', () => {
    chain.addChainElement(first);
    chain.addChainElement(second);
    chain.addChainElement(third);
    expect(chain.getHead().getValue()).toBe(first.getValue());
  });

  it('sets chain head with multiple elements', () => {
    chain.addChainElement(first);
    chain.addChainElement(second);
    chain.addChainElement(third);
    expect(chain.getTail().getValue()).toBe(third.getValue());
  });
});
