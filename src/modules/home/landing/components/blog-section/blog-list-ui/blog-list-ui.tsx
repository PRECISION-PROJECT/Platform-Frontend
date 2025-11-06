import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/images/landing/pexels-photo-19.jpeg",
    name: "Motion Graphics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
  {
    src: "/images/landing/pexels-photo-17.jpeg",
    name: "3D Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
  {
    src: "/images/landing/pexels-photo-21.jpeg",
    name: "2D Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
];

const BlogListUI = () => {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none">
      {images.map((image) => (
        <VStack
          key={image.name}
          spacing={20}
          className="relative w-[75vw] shrink-0 snap-start md:w-full md:shrink"
        >
          <div className="w-full h-56 md:h-image">
            <img
              src={image.src}
              alt={image.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <VStack className="flex-1">
            <h3 className="text-base font-background font-bold uppercase font-spring">
              {image.name}
            </h3>
            <p className="text-sm opacity-70">{image.description}</p>
          </VStack>

          <Button
            variant="underline"
            className="text-background px-0 py-0 w-fit mt-auto"
          >
            Read more
          </Button>
        </VStack>
      ))}
    </div>
  );
};

export default BlogListUI;
