import React from 'react';
import renderer from 'react-test-renderer';
import ProductDetails from '../../src/components/organisms/ProductDetails';
import productJson from '../data/product.json';

describe('<ProductDetails/>', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<ProductDetails item={productJson} />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

