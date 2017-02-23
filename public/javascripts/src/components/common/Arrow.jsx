import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

const Arrow = (props) => {
  return(
    <button className={`${styles.arrow} ${styles[props.dir]}`} onClick={props.onClick}>
      <svg width="60px" height="80px" viewBox="0 0 50 80">
        <polyline fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
    	45.63,75.8 0.375,38.087 45.63,0.375 "/>
      </svg>
    </button>
  )
}

export default Arrow;
