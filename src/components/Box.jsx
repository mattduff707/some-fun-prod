import React from 'react'

const Box = ({boxClass, children}) => {
  return (
    <div className={`border-8 rounded-box shadow-box  ${boxClass}`}>{children}</div>
  )
}

export default Box