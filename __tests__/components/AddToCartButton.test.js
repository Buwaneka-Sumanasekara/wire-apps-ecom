import React from 'react';
import renderer from 'react-test-renderer';

import AddToCartButton from '../../src/components/atoms/AddToCartButton';




describe('<AddToCartButton />', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<AddToCartButton />).toJSON()
        expect(tree).toMatchSnapshot()
    });
   

});

