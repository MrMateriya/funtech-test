import clsx from "clsx";
import { HTMLAttributes } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants/socialLinks";

export type FooterLink = {
  id: number;
  href: string;
  title: string;
};
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

export type FooterProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={clsx(className, "footer")}>
      <div className="footer__container container">
        <nav className="footer__nav">
          <div className="footer__wrapper">
            <Logo
              width={65}
              height={65}
              logoColor="white"
              title="DiveSea"
              rootClassName="footer__logo"
              svgClassName="footer__logo-svg"
              titleClassname="footer__logo-title"
            />
            <ul className="footer__socials-mobile">
              {SOCIAL_LINKS.map(({ id, href, svgHref }) => (
                <Link
                  className="footer__socials-link-mobile"
                  href={href}
                  key={id}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="footer__socials-svg-mobile"
                  >
                    <use xlinkHref={svgHref}></use>
                  </svg>
                </Link>
              ))}
            </ul>
          </div>

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
          <p className="footer__rights-title">©&nbsp;2023 </p>
          <span className="footer__rights-title-additional">
            ©&nbsp;2023 DiveSea All Rights Reserved.
          </span>
          <ul className="footer__socials">
            {SOCIAL_LINKS.map(({ id, href, svgHref }) => (
              <Link className="footer__socials-link" href={href} key={id}>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="footer__socials-svg"
                >
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
