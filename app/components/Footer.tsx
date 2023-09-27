import React from 'react'

import { MdRestartAlt } from 'react-icons/md'

const Footer = ({
  handleChangeBackground,
}: {
  handleChangeBackground: () => void
}) => {
  return (
    <div className='flex flex-col justify-content-between min-h-screen absolute inset-0 z-50'>
      <div>awd</div>

      <div className='flex flex-col items-center justify-center my-auto translate-y-5'>
        <h1 className='text-white text-center justify-center text-[60px] tracking-[140px] -me-[140px]'>
          DOLOMITES
        </h1>

        <div className='seperator justify-self-center h-[50px] bg-white w-[600px] rounded-full opacity-50'></div>

        <h1 className='text-white text-center justify-center text-[30px] tracking-[35px] -me-[40px]'>
          MARRAKECH
        </h1>
      </div>

      <div className='p-5 ms-auto'>
        <button
          className='rounded-full p-3 bg-yellow-200'
          onClick={handleChangeBackground}
        >
          <MdRestartAlt />
        </button>
      </div>
    </div>
  )
}

export default Footer
