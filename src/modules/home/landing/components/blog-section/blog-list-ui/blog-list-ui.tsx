import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "https://placehold.co/400",
    name: "Motion Graphics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
  {
    src: "https://placehold.co/400",
    name: "3D Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
  {
    src: "https://placehold.co/400",
    name: "2D Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, commodi.",
  },
];

const BlogListUI = () => {
  return (
    <div className="flex gap-6 px-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
      <div className="min-w-[4px] md:hidden" aria-hidden />
      {images.map((image, index) => (
        <VStack
          spacing={16}
          key={image.name}
          className={cn("min-w-[50%] snap-start md:min-w-0", {
            "ml-4 md:ml-0": index === 0,
          })}
        >
          <div className="shrink-0">
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
          <div className="mt-auto">
            <Button variant="underline" className="text-background px-0 py-0">
              Read more
            </Button>
          </div>
        </VStack>
      ))}
    </div>
  );
};

export default BlogListUI;
