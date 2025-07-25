import { FC } from "react";
import classNames from "classnames";
import { IconButton } from "@/shared/ui/icon-button";
import { LikeIcon } from "@/shared/assets/icons/like-icon";

interface AddToFavoritesButtonProps {
  isFavorite: boolean;
  className?: string;
}

export const AddToFavoritesButton: FC<AddToFavoritesButtonProps> = ({
  isFavorite,
  className,
}) => {
  const handleAddToFavorites = () => {};

  return (
    <IconButton
      className={classNames(
        "h-9 w-9 bg-white text-custom-light-gray transition-all hover:text-custom-orange",
        isFavorite && "text-custom-orange",
        className,
      )}
      onClick={handleAddToFavorites}
    >
      <LikeIcon />
    </IconButton>
  );
};
