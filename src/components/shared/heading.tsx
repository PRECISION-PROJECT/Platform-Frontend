import { cn } from "@/lib/utils";
import { Show } from "../utilities";

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
    <div className={cn("space-y-2.5", className)}>
      <h2 className="text-5xl font-semibold tracking-normal uppercase font-spring">
        {title}
      </h2>
      <Show when={!!description}>
        <p className="text-sm font-poppins text-muted-foreground">
          {description}
        </p>
      </Show>
    </div>
  );
};
