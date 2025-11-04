import { Card } from "@/components/ui/card";

type Props = {
  description: string;
  name: string;
  number: string;
};

const EquipmentCardUI = ({ number, description, name }: Props) => {
  return (
    <Card className="relative w-[340px] h-[200px] rounded-none flex items-center justify-center bg-white border-none">
      <div className="absolute -top-[24px] left-[157px] text-7xl font-spring text-tan font-semibold ">
        {number}
      </div>
      <div className="flex flex-col justify-center items-center text-center flex-1 text-background p-8">
        <div>
          <h2 className="font-semibold">{name}</h2>
        </div>
        <p className="text-sm leading-relaxed mt-4 line-clamp-3">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default EquipmentCardUI;
