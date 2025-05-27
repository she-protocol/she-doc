import { ImageWithCaption } from "../ImageWithCaption";
import colonyNFT from "./colony.png";
import sheyanNFT from "./sheyan.png";

export default function Nfts() {
  return (
    <div className="my-4 flex flex-col items-center sm:flex-row justify-center gap-8 w-full">
      <div className="w-full">
        <ImageWithCaption
          img={colonyNFT}
          alt="Colony NFT"
          caption="Colony NFT"
        />
      </div>
      <div className="w-full">
        <ImageWithCaption
          img={sheyanNFT}
          alt="Sheyan NFT"
          caption="Sheyan NFT"
        />
      </div>
    </div>
  );
}
