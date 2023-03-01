import React from 'react';
// import RedColor from './atoms/Color'
import styles from './Hello.module.css';


// const css = { // JavaScript 안에서 CSS  지정을 작성
//   color: 'red',
//   fontSize: 50,
// }


const Hello = () => {
  
  return <div className={styles.hello}>Hello, World!</div>
  // return <div style={css}>Hello, World!</div> //style 속성에 객체를 전달
}

export default Hello