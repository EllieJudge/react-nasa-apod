import React from 'react';
import './style.css'

function Header (props) {
console.log('Header: ',props)
  const { title } = props;
  return (
    <div>
      <h1 className="title">{title}</h1>
      <h4>{"NASA: Astronomy Picture of the Day"}</h4>
    </div>
  )
}
export default Header;