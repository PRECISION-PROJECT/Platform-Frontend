'use client';

import React from 'react';
import { JourneySectionUI } from '../../components';

const JourneySectionContainer = () => {
  const journeyData = {
    label: 'OUR STORY',
    heading: 'PRECISION JOURNEY',
    subtitle: 'Precision Moulding opened in 1989 to provide milling and kiln drying',
    images: {
      team: '/images/about/journey-1.png',
      workshop: '/images/about/journey-2.png',
      equipment: '/images/about/journey-3.png',
    },
    paragraphs: [
      'Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in: NC area and now spans the',
      'Precision Moulding opened in 1989 to provide milling and kiln drying services to the eastern NC area and now spans the globe! We specialize in: NC area and now spans the eastern NC area and now spans the globe! We specialize in: NC area and now spans the globe! We specialize in: NC area and now spans the',
    ],
    signature: 'Vip Deacon',
    verticalText:
      'Precision Moulding opened in 1989 to provide milling and kiln drying services and with Things that we are doing since 1989',
  };

  return <JourneySectionUI {...journeyData} />;
};

export default JourneySectionContainer;
