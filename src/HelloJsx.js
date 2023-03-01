import React from 'react';
import styles, { button } from './styles';

const HelloJsx = () => {

  console.log(styles)

  return (
    <div>
      <p>Hello, World</p>
      <button>Click</button>
      <style jsx>{styles}</style>
      <style jsx>{button}</style>
    </div>
  )
}

export default HelloJsx