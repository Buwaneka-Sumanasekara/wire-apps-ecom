import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react-native'

import MenuIcon from '../../src/components/atoms/MenuIcon';




describe('<MenuIcon />', () => {
    it('rendered sucessfully', () => {
        const tree = renderer.create(<MenuIcon />).toJSON()
        expect(tree).toMatchSnapshot()
    });
    it('Show number when value prop is there', () => {
        const tree = renderer.create(<MenuIcon value={10} />).toJSON()
        const testInstance = tree.children[0].children[0].children[0].children[0];
        expect(testInstance).toBe("10");
    });

});

