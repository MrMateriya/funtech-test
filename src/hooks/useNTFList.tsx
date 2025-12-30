import { useFuntechSWR } from "@/lib/funtech-api/Http";
import { getRandomDate } from '@/lib/utils/getRandomDate';
import { getRandomInt } from '@/lib/utils/getRandomInt';

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
  let mappedNFTListData;
  if (NFTListData) {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000); // +1 час
    const twelveHoursLater = new Date(now.getTime() + 12 * 60 * 60 * 1000); // +12 часов
    
    mappedNFTListData = NFTListData.map(({ name }) => ({
      name,
      currentBid: Math.round((Math.random() * 10) * 100) / 100, // случайное число до сотых
      expirationDate: getRandomDate(oneHourLater, twelveHoursLater),
      imageSrc: NFT_IMAGES[getRandomInt(NFT_IMAGES.length)],
    }));
  }

  return {
    NFTListData: mappedNFTListData,
    NFTListError,
    isNFTListLoading,
    mutateNFTList,
  };
};
