import React from 'react';
import renderer from 'react-test-renderer';
// import configureStore from 'redux-mock-store';

// import { Provider } from 'react-redux';
// import { reduxService } from '../../services/redux';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import AsideComponent from '../components';


describe('>>> AsideComponent Tests', () => {
    test('true has to be true', () => {
        expect(true).toBe(true);
    });
    // GLOBALS
    // const initialState = {
    //     app: {
    //         aside: {
    //             open: true,
    //         }
    //     }
    // };
    // const LINKS = {
    //     home: 'Home',
    //     about: 'About',
    // };
    // let asideWrapper, store;

    // beforeEach(() => {
    //     store = configureStore(initialState);
    //     asideWrapper = mount(<Provider store={reduxService.store}>
    //         <AsideComponent links={LINKS} /></Provider>);
    // });

    // // TEST CASES
    // test('Have aside with aside class', () => {
    //     expect(asideWrapper.find('aside.aside')).toHaveLength(1);
    // });
});
