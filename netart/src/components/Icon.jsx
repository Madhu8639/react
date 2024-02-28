import React from 'react'

const Icon = (props) => {
  return (
    <p className='end'><img src={props.icon} alt="" />{props.text}</p>
  )
}
export default Icon