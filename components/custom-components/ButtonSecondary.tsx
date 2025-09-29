import { Button } from "../ui/button";

const ButtonSecondary = ({
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
      className="bg-gradient-primary text-primary  disabled:brightness-150 disabled:saturate-50 p-[1px] flex justify-center items-center"
      disabled={disabled}
    >
      <span
        style={{ backgroundColor: fatherBackground }}
        className="flex flex-row justify-center items-center w-full h-full rounded-[8px] py-[12px] px-[16px] hover:opacity-70"
      >
        {children}
      </span>
    </Button>
  );
};

export default ButtonSecondary;
