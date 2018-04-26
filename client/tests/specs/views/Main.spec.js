import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Main from 'views/Main';

describe('Main - <Main />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Main />);
    });

    it('should render the view component', () => {
        expect(wrapper.find('h1').text()).to.equal('Hello Word!');
    });
});
