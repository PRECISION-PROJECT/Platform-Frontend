const AboutUsContentUI = () => {
  return (
    <div className="flex flex-col justify-center space-y-8">
      <h2 className="font-spring text-5xl font-semibold md:text-3xl lg:text-5xl text-balance">
        ABOUT US
      </h2>
      <p className="font-spring font-light text-xl leading-relaxed md:text-2xl text-pretty ml-6">
        Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
        Aliquam erat volutpat. Donec
      </p>

      <div className="h-px w-full bg-primary-foreground/30" />

      <div className="flex gap-6">
        <div className="shrink-0">
          <span className="text-2xl md:text-3xl lg:text-6xl font-bold text-foreground">
            P
          </span>
        </div>
        <div className="space-y-4 pt-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            orem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu .
            Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
            .Aliquam erat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContentUI;
