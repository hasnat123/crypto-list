import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const CoinInfo = () => {

    const { id } = useParams();

    let url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&sparkline=true`;

    const [coin, setCoin] = useState();

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
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default CoinInfo;
