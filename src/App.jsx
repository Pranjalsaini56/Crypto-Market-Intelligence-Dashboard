import CryptoChart from './CryptoChart'
import { useEffect, useState } from 'react'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {          //when page or component loads what to do useEffect tells that
    fetch('https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22BTCUSDT%22,%22ETHUSDT%22,%22SOLUSDT%22%5D') //fetch the binance data, request data from an API //.then = then do this then do this
      .then((response) => response.json()) //when the response came convert that response in json 
      .then((data) => { setCoins(data) }) //put the data inside coins
      .catch((error) => { console.log(error) }) //handle an error
  }, [])
  const filteredCoins = coins.filter((coin) =>
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className='app'>
      <h1>Crypto Dashboard</h1>
      <p>Track live crypto prices</p>
      <input className="search-box" type="text" placeholder='Select cryptocurrency...' value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className='crypto-container'>
        {filteredCoins.map((coin) => { //coins.map() creates a card automatically for every coin 
          const coinNames = {
            BTCUSDT: "Bitcoin",
            ETHUSDT: "Ethereum",
            SOLUSDT: "Solana"
          }
          const isPositive = Number(coin.priceChangePercent) >= 0
          return (
            <div className='crypto-card' key={coin.symbol}>
              <div className='coin-header'>
                <div>
                  <h2>{coinNames[coin.symbol]}</h2>
                  <p>{coin.symbol.replace("USDT", "")}</p>
                </div>
                <span className='coin-icon'>🪙</span>
              </div>
              <h3>
                ${Number(coin.lastPrice).toLocaleString()}
              </h3>
              <p className={isPositive ? "positive" : "negative"}>
                {isPositive ? "+" : ""}
                {Number(coin.priceChangePercent).toFixed(2)}%
              </p>
            </div>
          )
        })}
      </div>
      <CryptoChart />
    </div>
  )
}

export default App