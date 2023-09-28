import React, { FC, useRef, useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

import { MdRestartAlt } from 'react-icons/md';
import { BiLogoFacebook } from 'react-icons/bi';

interface FooterProps {
  handleImageChange: () => void;
}

const Footer: FC<FooterProps> = ({
  handleImageChange,
}): JSX.Element => {
  const [isClicked, setIsClicked] =
    useState<boolean>(false);

  const buttonIntervalRef = useRef<NodeJS.Timeout | null>(
    null
  );

  const handleClick = () => {
    setIsClicked(true);

    if (buttonIntervalRef.current !== null) {
      clearInterval(buttonIntervalRef.current);
    }

    buttonIntervalRef.current = setInterval(() => {
      setIsClicked(false);
    }, 2500);
  };

  return (
    <div className='relative flex items-center justify-between mt-auto p-5 z-50'>
      <Link
        href='https://www.facebook.com/rodel.crisosto'
        target='_blank'
        rel='noopener'
      >
        <Button css='hover:bg-slate-200/20'>
          <BiLogoFacebook />
        </Button>
      </Link>

      <span className='absolute inset-0 h-max w-max m-auto text-white text-xs tracking-widest'>
        LEARN TODAY
      </span>

      <div onClick={handleImageChange}>
        <Button
          disabled={isClicked}
          css='bg-yellow-200'
          onClick={handleClick}
        >
          <div
            className={`${
              isClicked && 'click-effect'
            } absolute inset-0 rounded-full`}
          ></div>
          <MdRestartAlt className='text-black' />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
