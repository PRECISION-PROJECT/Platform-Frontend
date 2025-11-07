import { LinkWithUnderline } from "@/components/layouts/main-layout/navbar-menu";
import { VStack } from "@/components/utilities";
import { ROUTES } from "@/utils/routes";

const images = [
  {
    src: "/images/landing/pexels-photo-13.jpeg",
    name: "2D Graphics",
  },
  {
    src: "/images/landing/pexels-photo-14.jpeg",
    name: "3D Animation",
  },
  {
    src: "/images/landing/pexels-photo-15.jpeg",
    name: "2D Animation",
  },
  {
    src: "/images/landing/pexels-photo-16.jpeg",
    name: "UI/UX Design",
  },
  {
    src: "/images/landing/pexels-photo-17.jpeg",
    name: "Branding",
  },
  {
    src: "/images/landing/pexels-photo-18.jpeg",
    name: "Print Design",
  },
];

const ProductListUI = () => {
  return (
    <div className="text-foreground flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none">
      {images.map((image) => (
        <div
          key={image.name}
          className="relative overflow-hidden w-full h-image shrink-0 snap-start md:shrink"
        >
          <div className="relative overflow-hidden w-full h-image">
            <div className="absolute h-full">
              <img
                src={image.src}
                alt={image.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="absolute inset-0 flex items-end p-4">
            <h3 className="text-2xl uppercase font-spring font-bold">
              {image.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListUI;
