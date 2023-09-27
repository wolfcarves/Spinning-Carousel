'use client'

import React from 'react'
import {
  FC,
  useState,
  useEffect,
  memo,
  ReactNode,
} from 'react'

import Image, {
  StaticImageData as NextImageProp,
} from 'next/image'

interface ImageBackgroundProps {
  children: ReactNode | JSX.Element
  imageCollection: Array<{
    src: NextImageProp
    title: string
    subtitle: string
  }>
  imageIndex: number
}

const CORE_ANIM_CLASS = 'core-spin'
const MANTLE_ANIM_CLASS = 'mantle-spin'
const CRUST_ANIM_CLASS = 'crust-spin'

const ImageBackground: FC<ImageBackgroundProps> = ({
  children,
  imageCollection,
  imageIndex,
}): React.ReactNode => {
  const [isFirstRender, setIsFirstRender] =
    useState<boolean>(true)

  const [startSpin, setStartSpin] = useState<boolean>(false)

  const [currentIndex, setCurrentIndex] =
    useState<number>(imageIndex)

  useEffect(() => {
    !isFirstRender && setStartSpin(true)

    const imageChangeInterval = setInterval(() => {
      setCurrentIndex(imageIndex)
    }, 700)

    const spinInterval = setInterval(() => {
      setStartSpin(false)
    }, 2000)

    setIsFirstRender(false)

    return () => {
      clearInterval(imageChangeInterval)
      clearInterval(spinInterval)
    }
  }, [imageIndex])

  const renderCoreLayers = (
    _: unknown,
    index: number
  ): JSX.Element => {
    return (
      <Image
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
    )
  }

  const renderMantleLayers = (
    _: unknown,
    index: number
  ): JSX.Element => {
    return (
      <>
        <div className='bg-black opacity-5 absolute inset-0 z-50'></div>

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
      </>
    )
  }

  const renderCrustLayers = (
    _: unknown,
    index: number
  ): JSX.Element => {
    return (
      <Image
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
    )
  }

  return (
    <div className='container relative h-screen min-w-full overflow-hidden'>
      <div
        className={`core flex absolute inset-0 z-30 ${
          startSpin ? CORE_ANIM_CLASS : ''
        }`}
      >
        {imageCollection.map(renderCoreLayers)}
      </div>

      <div
        className={`mantle flex absolute inset-0 z-20 ${
          startSpin ? MANTLE_ANIM_CLASS : ''
        }`}
      >
        {imageCollection.map(renderMantleLayers)}
      </div>

      <div
        className={`crust flex absolute inset-0 ${
          startSpin ? CRUST_ANIM_CLASS : ''
        }`}
      >
        {imageCollection.map(renderCrustLayers)}
      </div>
    </div>
  )
}

export default memo(ImageBackground)
