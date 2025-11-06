import { TabsContent } from "@/components/ui/tabs";
import { IOption } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  tabList: IOption<string>[];
  tabContent: Record<
    string,
    {
      mainImage: string;
      leftImage: string;
      leftTitle: string;
      centerImage: string;
      centerTitle: string;
      bottomLeftImage: string;
      bottomLeftTitle: string;
      bottomRightImage: string;
      bottomRightTitle: string;
    }
  >;
};

const InspirationTabsContentUI = ({ tabList, tabContent }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {tabList.map(({ value, label }) => {
        const content = tabContent[value as keyof typeof tabContent];
        return (
          <TabsContent
            key={label}
            value={value}
            className="mt-20 bg-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid"
            >
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative aspect-[1021/487] max-h-[487px] w-full overflow-hidden"
              >
                <img
                  src={content.mainImage || "/placeholder.svg"}
                  alt="Main showcase"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                {/* Left Column - Prime Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative aspect-square overflow-hidden outline-4 outline-foreground md:row-span-2 md:aspect-auto"
                >
                  <img
                    src={
                      tabContent[value as keyof typeof tabContent].leftImage ||
                      "/placeholder.svg"
                    }
                    alt={content.leftTitle}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                    <h3 className="font-spring font-bold text-2xl tracking-wide text-foreground">
                      {content.leftTitle}
                    </h3>
                  </div>
                </motion.div>

                {/* Right Column - Top: Comfortable Living */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative aspect-square overflow-hidden outline-4 outline-foreground md:aspect-auto"
                >
                  <img
                    src={content.centerImage || "/placeholder.svg"}
                    alt={content.centerTitle}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                    <h3 className="font-spring font-bold text-2xl tracking-wide text-foreground">
                      {content.centerTitle}
                    </h3>
                  </div>
                </motion.div>

                {/* Right Column - Bottom Row: Two equal boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Bottom Left - Thoughtful Design */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative aspect-square md:aspect-auto overflow-hidden outline-4 outline-foreground"
                  >
                    <img
                      src={content.bottomLeftImage}
                      alt={content.bottomLeftTitle}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                      <h3 className="font-spring font-bold text-xl tracking-wide text-foreground">
                        {content.bottomLeftTitle}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Bottom Right - Prime Location */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="relative aspect-square md:aspect-auto overflow-hidden outline-4 outline-foreground"
                  >
                    <img
                      src={content.bottomRightImage}
                      alt={content.bottomRightTitle}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                      <h3 className="font-spring font-bold text-xl tracking-wide text-foreground">
                        {content.bottomRightTitle}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        );
      })}
    </AnimatePresence>
  );
};

export default InspirationTabsContentUI;
