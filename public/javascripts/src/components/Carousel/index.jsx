import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from '../common/Arrow';
import styles from './styles.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const propTypes = {
    images: React.PropTypes.array,
    auto: React.PropTypes.bool,
    indicators: React.PropTypes.bool,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    speed: React.PropTypes.number,
}

const defaultProps = {
  auto: true,
  indicators: true,
  width: 800,
  height: 300,
  speed: 2500,
}

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      slidePos: 0,
    }
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);

    if(this.props.auto){
      const intervalID = window.setInterval(this.handleClickNext, this.props.speed);
    }
  }

  renderIndicators( ){
    return(
      <ul className={styles['indicator-list']}>
        {this.props.images.map((item, index) => {
          const sel = index === this.state.slidePos ? styles['indicator-selected'] : '';
          return (<li
            key={index}
            className={`${styles['indicator-bubble']} ${sel}`}
          ></li>)
        }
        )}
      </ul>
    )
  }

  handleClickNext() {
    const addOne = this.state.slidePos + 1 ;
    const slidePos = (addOne > this.props.images.length - 1) ? 0 : addOne;
    this.setState({ slidePos });
  }

  handleClickPrev() {
    const takeOne = this.state.slidePos - 1 ;
    const slidePos = (takeOne < 0) ?  this.props.images.length - 1 : takeOne;
    this.setState({ slidePos });
  }

  renderImages() {
    return this.props.images.map((image, index) =>
      (<img
        key={index}
        className={styles['carousel-image']}
        src={image.src}
        alt={image.alt}
      />)
    );
  }

  render(){
    const pos = this.state.slidePos;
    const userStyles = { width: this.props.width, height: this.props.height };
    return (
      <div className={styles['carousel-container']} style={userStyles}>
        <Arrow dir="left" onClick={this.handleClickPrev} />
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          <img
            className={styles['carousel-image']}
            src={this.props.images[pos].src}
            alt={this.props.images[pos].alt}
          />
        </ReactCSSTransitionGroup>
        <Arrow dir="right" onClick={this.handleClickNext} />
        { this.props.indicators ? this.renderIndicators() : '' }
      </div>
    )
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;
