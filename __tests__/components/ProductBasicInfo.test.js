import React from 'react';
import renderer from 'react-test-renderer';
import ProductBasicInfo from '../../src/components/atoms/ProductBasicInfo';
import productJson from '../data/product.json';

describe('<ProductBasicInfo />', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<ProductBasicInfo item={productJson} />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

