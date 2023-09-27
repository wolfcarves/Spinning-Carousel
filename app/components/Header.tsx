import React, { FC } from 'react';

import { BiSearch } from 'react-icons/bi';
import { CgMenuLeft } from 'react-icons/cg';

const Header: FC = (): JSX.Element => {
  return (
    <div className='relative flex items-center justify-between px-14 py-4 z-50'>
      <button className='rounded-full p-3 text-white text-2xl hover:bg-slate-200/20 duration-200'>
        <CgMenuLeft />
      </button>

      <span className='absolute inset-0 h-max w-max m-auto text-white text-xs tracking-widest'>
        RODEL CRISOSTO
      </span>

      <button className='flex justify-between items-center text-white transparent border border-white/20 rounded-lg text-base w-[250px] h-max px-5 py-1'>
        Looking for something?
        <BiSearch />
      </button>
    </div>
  );
};

export default Header;
