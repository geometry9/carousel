// Normally if it were a bigger app, each component would have it's own tests.
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import Carousel from '../components/Carousel';

const images = [
  { src: "https://unsplash.it/600/300?random", alt: "the image of something something" },
  { src: "https://unsplash.it/600/300", alt: "the image of something2 something" },
  { src: "https://unsplash.it/600/300?blur", alt: "the image of something3 something" },
];

describe('<Carousel />', function () {

  it('should have images', function () {
    const wrapper = mount(<Carousel images={images} />);
    expect(wrapper.props().images.length).to.be.above(0);
  });

  it('should go to next image when clicking next', function () {
    const wrapper = mount(<Carousel images={images} />);
    wrapper.instance().handleClickNext();
    expect(wrapper.state().slidePos).to.be.equal(1);
  });

  it('should circle back to the first image after last', function () {
    const wrapper = mount(<Carousel images={images} />);
    wrapper.setState({slidePos: 2})
    wrapper.instance().handleClickNext();
    expect(wrapper.state().slidePos).to.be.equal(0);
  });

  it('should have go to previous image when clicking prev', function () {
    const wrapper = mount(<Carousel images={images} />);
    wrapper.setState({slidePos: 2});
    wrapper.instance().handleClickPrev();
    expect(wrapper.state().slidePos).to.be.equal(1);
  });

  it('should show image indicator if property is set', function () {
    const wrapper = mount(<Carousel images={images} />);
    expect(wrapper.find('ul').length).to.be.equal(1);
  });
});
