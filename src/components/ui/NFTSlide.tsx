"use client";

import Image from "next/image";
import Button from "./Button";
import { useCountdown } from "@/hooks/useCountdown";
import { NFT } from "@/hooks/useNTFList";
import { HTMLAttributes } from "react";
import clsx from "clsx";

export type NFTSlideProps = {
  nft: NFT;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function NftSlide({ className, nft }: NFTSlideProps) {
  const timeRemaining = useCountdown(nft.expirationDate);

  return (
    <div className={clsx(className, "swiper-nft__slide-nft slide-nft")}>
      <div className="slide-nft__image-wrapper">
        <Image
          className="slide-nft__image"
          src={nft.imageSrc}
          width={253}
          height={253}
          alt={nft.name}
          loading={"lazy"}
        />
        <span className="slide-nft__timer">{timeRemaining}</span>
      </div>
      <p className="slide-nft__title">{nft.name}</p>
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
            {nft.currentBid.toFixed(2)}
          </span>
        </div>
        <Button appearance="fill-black" className="slide-nft__button">
          PLACE BID
        </Button>
      </div>
    </div>
  );
}
