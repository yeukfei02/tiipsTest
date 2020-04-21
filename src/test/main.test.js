import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";

import Academy from '../components/academy/Academy';
import Bookmark from '../components/bookmark/Bookmark';
import Home from '../components/home/Home';
import Portfolio from '../components/portfolio/Portfolio';
import Account from '../components/account/Account';

import Divider from '../components/divider/Divider';
import IconWithBadge from '../components/iconWithBadge/IconWithBadge';
import ItemView from '../components/itemView/ItemView';
import HorizontalItemView from '../components/horizontalItemView/HorizontalItemView';

Enzyme.configure({ adapter: new Adapter() });

describe('main.test', () => {
  describe('render test', () => {
    it('Academy', () => {
      const wrapper = shallow(<Academy />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Bookmark', () => {
      const wrapper = shallow(<Bookmark />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Home', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Portfolio', () => {
      const wrapper = shallow(<Portfolio />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Account', () => {
      const wrapper = shallow(<Account />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Divider', () => {
      const wrapper = shallow(<Divider />);
      expect(wrapper).toMatchSnapshot();
    });

    it('IconWithBadge', () => {
      const wrapper = shallow(<IconWithBadge />);
      expect(wrapper).toMatchSnapshot();
    });

    // it('ItemView', () => {
    //   const wrapper = shallow(<ItemView />);
    //   expect(wrapper).toMatchSnapshot();
    // });
    //
    // it('HorizontalItemView', () => {
    //   const wrapper = shallow(<HorizontalItemView />);
    //   expect(wrapper).toMatchSnapshot();
    // });
  });
});
