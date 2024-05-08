import React from 'react';

import Cart from '../../src/components/organisms/Cart';
import cartItemJson from '../data/cartItem.json';
import { render } from '../../src/utils/testUtils'

describe('<Cart/>', () => {
    it('rendered sucessfully', () => {
        const {toJSON} = render(<Cart cartItems={[cartItemJson]} />)
        expect(toJSON()).toMatchSnapshot()
    });
});

