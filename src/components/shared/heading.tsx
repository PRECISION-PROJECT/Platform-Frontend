interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="space-y-2.5">
      <h2 className="text-5xl font-semibold tracking-tight uppercase">
        {title}
      </h2>
      <p className="text-sm font-poppins">{description}</p>
    </div>
  );
};
