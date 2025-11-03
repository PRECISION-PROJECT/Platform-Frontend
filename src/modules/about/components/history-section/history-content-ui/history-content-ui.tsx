import { TabsContent } from "@/components/ui/tabs";
import { IOption } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  tabList: IOption<string>[];
  tabContent: Record<
    string,
    {
      year: string;
      content: string;
      backgroundImage: string;
    }[]
  >;
};

const HistoryContentUI = ({ tabList, tabContent }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {tabList.map(({ value, label }) => {
        const content = tabContent[value as keyof typeof tabContent][0];
        return (
          <TabsContent key={label} value={value}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-end md:pr-[15vw] h-52 overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-md rounded-sm p-6 md:max-w-lg md:p-8"
              >
                <p className="font-light text-sm leading-relaxed text-foreground md:text-base">
                  {content.content}
                </p>
              </motion.div>
            </motion.div>
          </TabsContent>
        );
      })}
    </AnimatePresence>
  );
};

export default HistoryContentUI;
