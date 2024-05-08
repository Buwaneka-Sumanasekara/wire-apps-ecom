import React from 'react';
import renderer from 'react-test-renderer';
import ProductDetailsBody from '../../src/components/molecules/ProductDetailsBody';
import productJson from '../data/product.json';

describe('<ProductDetailsBody/>', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<ProductDetailsBody item={productJson} />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

