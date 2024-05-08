import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../../src/components/molecules/ProductCard';
import productJson from '../data/product.json';

describe('<ProductCard/>', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<ProductCard item={productJson} />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

