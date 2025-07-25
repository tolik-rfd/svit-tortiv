import { FC } from "react";
import { Button } from "@/shared/ui/button";

interface AddToCartButtonProps {
  className?: string;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  className,
  ...rest
}) => {
  const handleAddToCart = () => {};

  return (
    <Button
      size="full"
      className={className}
      {...rest}
      onClick={handleAddToCart}
    >
      Додати в кошик
    </Button>
  );
};
