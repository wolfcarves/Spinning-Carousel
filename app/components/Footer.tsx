import React, { FC } from 'react';
import { MdRestartAlt, MdShare } from 'react-icons/md';

interface FooterProps {
  handleImageChange: () => void;
}

const Footer: FC<FooterProps> = ({
  handleImageChange,
}): JSX.Element => {
  return (
    <div className='relative flex justify-between mt-auto p-5 z-50'>
      <button className='rounded-full p-3 text-white text-xl hover:bg-slate-200/20 duration-200'>
        <MdShare />
      </button>

      <span className='absolute inset-0 h-max w-max m-auto text-white text-xs tracking-widest'>
        LEARN TODAY
      </span>

      <button
        className='rounded-full p-3 bg-yellow-200'
        onClick={handleImageChange}
      >
        <MdRestartAlt />
      </button>
    </div>
  );
};

export default Footer;
