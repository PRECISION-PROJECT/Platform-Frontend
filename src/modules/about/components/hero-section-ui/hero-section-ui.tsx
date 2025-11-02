import Image from 'next/image';
import React from 'react';

const HeroSectionUI = () => {
  return (
    <div className='relative aspect-[10/4] w-full sm:aspect-[16/6] md:aspect-[16/5]'>
      {/* Background image */}
      <Image
        src='/images/contact-background.jpeg'
        alt='About background'
        fill
        quality={100}
        priority
        className='object-cover'
      />

      <div className='absolute inset-0 bg-black/20' />

      <div className='-translate-x-1/2 absolute top-6 left-1/2 text-center opacity-80'>
        <p className='font-light text-xs tracking-widest sm:text-sm'>PRECISION WOOD</p>
      </div>

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
        <p className='mb-4 font-light text-xs sm:text-sm'>HOME / ABOUT US</p>
        <h1 className='font-light font-spring text-4xl tracking-wide sm:text-5xl md:text-6xl lg:text-13xl'>
          ABOUT US
        </h1>
      </div>
    </div>
  );
};

export default HeroSectionUI;
