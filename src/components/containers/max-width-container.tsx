import { cn } from "@/lib/utils";
import type { FCC } from "@/types";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const MaxWidthContainer: FCC<Props> = ({ children, className, ...rest }) => {
  return (
    <section
      className={cn(
        "mx-auto h-full max-w-full px-4 md:max-w-screen-xl",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default MaxWidthContainer;
