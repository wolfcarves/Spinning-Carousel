'use client';

import { FC, useEffect, useState } from 'react';
import { ImageCollectionProps } from '@/app/page';

interface TitleProps extends ImageCollectionProps {
  imageIndex: number;
}

const Title: FC<TitleProps> = ({
  imageCollection,
  imageIndex,
}): JSX.Element => {
  const [title, setTitle] = useState<string>(
    imageCollection[imageIndex].title
  );

  const [isFirstRender, setIsFirstRender] =
    useState<boolean>(true);

  const [isImageChanged, setIsImageChanged] =
    useState<boolean>(false);

  useEffect(() => {
    !isFirstRender && setIsImageChanged(true);

    const updateTextInterval = setInterval(() => {
      setTitle(imageCollection[imageIndex].title);
    }, 1200);

    const imageInterval = setInterval(() => {
      setIsImageChanged(false);
    }, 2000);

    setIsFirstRender(false);

    return () => {
      clearInterval(updateTextInterval);
      clearInterval(imageInterval);
    };
  }, [imageIndex]);

  return (
    <div className='absolute inset-0 m-auto flex flex-col items-center justify-center'>
      <div className='overflow-hidden'>
        <h1
          className={`${
            isImageChanged ? 'text-upwards' : ''
          } font-extralight title text-white text-center justify-center text-[60px] tracking-[150px] -me-[150px] uppercase`}
          style={{ lineHeight: '1em' }}
        >
          {title}
        </h1>
      </div>

      {/*Seperator */}
      <div className='seperator justify-self-center h-[50px] bg-white w-[600px] rounded-full opacity-50'></div>

      <div className='overflow-hidden'>
        <h1 className='text-white text-center justify-center text-[30px] tracking-[35px] -me-[35px] uppercase'>
          {/* {imageCollection[imageIndex].subtitle} */}
        </h1>
      </div>
    </div>
  );
};

export default Title;
