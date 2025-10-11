import { Icons } from "@/assets/icons";
import AnimationContainer from "@/components/containers/animation-container";
import MaxWidthContainer from "@/components/containers/max-width-container";

const services = [
  {
    title: "Appointment & Design",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu",
  },
  {
    title: "Appointment & Design",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu",
  },
  {
    title: "Appointment & Design",
    description:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu",
  },
];

const VisionSectionContainer = () => {
  return (
    <div className="bg-primary text-primary-foreground border-t">
      <MaxWidthContainer className="py-10 md:py-20">
        <AnimationContainer delay={0.1}>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider opacity-90">
              PRECISION WOOD
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              SHAPE YOUR VISION
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed opacity-90">
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
              . Aliquam erat volutpat. Donec placerat nisl magna, et faucibus
              arcu .
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background/10">
                  <Icons.box className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-bold">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </AnimationContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default VisionSectionContainer;
