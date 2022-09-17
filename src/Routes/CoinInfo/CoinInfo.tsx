import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export interface IState
{
  coin:
  {
    id: string
    name: string
    image: string
    symbol: string
    market_cap: number
    current_price: number
    price_change_percentage_24h: number
    total_volume: number
  }
}

const CoinInfo: React.FC = () => {

    const { id } = useParams();

    let url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&sparkline=true`;

    const [coin, setCoin] = useState<IState["coin"]>();

    useEffect(() =>
    {
      axios.get(url)
        .then(res=>
        {
          setCoin(res.data);
          console.log(res.data);
        })
        .catch(err=>
        {
          console.log(err);
        })
    }, [url]);

    return (
        <div>
            <h1>{coin?.name}</h1>
        </div>
    )
}

export default CoinInfo;
