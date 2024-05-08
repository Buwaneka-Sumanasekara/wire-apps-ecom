import React from 'react';
import renderer from 'react-test-renderer';
import ProductList from '../../src/components/organisms/ProductList';
import productJson from '../data/product.json';

describe('<ProductList />', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<ProductList items={[productJson]} />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

