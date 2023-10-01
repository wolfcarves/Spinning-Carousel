'use client';

import {
  FC,
  useState,
  useEffect,
  memo,
  ReactNode,
  Fragment,
} from 'react';

import Image from 'next/image';

import { ImageCollectionProps } from '@/app/page';

interface ImageBackgroundProps
  extends ImageCollectionProps {
  children: ReactNode | JSX.Element;
  imageIndex: number;
}
const CORE_ANIM_CLASS = 'core-spin';
const MANTLE_ANIM_CLASS = 'mantle-spin';
const CRUST_ANIM_CLASS = 'crust-spin';

const ImageBackground: FC<ImageBackgroundProps> = ({
  children,
  imageCollection,
  imageIndex,
}): React.ReactNode => {
  const [isFirstRender, setIsFirstRender] =
    useState<boolean>(true);

  const [startSpin, setStartSpin] =
    useState<boolean>(false);

  const [currentIndex, setCurrentIndex] =
    useState<number>(imageIndex);

  useEffect(() => {
    !isFirstRender && setStartSpin(true);

    const imageChangeInterval = setInterval(() => {
      setCurrentIndex(imageIndex);
    }, 600);

    const spinInterval = setInterval(() => {
      setStartSpin(false);
    }, 2500);

    setIsFirstRender(false);

    return () => {
      clearInterval(imageChangeInterval);
      clearInterval(spinInterval);
    };
  }, [imageIndex]);

  const renderCoreLayers = (
    _: unknown,
    index: number
  ): JSX.Element => {
    return (
      <Image
        key={index}
        className='image'
        src={imageCollection[index].src}
        alt='An image'
        fill
        quality={100}
        style={{
          opacity: currentIndex < index ? 0 : 1,
          objectFit: 'cover',
        }}
      />
    );
  };

  const renderMantleLayers = (
    _: unknown,
    index: number
  ): JSX.Element => {
    return (
      <Fragment key={index}>
        <div className='bg-black opacity-5 absolute w-full h-full z-50'></div>

        <Image
          className={`image ${
            startSpin ? 'mantle-scale' : ''
          }`}
          src={imageCollection[index].src}
          alt='An image'
          fill
          quality={100}
          style={{
            opacity: currentIndex < index ? 0 : 1,
            objectFit: 'cover',
          }}
        />
      </Fragment>
    );
  };

  const renderCrustLayers = (
    _: unknown,
    index: number
  ): JSX.Element => {
    return (
      <Image
        key={index}
        className={`image ${
          startSpin ? 'crust-scale' : ''
        }`}
        src={imageCollection[index].src}
        alt='An image'
        fill
        quality={100}
        style={{
          opacity: currentIndex < index ? 0 : 1,
          objectFit: 'cover',
        }}
      />
    );
  };

  return (
    <div className='container flex flex-col relative h-full min-w-full overflow-hidden'>
      {children}

      <div
        className={`layer core absolute min-w-[100vw] min-h-full -z-10 ${
          startSpin ? CORE_ANIM_CLASS : ''
        }`}
      >
        {imageCollection.map(renderCoreLayers)}
      </div>

      <div
        className={`layer mantle absolute min-w-[100vw] min-h-full -z-20 ${
          startSpin ? MANTLE_ANIM_CLASS : ''
        }`}
      >
        {imageCollection.map(renderMantleLayers)}
      </div>

      <div
        className={`layer crust absolute min-w-[100vw] min-h-full -z-30 ${
          startSpin ? CRUST_ANIM_CLASS : ''
        }`}
      >
        {imageCollection.map(renderCrustLayers)}
      </div>
    </div>
  );
};

export default memo(ImageBackground);
