import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { Heading } from "@/components/shared/heading";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { TestimonialCardUI } from "../../components/testimonial-section";

const testimonials = [
  {
    id: 1,
    image: "/images/living-room.jpeg",
    description:
      "This product completely transformed how I manage my workflow. The interface is intuitive and the support team is incredibly responsive.",
    name: "Sarah Johnson",
    role: "Product Manager",
  },
  {
    id: 2,
    image: "/images/living-room.jpeg",
    description:
      "I was skeptical at first, but after using it for a month, I cannot imagine working without it. Highly recommended!",
    name: "Michael Chen",
    role: "Software Engineer",
  },
  {
    id: 3,
    image: "/images/living-room.jpeg",
    description:
      "The best investment our team made this year. It has saved us countless hours and improved our productivity significantly.",
    name: "Emily Rodriguez",
    role: "Design Lead",
  },
  {
    id: 4,
    image: "/images/living-room.jpeg",
    description:
      "Outstanding customer service and a product that actually delivers on its promises. Five stars all around!",
    name: "David Thompson",
    role: "CEO",
  },
  {
    id: 5,
    image: "/images/living-room.jpeg",
    description:
      "The features are comprehensive yet easy to use. Our entire team adopted it within the first week.",
    name: "Jessica Lee",
    role: "Operations Manager",
  },
  {
    id: 6,
    image: "/images/living-room.jpeg",
    description:
      "Exceptional value for money. The ROI was evident within the first month of implementation.",
    name: "Robert Martinez",
    role: "Finance Director",
  },
];

const TestimonialSectionContainer = () => {
  return (
    <AnimationContainer delay={0.1} className="py-10 md:py-20 overflow-hidden">
      <Heading className="text-center" title="Testimonials" />
      <div className="mt-8 px-4">
        <Marquee>
          <MarqueeContent pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <MarqueeItem key={`${testimonial.name}-${index}`}>
                <TestimonialCardUI
                  image={testimonial.image}
                  description={testimonial.description}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </AnimationContainer>
  );
};

export default TestimonialSectionContainer;
