import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IOption } from "@/types";
import { motion } from "framer-motion";

type Props = {
  tabList: IOption<string>[];
};

const InspirationTabsUI = ({ tabList }: Props) => {
  return (
    <TabsList className="inline-flex h-auto w-full flex-wrap justify-center gap-4 rounded-none bg-transparent p-0">
      {tabList.map(({ value, label }, index) => (
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <TabsTrigger
            value={value}
            className="rounded-none font-spring font-light border-0 w-32 h-12 text-xs tracking-wider shadow-none transition-colors duration-300 bg-paper hover:bg-primary hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-foreground"
          >
            {label}
          </TabsTrigger>
        </motion.div>
      ))}
    </TabsList>
  );
};

export default InspirationTabsUI;
