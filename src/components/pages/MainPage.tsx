"use client";

import PageLayout from "@/components/layouts/PageLayout";
import Button from "@/components/ui/Button";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import Abstraction_1 from "@/../public/images/Abstraction_1.jpg";
import Abstraction_2 from "@/../public/images/Abstraction_2.jpg";
import ArrowSpring from "@/../public/icons/ArrowSpring.svg";
import Arrow from "@/../public/icons/Arrow.svg";

import { SwiperSlide, Swiper } from "swiper/react";

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

export default function MainPage() {
  return (
    <PageLayout rootClassName="main-page">
      <section className="main-page__section-intro section-intro container">
        <div className="section-intro__content">
          <h1 className="section-intro__heading">Discover And Create NFTs</h1>
          <p className="section-intro__description">
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a{" "}
            <span className="section-intro__span">$20 bonus</span>.
          </p>
          <div className="section-intro__buttons">
            <Button>Explore More</Button>
            <Button appearance="outline-black">Create NFT</Button>
          </div>
          <div className="section-intro__metrics metrics">
            {metrics.map(({ id, amount, label }) => (
              <span className="metrics__amount" key={id}>
                {amount}
                <span className="metrics__label">{label}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="section-intro__abstractions abstractions">
          <div className="abstractions__first">
            <Image
              className="abstractions__first-image"
              width={390}
              height={395}
              alt="Abstraction_1"
              src={Abstraction_1}
            />
            <Image
              className="abstractions__shadow"
              width={390}
              height={395}
              alt="Abstraction_1"
              src={Abstraction_1}
            />
          </div>
          <div className="abstractions__wrapper">
            <Image
              className="abstractions__spring-arrow"
              width={128}
              height={124}
              alt="ArrowSpring"
              src={ArrowSpring}
            />
            <div className="abstractions__dots"></div>
            <div className="abstractions__second">
              <Image
                className="abstractions__second-image"
                width={320}
                height={322}
                alt="Abstraction_2"
                src={Abstraction_2}
              />
              <Image
                className="abstractions__shadow"
                width={320}
                height={322}
                alt="Abstraction_2"
                src={Abstraction_2}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="main-page__top-nft top-nft">
        <h2 className="top-nft__heading">Weekly - Top NFT</h2>
        <Swiper
          className="top-nft__swiper swiper-nft"
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          navigation={true}
        >
          {[0, 1, 2, 30, 40, 55, 60].map((el) => (
            <SwiperSlide key={el} className="swiper-nft__slide-nft slide-nft">
              <div className="slide-nft__image-wrapper">
                <Image
                  className="slide-nft__image"
                  src={Abstraction_1}
                  width={253}
                  height={253}
                  alt="Abstraction_1"
                />
                <span className="slide-nft__timer">07h 09m 12s</span>
              </div>
              <p className="slide-nft__title">Sun-Glass</p>
              <div className="slide-nft__content">
                <div className="slide-nft__bid">
                  Current bid
                  <span className="slide-nft__bid-amount">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      className="slide-nft__bid-eth-img"
                    >
                      <use xlinkHref="/icons/Ethereum.svg"></use>
                    </svg>
                    1.75
                  </span>
                </div>
                <Button appearance="fill-black" className="slide-nft__button">
                  PLACE BID
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-nft__navigation">
          <button className="swiper-nft__navigation-button">
            <Image
              className="swiper-nft__navigation-arrow"
              alt="back arrow"
              width={24}
              height={24}
              src={Arrow}
            />
          </button>
          <div className="swiper-nft__separator"></div>
          <button className="swiper-nft__navigation-button">
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
            <Button appearance="fill-white" className="banner__button">
              Explore More
            </Button>
            <Button appearance="outline-white" className="banner__button">
              Sell Artwork
            </Button>
          </span>
        </div>
        <Image
          width={369}
          height={249}
          className="banner__image"
          src={Abstraction_1}
          alt="NFT image"
        />
      </section>
    </PageLayout>
  );
}
