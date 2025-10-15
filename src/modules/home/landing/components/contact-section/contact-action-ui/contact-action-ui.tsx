import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const ContactActionUI = () => {
  return (
    <div className="text-center">
      <Button className={cn("w-fit border-none rounded-none p-10")}>
        CONTACT WITH US NOW
      </Button>
    </div>
  );
};

export default ContactActionUI;
