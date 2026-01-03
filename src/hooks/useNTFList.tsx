import { useMemo } from "react";
import { useFuntechSWR } from "@/lib/funtech-api/Http";
import { getRandomDate } from '@/lib/utils/getRandomDate';
import { getRandomInt } from '@/lib/utils/getRandomInt';
import { seededRandom } from '@/lib/utils/seededRandom';
import { ONE_HOUR_MS, TWELVE_HOURS_MS } from '@/lib/constants/time';

export type NFT = {
  name: string;
  currentBid: number;
  expirationDate: Date;
  imageSrc: string;
};

type NFTList = NFT[];

const NFT_IMAGES = [
  '/images/Abstraction_1_sm.png',
  '/images/Abstraction_2_tn.png',
  '/images/Abstraction_3_sm.png',
  '/images/Abstraction_4_sm.png',
  '/images/Abstraction_5_sm.png',
];

export const useNFTList = () => {
  const {
    data: NFTListData,
    error: NFTListError,
    isLoading: isNFTListLoading,
    mutate: mutateNFTList,
  } = useFuntechSWR<NFTList>({
    key: "nfts/list",
  });
  const mappedNFTListData = useMemo(() => {
    if (!NFTListData) return;
    

    const now = new Date();
    const oneHourLater = new Date(now.getTime() + ONE_HOUR_MS);
    const twelveHoursLater = new Date(now.getTime() + TWELVE_HOURS_MS);
    
    return NFTListData.map(({ name }) => {
      const random = seededRandom(name);
      
      return {
        name,
        currentBid: Math.round((random() * 10) * 100) / 100,
        expirationDate: getRandomDate(oneHourLater, twelveHoursLater, random),
        imageSrc: NFT_IMAGES[getRandomInt(NFT_IMAGES.length, random)],
      };
    });
  }, [NFTListData]);

  return {
    NFTListData: mappedNFTListData,
    NFTListError,
    isNFTListLoading,
    mutateNFTList,
  };
};
