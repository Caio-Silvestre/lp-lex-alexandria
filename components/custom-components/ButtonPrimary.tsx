import { Button } from "../ui/button";

const ButtonPrimary = ({
  children,
  disabled,
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <Button variant="default" disabled={disabled} className={className}>
      {children}
    </Button>
  );
};

export default ButtonPrimary;
