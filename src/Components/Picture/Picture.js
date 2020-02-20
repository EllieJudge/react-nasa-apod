import React from 'react';
import './style.css'

function Picture(props) {
  console.log('Pic: ', props)

  const { pic} = props;
  return (
    <img src = {pic} alt='spacepic' className="img"></img>
  )
}

export default Picture;