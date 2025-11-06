import { cn } from "@/lib/utils";
import { Show, VStack } from "../utilities";

interface HeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <VStack spacing={10} className={cn("text-foreground", className)}>
      <h2 className="text-4xl font-semibold tracking-normal uppercase font-spring">
        {title}
      </h2>
      <Show when={!!description}>
        <p className="text-sm">{description}</p>
      </Show>
    </VStack>
  );
};
