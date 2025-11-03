import AnimationContainer from '@/components/containers/animation-container';
import MaxWidthContainer from '@/components/containers/max-width-container';
import { VStack } from '@/components/utilities';
import Image from 'next/image';
import React from 'react';

const features = [
  {
    number: '01',
    title: 'Free Consult',
    description: 'Aliquam erat volutpat. Donec placerat nisl magna, et Aliquam erat volutpat.',
  },
  {
    number: '02',
    title: 'Advanced Equipment',
    description: 'Aliquam erat volutpat. Donec placerat nisl magna, et Aliquam erat volutpat.',
  },
  {
    number: '03',
    title: 'Fast Delivery',
    description: 'Aliquam erat volutpat. Donec placerat nisl magna, et Aliquam erat volutpat.',
  },
];

const FeaturesSectionUI = () => {
  return (
    <div className='bg-black py-16 text-white md:py-24'>
      <MaxWidthContainer>
        <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16'>
          {features.map((feature, index) => (
            <AnimationContainer key={feature.number} delay={0.1 * (index + 1)}>
              <VStack spacing={24} align='center' className='text-center'>
                {/* Large Number */}
                <span className='font-spring text-7xl font-light text-white lg:text-8xl'>{feature.number}</span>

                {/* Architectural Image */}
                <div className='relative h-24 w-full opacity-60 grayscale'>
                  <Image
                    src='/images/about/factory.png'
                    alt={`${feature.title} architectural icon`}
                    fill
                    className='object-contain'
                  />
                </div>

                {/* Title */}
                <h3 className='font-spring text-2xl font-normal text-white'>{feature.title}</h3>

                {/* Description */}
                <p className='max-w-xs text-sm font-light leading-relaxed text-gray-400'>{feature.description}</p>
              </VStack>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default FeaturesSectionUI;
