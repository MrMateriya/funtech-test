"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "motion/react";
import { type TargetAndTransition } from "motion";
import { stagger } from "motion/react";
import Abstraction_1_sm from "@/../public/images/Abstraction_1_sm.png";
import Abstraction_2_sm from "@/../public/images/Abstraction_2_sm.png";

type VisibleVariant = Record<"hidden" | "visible", TargetAndTransition>;

type Metric = {
  id: number;
  amount: string;
  label: string;
};
const METRICS: Metric[] = [
  {
    id: 1,
    amount: "430K+",
    label: "Art Works",
  },
  {
    id: 2,
    amount: "159K+",
    label: "Creators",
  },
  {
    id: 3,
    amount: "87K+",
    label: "Collections",
  },
];

const opacityVariants: VisibleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const opacityHalfVariants: VisibleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const imageContainerVariants: VisibleVariant = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};
const imageVariants: VisibleVariant = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const sectionVariants: VisibleVariant = {
  hidden: {},
  visible: {
    transition: { delayChildren: stagger(0.3) },
  },
};
const pathVariants: VisibleVariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

export default function IntroSection() {
  return (
    <section className="main-page__section-intro section-intro container">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="section-intro__content"
      >
        <motion.p
          variants={opacityHalfVariants}
          className="section-intro__creators"
        >
          Over 1m creators
        </motion.p>
        <motion.h1
          variants={opacityVariants}
          className="section-intro__heading"
        >
          Discover And Create NFTs
        </motion.h1>
        <motion.p
          variants={opacityVariants}
          className="section-intro__description"
        >
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a{" "}
          <span className="section-intro__span">$20 bonus</span>.
        </motion.p>
        <motion.div
          variants={opacityVariants}
          className="section-intro__buttons"
        >
          <Button className="section-intro__button" sizes="lg">
            Explore More
          </Button>
          <Button
            className="section-intro__button"
            sizes="md"
            appearance="outline-black"
          >
            Create NFT
          </Button>
        </motion.div>
        <motion.div
          variants={opacityVariants}
          className="section-intro__metrics metrics"
        >
          {METRICS.map(({ id, amount, label }) => (
            <span className="metrics__amount" key={id}>
              {amount}
              <span className="metrics__label">{label}</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
        className="section-intro__abstractions abstractions"
      >
        <motion.div variants={imageVariants} className="abstractions__first">
          <Image
            className="abstractions__first-image"
            width={390}
            height={395}
            alt="Abstraction artwork 1"
            src={Abstraction_1_sm}
            loading="lazy"
          />
          <Image
            className="abstractions__shadow"
            width={390}
            height={395}
            alt="Abstraction_1_sm shadow"
            src={Abstraction_1_sm}
            loading="lazy"
          />
        </motion.div>
        <div className="abstractions__wrapper">
          <motion.div variants={imageVariants} className="abstractions__second">
            <Image
              className="abstractions__second-image"
              width={320}
              height={322}
              alt="Abstraction artwork 2"
              src={Abstraction_2_sm}
              loading="lazy"
            />
            <Image
              className="abstractions__shadow"
              width={320}
              height={322}
              alt="Abstraction_2_sm shadow"
              src={Abstraction_2_sm}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            variants={opacityVariants}
            className="abstractions__spring-arrow"
          >
            <svg
              width="142"
              height="136"
              viewBox="0 0 142 136"
              fill="none"
              className="abstractions__spring-arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={pathVariants}
                d="M15.6509 43.2948C32.4342 30.7253 51.9746 23.0114 72.6833 28.6292C91.3752 33.7 103.143 49.6307 90.5399 69.3322C84.5738 78.6585 71.8709 85.1865 61.8854 79.8739C50.7608 73.9553 59.5291 59.0169 66.6508 54.7088C83.2842 44.6466 106.697 49.3236 118.212 68.8675C131.849 92.012 108.786 103.532 108.77 103.344"
                stroke="black"
                strokeWidth="3.37884"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                variants={pathVariants}
                d="M19.2679 18.3822C19.8772 20.8067 19.5254 23.2337 19.2859 25.6773C18.5004 33.7008 15.355 42.031 9.71129 47.2934C17.1377 44.0372 27.7919 42.619 34.5371 48.3348"
                stroke="black"
                strokeWidth="3.37884"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <div className="abstractions__dots"></div>
        </div>
      </motion.div>
    </section>
  );
}
