import clsx from "clsx";
import { HTMLAttributes } from "react";
import Logo from "./Logo";
import Link from "next/link";

export type FooterLink = {
  id: number;
  href: string;
  title: string;
};
export type SocialLink = {
  id: number;
  href: string;
  svgHref: string;
};

const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "#",
    svgHref: "/icons/Instagram.svg",
  },
  {
    id: 2,
    href: "#",
    svgHref: "/icons/LinkedIn.svg",
  },
  {
    id: 3,
    href: "#",
    svgHref: "/icons/Facebook.svg",
  },
  {
    id: 4,
    href: "#",
    svgHref: "/icons/Twitter.svg",
  },
];

const footerLinks: FooterLink[] = [
  {
    id: 1,
    href: "#",
    title: "Privacy Policy",
  },
  {
    id: 2,
    href: "#",
    title: "Term & Conditions",
  },
  {
    id: 3,
    href: "#",
    title: "About Us",
  },
  {
    id: 4,
    href: "#",
    title: "Contact",
  },
];

type FooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Footer({ className }: FooterProps) {
  // бля навигаций дохуя это валидно?
  return (
    <footer className={clsx(className, "footer")}>
      <div className="footer__container container">
        <nav className="footer__nav">
          <Logo
            width={65}
            height={65}
            logoColor="white"
            title="DiveSea"
            className="footer__logo"
          />
          <ul className="footer__links">
            {footerLinks.map(({ id, href, title }) => (
              <li className="footer__links-item" key={id}>
                <Link className="footer__links-link" href={href}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__separator-line"></div>
        <nav className="footer__second-nav">
          <p className="footer__rights-title">©&nbsp;2023</p>
          <ul className="footer__socials">
            {socialLinks.map(({ id, href, svgHref }) => (
              <Link className="footer__socials-link" href={href} key={id}>
                <svg width={24} height={24} className="footer__socials-svg">
                  <use xlinkHref={svgHref}></use>
                </svg>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
