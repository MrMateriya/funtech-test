"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Virtual } from "swiper/modules";
import { useNFTList } from "@/hooks/useNTFList";
import { useRef } from "react";
import { motion } from "motion/react";
import NftSlide from "@/components/ui/NftSlide";
import Arrow from "@/../public/icons/Arrow.svg";

import "swiper/css";
import "swiper/css/virtual";

const SWIPER_BREAKPOINTS = {
  375: {
    slidesPerView: 1,
    spaceBetween: 32,
  },
  // 1024: {
  //   slidesPerView: 5,
  //   spaceBetween: 32,
  // },
  // 1440: {
  //   slidesPerView: 5,
  //   spaceBetween: 40,
  // },
} as const;

const SWIPER_CONFIG = {
  speed: 600,
  slidesPerView: 5,
  spaceBetween: 32,
  breakpoints: SWIPER_BREAKPOINTS,
} as const;

export default function TopNftSection() {
  const { NFTListData, isNFTListLoading } = useNFTList();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="main-page__top-nft top-nft">
      <h2 className="top-nft__heading">Weekly - Top NFT</h2>
      {isNFTListLoading ? (
        <div className="top-nft__loader">
          <motion.div
            className="top-nft__spinner"
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      ) : NFTListData?.length ? (
        <>
          <Swiper
            className="top-nft__swiper swiper-nft"
            navigation={true}
            loop={true}
            modules={[Virtual]}
            virtual
            speed={SWIPER_CONFIG.speed}
            // slidesPerView={SWIPER_CONFIG.slidesPerView}
            // spaceBetween={SWIPER_CONFIG.spaceBetween}
            breakpoints={SWIPER_CONFIG.breakpoints}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {NFTListData.map((nft, index) => (
              <SwiperSlide
                className="swiper-nft__slide"
                key={`${nft.name}-${index}`}
                virtualIndex={index}
              >
                <NftSlide className="swiper-nft__slide-nft" nft={nft} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-nft__navigation">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="swiper-nft__navigation-button"
              aria-label="Previous slide"
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
              aria-label="Next slide"
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
        </>
      ) : (
        <div className="top-nft__empty">No NFTs available</div>
      )}
    </section>
  );
}
