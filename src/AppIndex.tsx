'use client'

import { useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import { NewsPanel } from './components/NewsPanel'
import { TradingView } from './components/TradingView'
import { MarketAnalysis } from './components/MarketAnalysis'
import { AdvancedAnalysis } from './components/AdvancedAnalysis'
import { api } from './services/api'
import type { NewsItem, PredictionData, CryptoPrice, FeaturedCoin } from './services/types'
import { Coins, Clock} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Button } from "./components/ui/button"
import { featuredCoinsService } from './services/featuredCoins'
import { FeaturedCoinsManager } from './components/FeaturedCoinsManager';

export default function AppIndex() {
  const [crypto, setCrypto] = useState('starknet')
  const [news, setNews] = useState<NewsItem[]>([])
  const [price, setPrice] = useState<CryptoPrice>({
    price: 0,
    change24h: 0,
    timestamp: Date.now()
  })
  const [predictions, setPredictions] = useState<PredictionData[]>([])
  const [timeframe, setTimeframe] = useState('1D')
  const [featuredCoins, setFeaturedCoins] = useState<FeaturedCoin[]>([]);

  const timeframes = ['1H', '4H', '1D', '1W', '1M']


  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const priceData = await api.getPrice(crypto);
        setPrice(priceData);
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    fetchPriceData();
    const priceInterval = setInterval(fetchPriceData, 60000);

    return () => clearInterval(priceInterval);
  }, [crypto]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsData, predictionsData] = await Promise.all([
          api.getNews(crypto),
          api.getPredictions(crypto)
        ]);

        setNews(newsData.news);
        setPredictions(predictionsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [crypto]);

  useEffect(() => {
    setFeaturedCoins(featuredCoinsService.getFeaturedCoins());
  }, []);

  const handleToggleCoin = (coinId: string) => {
    const updatedCoins = featuredCoinsService.toggleCoinStatus(coinId);
    setFeaturedCoins(updatedCoins);
  };

  const activeFeaturedCoins = featuredCoins.filter(coin => coin.isActive);

  return (
    <Layout>
      <div className="container mx-auto p-4 text-white min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Header Section - Made responsive */}
        <div className='font-semibold text-4xl mt-3 mb-7'>
        Agent Titus <span className='mr-7 pr-7 text-xl text--600'>crypto Yeild Analysis and investment using AI Agent</span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex flex-col w-full md:w-auto gap-4">
            {/* Crypto Selection */}
            <div className="flex items-center gap-2">
              <Coins className="w-8 h-8 text-blue-400" />
              <Select onValueChange={(value) => setCrypto(value)} defaultValue={crypto}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select Crypto" />
                </SelectTrigger>
                <SelectContent>
                  {activeFeaturedCoins.map(({ id, symbol }) => (
                    <SelectItem key={id} value={id}>
                      {symbol}/USDT
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Display */}
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl text-white font-bold">
                ${price.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Timeframe Selection - Scrollable on mobile */}
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Clock className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div className="flex gap-1 bg-gray-800/50 p-1 rounded-full">
              {timeframes.map((tf) => (
                <Button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  variant={timeframe === tf ? "default" : "ghost"}
                  className={`px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
                    timeframe === tf 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tf}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-1 md:col-span-8 space-y-6">

          </div>

          {/* Right Column */}

        </div>
      </div>
    </Layout>
  );
}