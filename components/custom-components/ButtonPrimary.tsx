import { Button } from "../ui/button";

const ButtonPrimary = ({
  children,
  disabled,
  className,
  onClick,
  type,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <Button
      variant="default"
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
