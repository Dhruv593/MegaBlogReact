import React from 'react'

function Button({
    children, 
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 pt-2 text-center rounded-lg hover:bg-blue-700 ${className} ${bgColor} ${textColor}`}{...props}>
      {children}
    </button>
  )
}

export default Button
