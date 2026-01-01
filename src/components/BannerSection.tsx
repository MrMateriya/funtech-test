"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Abstraction_1_md from "@/../public/images/Abstraction_1_md.png";

export default function BannerSection() {
  return (
    <section className="main-page__banner banner container">
      <div className="banner__content">
        <div className="banner__wrapper">
          <h2 className="banner__title">Create and Sell NFTs</h2>
          <p className="banner__description">World&apos;s Largest NFT Place</p>
        </div>
        <span className="banner__buttons">
          <Button sizes="md" appearance="fill-white" className="banner__button">
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
      <div className="banner__images">
        <Image
          width={369}
          height={249}
          className="banner__images-img"
          src={Abstraction_1_md}
          alt="NFT artwork"
          loading="lazy"
        />
        <Image
          width={369}
          height={249}
          className="banner__images-shadow"
          src={Abstraction_1_md}
          alt="NFT artwork shadow"
          loading="lazy"
        />
      </div>
    </section>
  );
}
