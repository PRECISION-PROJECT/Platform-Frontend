import Image from "next/image";

type ImageItem = {
  src: string;
  alt: string;
  title: string;
};

type Props = {
  images: ImageItem[];
};

const CustomSectionUI = ({ images }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-image min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden group cursor-pointer"
        >
          {/* Background Image */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            quality={100}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <h3 className="font-spring text-foreground text-xl md:text-2xl font-light tracking-wide transition-transform duration-300 group-hover:translate-y-[-8px]">
              {image.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomSectionUI;
