# 🪙 Crypto Dashboard

A web-based cryptocurrency dashboard built with **React.js** that fetches live cryptocurrency market data using the Binance API. It provides an interactive interface to track cryptocurrency prices, monitor 24-hour price changes, and visualize historical price movements through charts.

## ✨ Features

* **Live Cryptocurrency Prices:** Fetches current market prices for Bitcoin (BTC), Ethereum (ETH), and Solana (SOL).
* **24-Hour Price Changes:** Displays percentage changes with visual indicators for positive and negative movements.
* **Interactive Search:** Search and filter cryptocurrencies dynamically.
* **Price Visualization:** Displays historical cryptocurrency price movements using interactive line charts.
* **API Integration:** Retrieves cryptocurrency market data directly from the Binance REST API.
* **Dynamic UI:** Uses React state management to update the interface based on API responses.

## 🛠️ Tech Stack

* **Frontend:** React.js, JavaScript
* **Styling:** HTML5, CSS3
* **API:** Binance REST API
* **Charts:** Chart.js, React-Chartjs-2
* **Build Tool:** Vite

## 📊 API Endpoints

This project uses Binance public market data endpoints:

| Endpoint              | Purpose                             |
| --------------------- | ----------------------------------- |
| `/api/v3/ticker/24hr` | Fetches 24-hour market statistics   |
| `/api/v3/klines`      | Fetches historical candlestick data |

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd crypto-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Chart Dependencies

```bash
npm install chart.js react-chartjs-2
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the localhost URL displayed in your terminal.

## 📁 Project Structure

```text
crypto-dashboard/
│
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── CryptoChart.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🔮 Future Enhancements

* Support for more cryptocurrencies.
* Dynamic chart updates based on selected cryptocurrency.
* Multiple chart timeframes (1H, 1D, 1W, 1M).
* Market capitalization and trading volume statistics.
* Automatic market data refresh.
* Responsive design for mobile and tablet devices.
* Loading indicators and error handling.

## 👩‍💻 Author

**Pranjal Saini**

B.Tech – Computer Science and Engineering
NIT Srinagar

---

⭐ If you find this project interesting, consider giving it a star!
