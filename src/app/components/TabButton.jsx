import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white font-bold px-2 py-1 rounded-xl bg-gradient-to-r from-blue-700 via-black-500 to-green-800' : 'text-gray-500'
  return (
      <button onClick={selectTab}>
          <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
              {children}
          </p>
    </button>
  )
}

export default TabButton