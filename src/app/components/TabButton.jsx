import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  default: { width: 0 },
  active: { width: "calc(100%)" }
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white' : 'text-gray-500'
  return (
      <button onClick={selectTab}>
          <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
              {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='h-1 mt-2 rounded-lg bg-gradient-to-r from-primary-700 via-black-500 to-secondary-800'
      ></motion.div>
    </button>
  )
}

export default TabButton