
# 📈 Stock Market API

A simple Express.js API for managing and retrieving stock data. The API provides functionality for filtering and sorting stock information based on price, growth, exchange, and industry.

## 🚀 Features

- View all stocks
- Sort stocks by price (high to low)
- Sort stocks by growth rate
- Filter stocks by exchange (e.g., NSE, BSE)
- Filter stocks by industry (e.g., finance, pharma, power)

## 📂 API Endpoints

### Get All Stocks
```
GET /stocks
```
Returns a list of all stocks.

### Sort Stocks by Price (High to Low)
```
GET /stocks/sort/pricing
```
Returns stocks sorted by price in descending order.

### Sort Stocks by Growth Rate (Ascending)
```
GET /stocks/sort/growth
```
Returns stocks sorted by growth rate in ascending order.

### Filter Stocks by Exchange
```
GET /stocks/filter/exchange?exchange=nse
```
Returns stocks listed on the specified exchange.

### Filter Stocks by Industry
```
GET /stocks/filter/industry?industry=pharma
```
Returns stocks belonging to the specified industry.

## 🛠️ Technologies Used

- Node.js
- Express.js
- CORS Middleware

## 🏁 Getting Started

1. Clone the repository
2. Run `npm install`
3. Start the server with `node index.js`
4. Access API at `http://localhost:3000`

## 📌 Example Stock Data

- Reliance Industries, HDFC Bank, TCS, Infosys, Dr. Reddy's Labs, Sun Pharma, NTPC, Tata Power, etc.

## 📬 Author

Made by Indira Koona
