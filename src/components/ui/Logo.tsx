import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes } from "react";

type LogoProps = {
  title?: string;
  width?: number;
  height?: number;
  href?: string;
  className?: string;
  logoColor?: "white" | "black";
} & HTMLAttributes<HTMLAnchorElement>;

export default function Logo({
  title,
  width = 53,
  height = 53,
  href = "/",
  className,
  logoColor = "black",
  ...props
}: LogoProps) {
  return (
    <Link className={clsx(className, "logo")} href={href} {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 53 53"
        className={`logo__svg logo__svg--${logoColor}`}
      >
        <use xlinkHref="/icons/Wave.svg"></use>
      </svg>
      {title && <span className={`logo__title logo__title--${logoColor}`}>{title}</span>}
    </Link>
  );
}
