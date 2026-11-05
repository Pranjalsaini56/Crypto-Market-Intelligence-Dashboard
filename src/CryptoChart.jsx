import {useEffect, useState} from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
} from "chart.js"

import {Line} from "react-chartjs-2"
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
)

function CryptoChart(){
    const [prices, setPrices] = useState([])
    useEffect(()=>{
        fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=12")
        .then((response)=>response.json())
        .then((data)=>{setPrices(data)})
        .catch((error)=>{console.log(error)})
    },[])
    const chartData={
        labels:prices.map((price)=>
        new Date(price[0]).toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
        })),
        datasets: [
            {
                label: "Bitcoin Price",
                data: prices.map((price)=>Number(price[4])),
                borderColor: "#b68fab",
                backgroundColor: "rgba(182,143,171,0.2)",
                fill: true,
                tension:0.4
            }
        ]
    }
    return <Line data={chartData} />
}

export default CryptoChart