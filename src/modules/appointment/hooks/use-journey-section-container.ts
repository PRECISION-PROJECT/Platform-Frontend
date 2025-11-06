export const useJourneySectionContainer = () => {
  const steps = [
    {
      number: "01",
      title: "PROCESS",
      description:
        "Our streamlined operations, which include ripping, re-sawing, and moulding. Our streamlined operations, which include ripping, re-sawing, and moulding.",
    },
    {
      number: "02",
      title: "POLICY",
      description:
        "Our streamlined operations, which include ripping, re-sawing, and moulding. Our streamlined operations, which include ripping, re-sawing, and moulding.",
    },
    {
      number: "03",
      title: "REMINDER",
      description:
        "Our streamlined operations, which include ripping, re-sawing, and moulding. Our streamlined operations, which include ripping, re-sawing, and moulding.",
    },
  ];

  const bottomText =
    "Our streamlined operations, which include ripping, re-sawing, and moulding, Our streamlined operations, which include ripping, re-sawing, and moulding.";

  return {
    steps,
    bottomText,
  };
};
