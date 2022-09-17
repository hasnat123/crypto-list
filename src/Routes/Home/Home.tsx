import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Components/Coin/Coin";
import AddCoin from "./Components/AddCoin/AddCoin";


export interface IState
{
  coins:
  {
    id: string
    name: string
    image: string
    symbol: string
    market_cap: number
    current_price: number
    price_change_percentage_24h: number
    total_volume: number
  }[]
}

const Home: React.FC = () => {

  let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2Cvolume_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30%20";

  const [coins, setCoins] = useState<IState["coins"]>([]);
  const [search, setSearch] = useState<string>("");

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
  }, [url]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void  =>
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
            <Coin key={coin.id} coin={coin}/>
          );
        }
      )}
      <AddCoin coins={coins} setCoins={setCoins}/>
    </div>
  );
}

export default Home;