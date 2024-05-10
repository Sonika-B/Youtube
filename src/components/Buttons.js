import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
      <button className="py-1 px-3 m-2 rounded-lg bg-gray-200">{name}</button>
    </div>
  )
}

export default Buttons
