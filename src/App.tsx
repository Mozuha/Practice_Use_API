import React, { useState, useEffect } from 'react'
import './App.css'

import { CoinCapResponse } from './interfaces/coinCap'
import { getAllCoinCapData } from './services/api/coinCapAPI'
import { usdFormat } from './services/format/usdFormat'
import CoinCapTable from './components/CoinCapTable'

function App() {
  const [coinCapResponse, setCoinCapResponse] = useState<CoinCapResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const initialUrl = 'https://api.coincap.io/v2/assets'

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCoinCapData(initialUrl)
      //console.log(response)
      const formattedResponse = response.data?.map((data: CoinCapResponse) => {
        data.supply = new Intl.NumberFormat('en').format(parseFloat(data.supply))
        data.maxSupply = new Intl.NumberFormat('en').format(parseFloat(data.maxSupply!))
        data.marketCapUsd = usdFormat(data.marketCapUsd)
        data.volumeUsd24Hr = usdFormat(data.volumeUsd24Hr)
        data.priceUsd = usdFormat(data.priceUsd)
        data.changePercent24Hr = parseFloat(data.changePercent24Hr).toFixed(1) + '%'
        data.vwap24Hr = usdFormat(data.vwap24Hr)

        return data
      })
      setCoinCapResponse(formattedResponse)
      setIsLoading(false)
    }

    fetchData()
  }, [])
  //console.log(coinCapResponse)

  return (
    <div>
      {
        isLoading ? <h1>Loading...</h1> : (
          <>
            <h1>Cryptocurrency Data</h1>
            <div className='grid-container'>
              <CoinCapTable coinCapData={coinCapResponse} />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App
