import React from 'react';
import renderer from 'react-test-renderer';
import CartItem from '../../src/components/molecules/CartItem';
import cartItemJson from '../data/cartItem.json';

describe('<CartItem />', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<CartItem
            item={cartItemJson}

        />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

