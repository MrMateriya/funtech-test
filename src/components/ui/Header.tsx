import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { HTMLAttributes } from "react";
import clsx from "clsx";

export type HeaderLink = {
  id: number;
  href: string;
  title: string;
};

const headerLinks: HeaderLink[] = [
  {
    id: 1,
    href: "#",
    title: "Discover",
  },
  {
    id: 2,
    href: "#",
    title: "Creators",
  },
  {
    id: 3,
    href: "#",
    title: "Sell",
  },
  {
    id: 4,
    href: "#",
    title: "stats",
  },
];

type HeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(className, "container", "header")}>
      <nav className="header__nav">
        <Logo className="header__logo" />
        <ul className="header__links">
          {headerLinks.map(({ id, href, title }) => (
            <li className="header__links-item" key={id}>
              <Link className="header__links-link" href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button sizes="sm" className="header__button">
        Connect Wallet
      </Button>
    </header>
  );
}
