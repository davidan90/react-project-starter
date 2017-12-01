import React from 'react';
import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { AsideList } from '../components/aside/components/aside-list.component';

describe('>>> AsideList component Test', () => {
    // GLOBALS
    const LINKS = {
        home: 'Home',
        about: 'About',
    };
    const asideListWrapper = shallow(<AsideList links={LINKS} />);

    // TEST CASES
    test('Have ul with aside-list class', () => {
        expect(asideListWrapper.find('ul.aside-list')).toHaveLength(1);
    });

    test('Have ul with 2 children', () => {
        expect(asideListWrapper.find('ul').exists()).toEqual(true);
        expect(asideListWrapper.find('ul').children()).toHaveLength(2);
    });
});