import styled from "styled-components";
import { PriceInfoData } from "./Coin";

const AllTimeHighest = styled.div``;

interface PriceProps {
  priceInfo: PriceInfoData | undefined;
}

function Price({ priceInfo }: PriceProps) {
  return (
    <>
      <AllTimeHighest>
        <h1>Alltime Highest</h1>
        <p>{priceInfo?.quotes.USD.ath_date}</p>
        <p>{priceInfo?.quotes.USD.ath_price}</p>
        <p>{priceInfo?.quotes.USD.percent_from_price_ath}</p>
      </AllTimeHighest>
    </>
  );
}

export default Price;
