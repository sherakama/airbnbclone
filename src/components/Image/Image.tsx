import React from 'react';
import { ImageStyles as styles } from './Image.styles';
import { dcnb } from 'cnbuilder';
import { default as NextImage, ImageProps as NextImageProps, ImageLoaderProps } from 'next/image';

interface ImageProps {
  className?: string;
}

export const Image = ({ className, placeholder = 'blur', width, height, alt = '', ...rest }: ImageProps & NextImageProps) => {

  const placeLoader = ({ src }: ImageLoaderProps) => {
    return `${src}?cachebust=${Math.floor(Math.random() * 10000000)}`
  }

  return (
    <NextImage
      placeholder={placeholder}
      alt={alt}
      loader={placeLoader}
      width={width}
      height={height}
      className={dcnb(styles.root, className)}
      {...rest}
    />
  )
}