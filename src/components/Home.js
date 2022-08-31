import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2Cvolume_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30%20";

function Home() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() =>
  {
    axios.get(url)
      .then(res=>
      {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(err=>
      {
        console.log(err);
      })
  }, []);

  const onChange = e =>
  {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
  {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-search-text">Search a cryptocurrency</div>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={onChange}/>
        </form>
      </div>
      {filteredCoins.map(coin =>
        {
          return(
            <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume}/>
          );
        })}
    </div>
  );
}

export default Home;