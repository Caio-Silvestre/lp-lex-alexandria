interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <span
      className={`mb-[12px] inline-flex w-max items-center rounded-full border p-[8px] text-xs text-[#333333] border-[#B3B3B3] ${className}`}
    >
      {children}
    </span>
  );
}
