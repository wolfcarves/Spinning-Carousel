'use client'
import React, { useState, FC } from 'react'

import { IMAGE_COLLECTION } from '@/constants/imageCollection'

import ImageBackground from '@/app/components/container/ImageBackground'
import Footer from '@/components/Footer'

const Home: FC = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0)

  const handleChangeBackground = () => {
    setIndex((prevIndex) =>
      IMAGE_COLLECTION.length - 1 !== prevIndex
        ? prevIndex + 1
        : 0
    )
  }

  return (
    <main className='relative'>
      <ImageBackground
        imageCollection={IMAGE_COLLECTION}
        imageIndex={index}
      />

      <Footer
        handleChangeBackground={handleChangeBackground}
      />
    </main>
  )
}

export default Home
