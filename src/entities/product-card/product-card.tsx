"use client";
import { FC } from "react";
import classNames from "classnames";
import { SlotType } from "../../widgets/catalog-card/types/slot";

const Root: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-3 rounded-custom-24 bg-white p-4 text-custom-chocolate-dark",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const Header: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

const Body: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

const Footer: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

interface TitleProps {
  name: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ name, className, ...rest }) => {
  return (
    <p className={classNames("w-[300px] truncate", className)} {...rest}>
      {name}
    </p>
  );
};

const Actions: FC<SlotType> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("flex flex-col gap-3", className)} {...rest}>
      {children}
    </div>
  );
};

// AddToFavorites
// interface AddToFavoritesProps {
//   isFavorite: boolean;
//   className?: string;
// }

// const AddToFavorites: FC<AddToFavoritesProps> = ({ isFavorite, className }) => {
//   const handleAddToFavorites = () => {};
//   return (
//     <IconButton
//       className={classNames(
//         "absolute top-[8px] right-[12px] h-9 w-9 bg-white text-custom-light-gray transition-all hover:text-black",
//         isFavorite && "text-black",
//         className,
//       )}
//       onClick={handleAddToFavorites}
//     >
//       <LikeIcon />
//     </IconButton>
//   );
// };

// Sale
// interface SaleProps {
//   sale?: SaleType;
//   className?: string;
// }

// const Sale: FC<SaleProps> = ({ sale, className }) => {
//   return (
//     sale?.isActive && (
//       <FlameIcon
//         className={classNames(
//           "absolute top-[8px] left-[12px] h-9 w-9",
//           className,
//         )}
//       />
//     )
//   );
// };

// Photo
// interface PhotoProps {
//   imageUrl: string;
//   className?: string;
// }

// const Photo: FC<PhotoProps> = ({ imageUrl, className }) => {
//   return (
//     <Image
//       className={className}
//       width={300}
//       height={265}
//       src={imageUrl}
//       alt="Product photo"
//     />
//   );
// };

// Picture
// interface PictureProps {
//   children: ReactNode;
//   className?: string;
// }

// const Picture: FC<PictureProps> = ({ children, className }) => {
//   return <div className={classNames("relative", className)}>{children}</div>;
// };

// Info

// interface InfoProps {
//   product: ProductType;
//   className?: string;
// }

// const Info: FC<InfoProps> = ({ product, className }) => {
//   const { name, sale, price, unit, currency, weights, amounts } = product;

//   const [selectedWeightId, setSelectedWeightId] = useState<string | null>(
//     weights ? weights[0].id : null,
//   );

//   const [selectedAmountId, setSelectedAmountId] = useState<string | null>(
//     amounts ? amounts[0].id : null,
//   );

//   const selectedWeight =
//     weights?.find((item) => item.id === selectedWeightId) || undefined;

//   const selectedAmount =
//     amounts?.find((item) => item.id === selectedAmountId) || undefined;

//   const selectedValue = selectedWeight ?? selectedAmount;

//   const currentPrice =
//     selectedValue && selectedValue.value ? price * selectedValue.value : price;

//   return (
//     <div className={className}>
//       <p className="w-[300px] truncate">{name}</p>

//       {weights && unit === "кг" && (
//         <div className="flex items-center gap-4">
//           <p className="font-extralight">Вага:</p>
//           <div className="flex gap-2">
//             {weights.map((item) => (
//               <button
//                 className={classNames(
//                   "cursor-pointer rounded-[16px] px-2 py-0.5 leading-none transition-all",
//                   { "bg-custom-cofe": selectedWeightId === item.id },
//                 )}
//                 key={item.id}
//                 onClick={() => setSelectedWeightId(item.id)}
//               >{`${item.value} ${unit}`}</button>
//             ))}
//           </div>
//         </div>
//       )}

//       {amounts && unit === "шт" && (
//         <div className="flex items-center gap-4">
//           <p className="font-extralight">Кіл-ть:</p>
//           <div className="flex gap-2">
//             {amounts.map((item) => (
//               <button
//                 className={classNames(
//                   "cursor-pointer rounded-[16px] px-2 py-0.5 leading-none transition-all",
//                   { "bg-custom-cofe": selectedAmountId === item.id },
//                 )}
//                 key={item.id}
//                 onClick={() => setSelectedAmountId(item.id)}
//               >{`${item.value} ${unit}`}</button>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="flex items-center gap-4">
//         <p className="font-extralight">Цiна:</p>
//         {!sale?.isActive ? (
//           <p className="text-xl">{`${currentPrice} ${currency}`}</p>
//         ) : (
//           <>
//             <p className="text-sm line-through">{`${currentPrice} ${currency}`}</p>
//             <p className="text-xl text-custom-red">
//               {sale?.salePercent
//                 ? (currentPrice * ((100 - sale.salePercent) / 100)).toFixed(0)
//                 : ""}
//               {currency}
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// Actions

// Delivery
// interface DeliveryProps {
//   delivery: DeliveryType;
//   className?: string;
// }

// const Delivery: FC<DeliveryProps> = ({ delivery, className }) => {
//   const { timeDays, cost } = delivery;

//   return (
//     <div
//       className={classNames(
//         "mt-3 flex justify-between gap-4 text-xs",
//         className,
//       )}
//     >
//       <div className="flex items-center gap-2">
//         <DeliveryLocationIcon />
//         <p>доставка</p>
//       </div>

//       <div className="flex items-center gap-2">
//         <ClockIcon />
//         <p>{`${timeDays} дні`}</p>
//       </div>

//       <div className="flex items-center gap-2">
//         <MoneyIcon />
//         <p>{`${cost} грн`}</p>
//       </div>
//     </div>
//   );
// };

export { Root, Header, Body, Footer, Title, Actions };
