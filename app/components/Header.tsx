import React, { FC } from 'react';

import { BiSearch } from 'react-icons/bi';
import { CgMenuLeft } from 'react-icons/cg';

const Header: FC = (): JSX.Element => {
  return (
    <div className='relative flex justify-between px-14 py-7 z-50'>
      <button className='text-white text-2xl'>
        <CgMenuLeft />
      </button>

      <span className='absolute start-0 end-0 w-max m-auto  text-white text-xs tracking-widest'>
        RODEL CRISOSTO
      </span>

      <button className='flex justify-between items-center text-white transparent border border-white/20 rounded-lg text-base w-[250px] px-5 py-1'>
        Looking for something?
        <BiSearch />
      </button>
    </div>
  );
};

export default Header;
