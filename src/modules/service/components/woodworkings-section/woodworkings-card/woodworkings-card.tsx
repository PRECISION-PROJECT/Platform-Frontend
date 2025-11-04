import { Card } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  description: string;
  name: string;
  image: string;
  link: string;
};

const WoodWorkingCardUI = ({ name, description, image, link }: Props) => {
  return (
    <Card className="rounded-none flex items-center justify-center border-none">
      <Image
        src={image}
        alt={name}
        fill
        quality={100}
        priority
        className="object-cover"
      />
      <h2 className="font-semibold">{name}</h2>
      <p className="text-sm leading-relaxed mt-4 line-clamp-3">{description}</p>
    </Card>
  );
};

export default WoodWorkingCardUI;
