import React from 'react'

const Back = ({ url }) => {
  return (
    <div className="absolute px-20 m-auto z-0 left-0 right-0 bottom-0 top-0">
      <div className="h-screen flex" >
        <img className="relative object-cover m-auto opacity-70" src={url} alt="" />
      </div>
    </div>
  )
}

export default Back
