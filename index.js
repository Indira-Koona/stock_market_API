const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;
let cors = require('cors');
app.use(cors());
app.use(express.static('static'));
let stocks = [
  {
    id: 1,
    name: "reliance industries",
    price: 2500,
    growth: 3.5,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 2,
    name: "hdfc bank",
    price: 1800,
    growth: 4.2,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 3,
    name: "icici bank",
    price: 1600,
    growth: 5.1,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 4,
    name: "tata consultancy services",
    price: 3200,
    growth: 2.9,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 5,
    name: "infosys",
    price: 2900,
    growth: 3.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 7,
    name: "sun pharmaceutical",
    price: 2300,
    growth: 3.2,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 8,
    name: "cipla",
    growth: 2.6,
    price: 2100,
    exchange: "bse",
    industry: "pharma",
  },
  {
    id: 9,
    name: "ntpc",
    price: 1200,
    growth: 4.1,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 10,
    name: "power grid corporation",
    price: 1500,
    growth: 3.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 11,
    name: "adani power",
    price: 2200,
    growth: 5.3,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 12,
    name: "lupin",
    price: 2000,
    growth: 4.5,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 13,
    name: "axis bank",
    price: 1750,
    growth: 2.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 14,
    name: "state bank of india",
    price: 1450,
    growth: 3.6,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 15,
    name: "bajaj finance",
    price: 2650,
    growth: -2.9,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 17,
    name: "biocon",
    price: 1850,
    growth: 3.9,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 18,
    name: "torrent power",
    price: 1600,
    growth: 2.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 19,
    name: "tata power",
    price: 1750,
    growth: 4.0,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 20,
    name: "jsw energy",
    price: 1450,
    growth: 3.1,
    industry: "power",
    exchange: "bse",
  },
];
function sortingHighToLow(price1,price2,highToLow)
{
if(highToLow)
{
return price2-price1;
}
else{
  return price1-price2;
}
}

app.get('/stocks/sort/pricing', (req, res) => {
  let highToLow=true;
  let pricing=stocks.sort(sortingHighToLow);
  res.json(pricing);
});
function sortingOnGrowthRate(growth1,growth2)
{
  return growth1-growth2;
}

app.get('/stocks/sort/growth',(req,res)=>{
let growth=stocks.sort(sortingOnGrowthRate);
res.json(growth);
});
function filterByExchange(exchangeObj,exchange)
{
return exchangeObj.exchange.toLowerCase()===exchange.toLowerCase();
}
app.get('/stocks/filter/exchange',(req,res)=>{
let exchange=req.query.exchange;
let result=stocks.filter(exchangeObj=>filterByExchange(exchangeObj,exchange));
res.json(result);
});

function filterByIndustry(industryObj,industry)
{
  return industryObj.industry.toLowerCase()===industry;
}
app.get('/stocks/filter/industry',(req,res)=>{
  let industry=req.query.industry;
  let result=stocks.filter(industryObj=>filterByIndustry(industryObj,industry));
  res.json(result);
});
app.get('/stocks',(req,res)=>{
  res.json(stocks);
})
app.get('/stocks/filter', (req, res) => {
  let filters = req.query; // filters from URL like ?industry=pharma&exchange=bse

  let result = stocks.filter((stock) => {
    // Check if every filter field matches the stock field
    return Object.keys(filters).every((key) => {
      if (typeof stock[key] === 'string') {
        return stock[key].toLowerCase() === filters[key].toLowerCase();
      }
      // Convert both to number for comparison if not string
      return Number(stock[key]) === Number(filters[key]);
    });
  });

  res.json(result);
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
