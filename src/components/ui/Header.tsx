"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import {
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { type TargetAndTransition } from "motion";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { SOCIAL_LINKS } from "@/lib/constants/socialLinks";

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

export type HeaderProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const HEADER_HEIGHT = 25;

const burgerVariants: Record<"menu" | "cross", TargetAndTransition> = {
  menu: {
    scale: 1,
  },
  cross: {
    scale: 0.8,
    transition: {
      duration: 0,
      ease: "easeInOut",
    },
  },
};
const lineLeftVariants: Record<"menu" | "cross", TargetAndTransition> = {
  menu: {
    transform: 0,
  },
  cross: {
    transform: "translateY(11px) rotate(-45deg)",
    transition: {
      duration: 0.2,
    },
  },
};
const lineRightVariants: Record<"menu" | "cross", TargetAndTransition> = {
  menu: {
    transform: 0,
  },
  cross: {
    rotate: 45,
    transform: "translateY(-11px) rotate(45deg)",
    transition: {
      duration: 0.2,
    },
  },
};
const lineMiddleVariants: Record<"menu" | "cross", TargetAndTransition> = {
  menu: {
    rotate: 0,
    opacity: 1,
  },
  cross: {
    opacity: 0,
    rotate: -45,
    transition: {
      duration: 0.2,
    },
  },
};
const modalOverlayVariants: Record<"open" | "closed", TargetAndTransition> = {
  closed: {
    opacity: 0,
    pointerEvents: "none",
  },
  open: {
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const modalContentVariants: Record<"open" | "closed", TargetAndTransition> = {
  closed: {
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    height: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = document.body.scrollTop || 0;
      const isBelowHeader = scrollY > HEADER_HEIGHT;

      setIsScrolled(isBelowHeader);
    };

    document.body.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenModal]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpenModal) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpenModal]);

  return (
    <header
      ref={headerRef}
      className={clsx(className, "header", isScrolled && "header--scrolled")}
    >
      <div className={clsx(!isScrolled && "container", "header__wrapper")}>
        <nav className="header__nav">
          <Logo
            className="header__logo"
            titleClassname="header__logo-title"
            svgClassName="header__logo-svg"
            title="DiveSea"
          />
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
        <motion.button
          onClick={() => setIsOpenModal((p) => !p)}
          animate={isOpenModal ? "cross" : "menu"}
          variants={burgerVariants}
          initial="menu"
          className="header__burger-btn"
        >
          <motion.div
            variants={lineLeftVariants}
            className="header__burger-span"
          ></motion.div>
          <motion.div
            variants={lineMiddleVariants}
            className="header__burger-span"
          ></motion.div>
          <motion.div
            variants={lineRightVariants}
            className="header__burger-span"
          ></motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            className="header__modal-overlay"
            animate="open"
            exit="closed"
            variants={modalOverlayVariants}
            initial="closed"
          >
            <motion.div
              className="header__modal-content"
              animate="open"
              exit="closed"
              variants={modalContentVariants}
              initial="closed"
            >
              <nav className="header__modal-nav">
                <div>
                  <ul className="header__modal-links">
                    {headerLinks.map(({ id, href, title }) => (
                      <li className="header__modal-links-item" key={id}>
                        <Link className="header__modal-links-link" href={href}>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="header__modal-socials">
                    {SOCIAL_LINKS.map(({ id, href, svgHref }) => (
                      <li className="header__modal-socials-item" key={id}>
                        <Link
                          className="header__modal-socials-link"
                          href={href}
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            className="header__modal-socials-svg"
                          >
                            <use xlinkHref={svgHref}></use>
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button sizes="lg" className="header__modal-button">
                  Connect Wallet
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
