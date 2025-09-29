import { Button } from "../ui/button";

const ButtonGhost = ({
  children,
  disabled,
  fatherBackground,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  fatherBackground?: string;
}) => {
  return (
    <Button
      variant="default"
      className="bg-[#b3b3b3]  active:text-white text-primary disabled:brightness-150 disabled:saturate-50 p-[1px]  hover:brightness-100 hover:opacity-100 hover:bg-[linear-gradient(90deg,#FFD700_0%,#FFA500_50%,#FF8C00_100%)]"
      disabled={disabled}
    >
      <span
        style={{ backgroundColor: fatherBackground }}
        className="flex flex-row justify-center items-center w-full h-full rounded-[8px] py-[12px] px-[16px] "
      >
        {children}
      </span>
    </Button>
  );
};

export default ButtonGhost;
