'use client';

import HistorySectionUI, { type TimelineItem } from '../../components/history-section';

const timelineData: TimelineItem[] = [
  {
    year: '1986',
    backgroundImage: '/images/about/history-bg.png',
    content:
      'Alexandria Moulding was established in 1986, beginning a legacy of excellence in moulding and millwork. Our founders envisioned creating superior architectural products that would stand the test of time, combining traditional craftsmanship with innovative techniques.',
  },
  {
    year: '1999',
    backgroundImage: '/images/about/history-bg.png',
    content:
      'A pivotal year of expansion and modernization. We invested heavily in state-of-the-art manufacturing equipment and expanded our product line to meet growing demand. This period marked our transition from a regional supplier to a nationally recognized brand.',
  },
  {
    year: '1977',
    backgroundImage: '/images/about/history-bg.png',
    content:
      'The foundation of precision woodworking that would later inspire Alexandria Moulding. Our craftsmanship roots trace back to this era, where quality and attention to detail became the cornerstone of our philosophy.',
  },
  {
    year: '2016',
    backgroundImage: '/images/about/history-bg.png',
    content:
      'Celebrating 30 years of innovation and growth. We launched our e-commerce platform and enhanced our digital presence, making our premium products more accessible to customers nationwide while maintaining our commitment to quality and service.',
  },
  {
    year: '2025',
    backgroundImage: '/images/about/history-bg.png',
    content:
      'Looking ahead to the future of Alexandria Moulding. We continue to innovate with sustainable practices, advanced manufacturing technologies, and an unwavering dedication to providing exceptional architectural products for generations to come.',
  },
];

const HistoryContainer = () => {
  return <HistorySectionUI timelineData={timelineData} defaultYear="1977" />;
};

export default HistoryContainer;
