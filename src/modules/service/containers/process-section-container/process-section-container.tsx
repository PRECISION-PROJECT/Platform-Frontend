import { ProcessSectionUI } from "../../components";

const processes = [
  {
    id: "01",
    title: "Advanced Equipment",
    description:
      "They use specialized, high-precision machinery like a Weinig moulder for custom profiles,",
  },
  {
    id: "02",
    title: "Advanced Equipment",
    description:
      "They use specialized, high-precision machinery like a Weinig moulder for custom profiles,",
  },
  {
    id: "03",
    title: "Advanced Equipment",
    description:
      "They use specialized, high-precision machinery like a Weinig moulder for custom profiles,",
  },
];

const ProcessSectionContainer = () => {
  return (
    <div className="bg-background py-20">
      <ProcessSectionUI processes={processes} />
    </div>
  );
};

export default ProcessSectionContainer;
