import Image from 'next/image';
import React from 'react';

interface MissionCardUIProps {
  title: string;
  description: string;
  image: string;
}

const MissionCardUI = ({ title, description, image }: MissionCardUIProps) => {
  return (
    <div className='relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden'>
      {/* Background Image */}
      <Image src={image} alt={title} fill quality={100} className='object-cover' priority />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white'>
        <h3 className='mb-4 font-light font-spring text-2xl tracking-wide sm:text-3xl md:text-4xl'>{title}</h3>
        <p className='max-w-md font-light text-sm leading-relaxed opacity-90 sm:text-base'>{description}</p>
      </div>
    </div>
  );
};

export default MissionCardUI;
