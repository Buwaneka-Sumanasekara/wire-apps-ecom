import React from 'react';
import renderer from 'react-test-renderer';
import Spacer from '../../src/components/atoms/Spacer';


describe('<Spacer/>', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<Spacer />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

