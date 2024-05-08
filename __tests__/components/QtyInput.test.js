import React from 'react';
import renderer from 'react-test-renderer';
import QtyInput from '../../src/components/atoms/QtyInput';

describe('<QtyInput/>', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<QtyInput />).toJSON()
        expect(tree).toMatchSnapshot()
    });
});

