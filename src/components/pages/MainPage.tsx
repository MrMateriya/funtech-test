"use client";

import PageLayout from "@/components/layouts/PageLayout";
import Button from "@/components/ui/Button";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import Abstraction_1_sm from "@/../public/images/Abstraction_1_sm.png";
import Abstraction_1_md from "@/../public/images/Abstraction_1_md.png";
import Abstraction_2_sm from "@/../public/images/Abstraction_2_sm.png";
import Arrow from "@/../public/icons/Arrow.svg";

import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useNFTList } from "@/hooks/useNTFList";
import NFTSlide from "@/components/ui/NFTSlide";
import { useRef } from "react";
import * as motion from "motion/react-client";
import { type TargetAndTransition } from "motion";
import { stagger } from "motion/react";

type Metric = {
  id: number;
  amount: string; //TODO: передать под numerous
  label: string;
};

const metrics: Metric[] = [
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
type VisibleVariant = Record<"hidden" | "visible", TargetAndTransition>;

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

export default function MainPage() {
  const { NFTListData, isNFTListLoading } = useNFTList();
  const swiperRef = useRef<SwiperType | null>(null);

  console.log(NFTListData);

  return (
    <PageLayout className="main-page">
      <section className="main-page__section-intro section-intro container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="section-intro__content"
        >
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
            {metrics.map(({ id, amount, label }) => (
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
              alt="Abstraction_1_sm"
              src={Abstraction_1_sm}
            />
            <Image
              className="abstractions__shadow"
              width={390}
              height={395}
              alt="Abstraction_1_sm"
              src={Abstraction_1_sm}
            />
          </motion.div>
          <div className="abstractions__wrapper">
            <motion.div
              variants={imageVariants}
              className="abstractions__second"
            >
              <Image
                className="abstractions__second-image"
                width={320}
                height={322}
                alt="Abstraction_2_sm"
                src={Abstraction_2_sm}
              />
              <Image
                className="abstractions__shadow"
                width={320}
                height={322}
                alt="Abstraction_2_sm"
                src={Abstraction_2_sm}
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

      <section className="main-page__top-nft top-nft">
        <h2 className="top-nft__heading">Weekly - Top NFT</h2>
        <Swiper
          className="top-nft__swiper swiper-nft"
          spaceBetween={40}
          slidesPerView={4}
          loop={true}
          navigation={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {NFTListData && NFTListData.length > 0 ? (
            NFTListData.map((nft, index) => (
              <SwiperSlide
                className="swiper-nft__slide"
                key={`${nft.name}-${index}`}
              >
                <NFTSlide
                  key={`${nft.name}-${index}`}
                  className="swiper-nft__slide-nft"
                  nft={nft}
                />
              </SwiperSlide>
            ))
          ) : isNFTListLoading ? (
            <div>Loading...</div>
          ) : (
            <div>No NFTs available</div>
          )}
        </Swiper>
        <div className="swiper-nft__navigation">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-nft__navigation-button"
          >
            <Image
              className="swiper-nft__navigation-arrow"
              alt="back arrow"
              width={24}
              height={24}
              src={Arrow}
            />
          </button>
          <div className="swiper-nft__separator"></div>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-nft__navigation-button"
          >
            <Image
              className="swiper-nft__navigation-arrow swiper-nft__navigation-arrow-second"
              alt="back arrow"
              width={24}
              height={24}
              src={Arrow}
            />
          </button>
        </div>
      </section>

      <section className="main-page__banner banner container">
        <div className="banner__content">
          <div className="banner__wrapper">
            <h2 className="banner__title">Create and Sell NFTs</h2>
            <p className="banner__description">World’s Largest NFT Place</p>
          </div>
          <span className="banner__buttons">
            <Button
              sizes="md"
              appearance="fill-white"
              className="banner__button"
            >
              Explore More
            </Button>
            <Button
              sizes="md"
              appearance="outline-white"
              className="banner__button"
            >
              Sell Artwork
            </Button>
          </span>
        </div>
        <Image
          width={369}
          height={249}
          className="banner__image"
          src={Abstraction_1_md}
          alt="Abstraction_1_md"
        />
      </section>
    </PageLayout>
  );
}
