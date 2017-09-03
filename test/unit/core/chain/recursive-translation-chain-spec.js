import {
  RecursiveTranslationChain
}
from '../../../../src/core/chain/recursive-translation-chain';

import {
  CircularTranslationChain
}
from '../../../../src/core/chain/circular-translation-chain';

import {
  TranslationChain
}
from '../../../../src/core/chain/translation-chain';

import {
  Magnitude, OrderOfMagnitude
}
from '../../../../src/core/types/magnitude';

import {
  Unit
}
from '../../../../src/core/types/unit';

import {
  Magnitudes, OrderOfMagnitudes
}
from '../../../../src/core/constants/number/order-of-magnitudes';

import {
  Units
}
from '../../../../src/core/constants/number/units';

import {
  Tens
}
from '../../../../src/core/constants/number/tens';

let translationChain = null;

describe('the RecursiveTranslationChain class', () => {
    describe('with TranslationChain as underlying chain', () => {
      beforeEach(() => {
        translationChain = new RecursiveTranslationChain(new TranslationChain());
        translationChain.addMagnitudes(Units.All);
        translationChain.addMagnitudes(Tens.All);
        translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.VeryLowOrderMagnitudes);
        translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.LowOrderMagnitudes);
        translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.HighOrderMagnitudes);
      });

      it('translates 103', () => {
        expect(translationChain.translate(103)).toBe("one hundred three");
      });

      it('translates 10103', () => {
        expect(translationChain.translate(10103)).toBe("ten thousand one hundred three");
      });
  });

    describe('with CircularTranslationChain as underlying chain', () => {
        beforeEach(() => {
          translationChain = new RecursiveTranslationChain(new CircularTranslationChain());
          translationChain.addMagnitudes(Units.All);
          translationChain.addMagnitudes(Tens.All);
          translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.VeryLowOrderMagnitudes);
          translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.LowOrderMagnitudes);
          translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.HighOrderMagnitudes);
        });

        it('translates 10^6 + 3', () => {
          expect(translationChain.translate(Math.pow(10, 6) + 3)).toBe("one million three");
        });

        it('translates 90,223', () => {
          expect(translationChain.translate(90223)).toBe('ninety thousand two hundred twenty three');
        });

        it('translates 123,222', () => {
          expect(translationChain.translate(123222)).toBe('one hundred twenty three thousand two hundred twenty two');
        });

        it('translates 123,222', () => {
            translationChain = new RecursiveTranslationChain(new CircularTranslationChain());
            translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.VeryLowOrderMagnitudes);
            translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.LowOrderMagnitudes);
            translationChain.addOrderOfMagnitudes(OrderOfMagnitudes.HighOrderMagnitudes);
          expect(translationChain.translate(123222)).toBe('1 hundred 23 thousand 2 hundred 22');
        });
    });
});
