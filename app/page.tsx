'use client';
import { useState, FC, useCallback } from 'react';

import { IMAGE_COLLECTION } from '@/constants/imageCollection';

import ImageBackground from '@/app/components/ImageBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Title from '@/components/Title';

import type { StaticImageData as NextImageProp } from 'next/image';

export interface ImageCollectionProps {
  imageCollection: Array<{
    src: NextImageProp;
    title: string;
    subtitle: string;
  }>;
}

const Home: FC = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);

  const handleImageChange = useCallback(() => {
    setIndex((prevIndex) =>
      IMAGE_COLLECTION.length - 1 !== prevIndex
        ? prevIndex + 1
        : 0
    );
  }, []);

  return (
    <ImageBackground
      imageCollection={IMAGE_COLLECTION}
      imageIndex={index}
    >
      <Header />

      <Title
        imageCollection={IMAGE_COLLECTION}
        imageIndex={index}
      />

      <Footer handleImageChange={handleImageChange} />
    </ImageBackground>
  );
};

export default Home;
