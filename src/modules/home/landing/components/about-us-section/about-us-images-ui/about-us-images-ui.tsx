import Image from "next/image";

interface Props {
  topImage: string;
  bottomImage: string;
}

const AboutUsImageUI = ({ topImage, bottomImage }: Props) => {
  return (
    <div className="relative w-full min-h-[480px] flex-1">
      {/* mobile stacked */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="relative w-full h-64">
          <Image src={topImage} alt="about img" fill className="object-cover" />
        </div>
        <div className="relative w-full h-64">
          <Image
            src={bottomImage}
            alt="about img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* desktop overlap */}
      <div className="hidden lg:block">
        <div className="absolute top-0 left-[100px] w-[365px] h-[375px]">
          <Image src={topImage} alt="about img" fill className="object-cover" />
        </div>

        <div className="absolute -bottom-15 left-0 w-[343px] h-[317px]">
          <Image
            src={bottomImage}
            alt="about img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsImageUI;
