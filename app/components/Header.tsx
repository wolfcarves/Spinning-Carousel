import React, { FC } from 'react';

import { BiSearch } from 'react-icons/bi';
import { CgMenuLeft } from 'react-icons/cg';

import Button from '@/app/components/Button';

const Header: FC = (): JSX.Element => {
  return (
    <div className='relative flex items-center justify-between px-1 sm:px-5 md:px-14 py-4 z-50'>
      <Button css='hover:bg-slate-200/20'>
        <CgMenuLeft />
      </Button>

      <span className='absolute inset-0 h-max w-max m-auto text-white text-xs tracking-widest'>
        RODEL CRISOSTO
      </span>

      <button className='flex justify-between items-center text-white transparent border border-white/20 rounded-full lg:rounded-lg text-base h-max px-3 py-2 lg:py-1'>
        <span className='hidden lg:block pe-10'>
          Looking for something?
        </span>
        <BiSearch />
      </button>
    </div>
  );
};

export default Header;
