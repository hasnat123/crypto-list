import React, { useState } from 'react'
import { IState as Props } from '../../Home'

interface IProps
{
  coins: Props["coins"]
  setCoins: React.Dispatch<React.SetStateAction<Props["coins"]>>
}

const AddCoin: React.FC<IProps> = ({coins, setCoins}) => {

  const [inputs, setInputs] = useState(
  {
    id: "",
    name: "",
    image: "",
    symbol: "",
    market_cap: "",
    current_price: "",
    price_change_percentage_24h: "",
    total_volume: ""
  })

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
  {
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  const HandleAdd = (): void =>
  {
    setCoins([
      ...coins,
      {
        id: inputs.id,
        name: inputs.name,
        image: inputs.image,
        symbol: inputs.symbol,
        market_cap: parseInt(inputs.market_cap),
        current_price: parseInt(inputs.current_price),
        price_change_percentage_24h: parseInt(inputs.price_change_percentage_24h),
        total_volume: parseInt(inputs.total_volume),
      }
    ])
    setInputs({
      id: "",
      name: "",
      image: "",
      symbol: "",
      market_cap: "",
      current_price: "",
      price_change_percentage_24h: "",
      total_volume: ""
    })
  }

  return (
    <>
      <h1 id='add-coin'>Add Coin</h1>
      <div className='add-coin-section'>
        <div className="left">
          <input type="text" onChange={HandleChange} placeholder="id" name='id' value={inputs.id}/>
          <input type="text" onChange={HandleChange} placeholder="name" name='name' value={inputs.name}/>
          <input type="text" onChange={HandleChange} placeholder="image" name='image' value={inputs.image}/>
          <input type="text" onChange={HandleChange} placeholder="symbol" name='symbol' value={inputs.symbol}/>
        </div>
        <div className="right">
          <input type="number" onChange={HandleChange} placeholder="market cap" name='market_cap' value={inputs.market_cap}/>
          <input type="number" onChange={HandleChange} placeholder="current price" name='current_price' value={inputs.current_price}/>
          <input type="number" onChange={HandleChange} placeholder="price change" name='price_change_percentage_24h' value={inputs.price_change_percentage_24h}/>
          <textarea onChange={HandleChange} placeholder="volume" name='total_volume' value={inputs.total_volume}/>
        </div>
      </div>
      <button className='add-coin-btn' onClick={HandleAdd}>Add</button>
    </>
  )
}

export default AddCoin