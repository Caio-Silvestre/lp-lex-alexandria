import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={cn(
        "w-full px-[15%] md:px-[14%] min-h-80vh md:min-h-[70vh] lg:min-h-[60vh] ",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
