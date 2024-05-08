import React from 'react';
import renderer from 'react-test-renderer';
import ProductSizes from '../../src/components/atoms/ProductSizes';


describe('<ProductSizes />', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<ProductSizes />).toJSON()
        expect(tree).toMatchSnapshot()
    });

});

