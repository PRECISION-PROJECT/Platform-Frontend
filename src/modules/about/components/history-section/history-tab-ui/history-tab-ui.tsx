import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { IOption } from "@/types";
import { motion } from "framer-motion";

type Props = {
  tabList: IOption<string>[];
  currentTab: string;
};

const HistoryTabUI = ({ tabList, currentTab }: Props) => {
  return (
    <TabsList className="relative inline-flex h-auto w-full p-10 flex-wrap justify-center gap-4 rounded-none bg-paper md:gap-2 lg:gap-20">
      {tabList.map(({ value, label }, index) => (
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, scale: currentTab === value ? 1.25 : 1 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.25 }}
        >
          <TabsTrigger
            value={value}
            className={cn(
              "rounded-none font-spring font-semibold text-text-secondary text-6xl tracking-wider transition-all duration-300 bg-transparent data-[state=active]:text-tan data-[state=active]:shadow-none! data-[state=active]:bg-transparent"
            )}
          >
            {label}
          </TabsTrigger>
        </motion.div>
      ))}
    </TabsList>
  );
};

export default HistoryTabUI;
