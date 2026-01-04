"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useNFTList } from "@/hooks/useNTFList";
import { useState } from "react";
import { motion } from "motion/react";
import NftSlide from "@/components/ui/NftSlide";
import Arrow from "@/../public/icons/Arrow.svg";

type SlideDetail = {
  abs: number;
};

const BREAKPOINTS = {
  "(min-width: 3841px)": {
    slides: { perView: 7, spacing: 40, origin: "center" },
  },
  "(max-width: 3840px)": {
    slides: { perView: 7, spacing: 40, origin: "center" },
  },
  "(max-width: 3360px)": {
    slides: { perView: 6, spacing: 40, origin: "center" },
  },
  "(max-width: 2860px)": {
    slides: { perView: 5, spacing: 40, origin: "center" },
  },
  "(max-width: 2560px)": {
    slides: { perView: 7, spacing: 40, origin: "center" },
  },
  "(max-width: 2340px)": {
    slides: { perView: 5.8, spacing: 40, origin: "center" },
  },
  "(max-width: 1650px)": {
    slides: { perView: 5, spacing: 40, origin: "center" },
  },
  "(max-width: 1440px)": {
    slides: { perView: 4.55, spacing: 40, origin: "center" },
  },
  "(max-width: 1280px)": {
    slides: { perView: 4, spacing: 40, origin: "center" },
  },
  "(max-width: 1110px)": {
    slides: { perView: 3.5, spacing: 40, origin: "center" },
  },
  "(max-width: 1024px)": {
    slides: { perView: 4.3, spacing: 32, origin: "center" },
  },
  "(max-width: 930px)": {
    slides: { perView: 3.5, spacing: 32, origin: "center" },
  },
  "(max-width: 768px)": {
    slides: { perView: 3, spacing: 32, origin: "center" },
  },
  "(max-width: 640px)": {
    slides: { perView: 2.5, spacing: 32, origin: "center" },
  },
  "(max-width: 550px)": {
    slides: { perView: 2, spacing: 32, origin: "center" },
  },
  "(max-width: 450px)": {
    slides: { perView: 1.8, spacing: 32, origin: "center" },
  },
  "(max-width: 375px)": {
    slides: { perView: 1.68, spacing: 32, origin: "center" },
  },
  "(max-width: 340px)": {
    slides: { perView: 1.4, spacing: 32, origin: "center" },
  },
} as const;
const SLIDES_PER_VIEW = 7;
const NUMBER_SLIDES = SLIDES_PER_VIEW + 2;

export default function TopNftSection() {
  const { NFTListData, isNFTListLoading } = useNFTList();

  const [slidesDetails, setSlidesDetails] = useState<readonly SlideDetail[]>([]);
  
  const [sliderRefCallback, slider] = useKeenSlider<HTMLDivElement>({
    initial: 4,
    loop: {
      min: 0,
      max: (NFTListData?.length ?? 0) - 1,
    },
    range: {
      align: true,
      min: 0,
      max: (NFTListData?.length ?? 0) - 1,
    },
    mode: "free-snap",
    detailsChanged: (s) => {
      setSlidesDetails(s.track.details.slides);
    },
    slides: {
      number: NUMBER_SLIDES,
      perView: SLIDES_PER_VIEW,
      origin: "center",
      spacing: 40,
    },
    breakpoints: BREAKPOINTS,
  });

  const handleSlidePrev = () => {
    slider.current?.prev();
  }
  const handleSlideNext = () => {
    slider.current?.next(); 
  }

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
          <div ref={sliderRefCallback} className="keen-slider top-nft__swiper swiper-nft">
            {[...Array(NUMBER_SLIDES).keys()].map((idx) => {
              const absIndex = slidesDetails?.[idx]?.abs;
              const nft =
                typeof absIndex === "number" ? NFTListData[absIndex] : undefined;

              return (
                <div key={idx} className="keen-slider__slide swiper-nft__slide">
                  {nft && (
                    <NftSlide
                      className="swiper-nft__slide-nft"
                      nft={nft}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="swiper-nft__navigation">
            <button
              onClick={handleSlidePrev}
              className="swiper-nft__navigation-button"
              aria-label="Previous slide"
            >
              <Image
                className="swiper-nft__navigation-arrow"
                alt="back arrow"
                width={24}
                height={24}
                src={Arrow}
                loading="lazy"
              />
            </button>
            <div className="swiper-nft__separator"></div>
            <button
              onClick={handleSlideNext}
              className="swiper-nft__navigation-button"
              aria-label="Next slide"
            >
              <Image
                className="swiper-nft__navigation-arrow swiper-nft__navigation-arrow-second"
                alt="back arrow"
                width={24}
                height={24}
                src={Arrow}
                loading="lazy"
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
