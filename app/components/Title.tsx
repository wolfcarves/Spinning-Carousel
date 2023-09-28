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

  const [subtitle, setSubtitle] = useState<string>(
    imageCollection[imageIndex].subtitle
  );

  const [isFirstRender, setIsFirstRender] =
    useState<boolean>(true);

  const [isImageChanged, setIsImageChanged] =
    useState<boolean>(false);

  useEffect(() => {
    !isFirstRender && setIsImageChanged(true);

    const updateTextInterval = setInterval(() => {
      setTitle(imageCollection[imageIndex].title);
      setSubtitle(imageCollection[imageIndex].subtitle);
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
    <div className='absolute inset-0 m-auto flex flex-col items-center justify-center translate-y-10'>
      <div className='overflow-hidden'>
        <h1
          className={`${
            isImageChanged && 'text-upwards'
          } text-white text-center justify-center text-[5vw] xl:text-[40px] 2xl:text-[60px] tracking-[7.5vw] -me-[7.5vw] leading-[1em] uppercase`}
        >
          {title}
        </h1>
      </div>

      {/*Seperator */}
      <div className='seperator justify-self-center h-[50px] bg-white w-[70vw] xl:w-[600px] rounded-full opacity-50'></div>

      <div className='overflow-hidden'>
        <h1
          className={`${
            isImageChanged && 'text-downwards'
          } text-white text-center justify-center text-[3vw] xl:text-[25px] tracking-[2vw] -me-[2vw] uppercase`}
        >
          {subtitle}
        </h1>
      </div>
    </div>
  );
};

export default Title;
