import clsx from "clsx";
import { HTMLAttributes } from "react";

export type Appearance =
  | "fill-black"
  | "outline-black"
  | "fill-white"
  | "outline-white";
export type Sizes = "sm" | "md" | "lg";

type ButtonProps = {
  children?: React.ReactNode;
  sizes?: Sizes;
  appearance?: Appearance;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  appearance = "fill-black",
  sizes = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const appearanceMap = {
    "fill-black": "btn-black",
    "outline-black": "btn-outline-black",
    "fill-white": "btn-fill-white",
    "outline-white": "btn-outline-white",
  };
  const sizesMap = {
    sm: "--sm",
    md: "--md",
    lg: "--lg",
  };

  return (
    <button
      className={clsx(
        `${appearanceMap[appearance]} ${
          appearanceMap[appearance] + sizesMap[sizes]
        }`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
