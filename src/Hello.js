import React from 'react';

const css = { // JavaScript 안에서 CSS  지정을 작성
  color: 'red',
  fontSize: 50,
}

const Hello = () => {
  return <div style={css}>Hello, World!</div> //style 속성에 객체를 전달
}

export default Hello