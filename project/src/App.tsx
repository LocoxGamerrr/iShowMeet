import React, { useState } from 'react';
import { Rocket, Coins, TrendingUp, Users, Globe2, Shield, X } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/10 animate-pulse"></div>
        <div className="container mx-auto px-4 py-20">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <Coins className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                iShowMeet
              </span>
            </div>
            <div className="flex space-x-6">
              <button className="hover:text-yellow-400 transition-colors">About</button>
              <button className="hover:text-yellow-400 transition-colors">Tokenomics</button>
              <button className="hover:text-yellow-400 transition-colors">Roadmap</button>
              <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-colors">
                Buy Now
              </button>
            </div>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 relative">
              <img 
                src="https://i.ibb.co/HpYVwmZH/Whats-App-Image-2025-03-13-at-19-49-56-c32aa060.jpg" 
                alt="iShowMeet Coin" 
                className="w-48 h-48 mx-auto rounded-full border-4 border-yellow-400/50 glow-effect"
              />
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              The Next Generation of Social Meme Coins
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution of social-powered cryptocurrency. Where memes meet value, and community meets profits.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-colors flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Launch App
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 border border-yellow-400 rounded-full hover:bg-yellow-500/10 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl backdrop-blur-sm border border-yellow-500/20">
            <TrendingUp className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">$10M+</h3>
            <p className="text-gray-400">Market Cap</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl backdrop-blur-sm border border-yellow-500/20">
            <Users className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">50K+</h3>
            <p className="text-gray-400">Holders</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl backdrop-blur-sm border border-yellow-500/20">
            <Globe2 className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">100+</h3>
            <p className="text-gray-400">Countries</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          Why Choose iShowMeet?
        </h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="p-8 bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
            <Shield className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Secure & Verified</h3>
            <p className="text-gray-400">
              Contract audited by leading security firms. Your investment is protected by advanced blockchain technology.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
            <Users className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
            <p className="text-gray-400">
              Join a vibrant community of holders. Your voice matters in shaping the future of iShowMeet.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          The Rise of iShowMeet – The Ultimate Social Meme Coin 🚀🔥
        </h2>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/20">
            <p className="text-lg text-gray-300 mb-6">
              In a world where meme coins came and went, one coin changed the game. It wasn't just another dog or cat token. It was a social revolution.
              And the mastermind behind it? Lee
            </p>
            <p className="text-lg text-gray-300 mb-6">
              One night, scrolling through viral memes and crypto trends, he had a thought:
            </p>
            <p className="text-xl text-yellow-400 font-semibold italic mb-6">
              "What if a meme coin wasn't just for hype, but actually connected people?"
            </p>
            <p className="text-2xl font-bold text-yellow-400 mb-4">
              💡 Enter iShowMeet (ISM) – The First Social Meme Coin.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">📢 How iShowMeet Works</h3>
            <p className="text-lg text-gray-300 mb-4">
              iShowMeet isn't just a meme coin—it's the first token that powers social engagement.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                Earn ISM by engaging (likes, shares, viral posts)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                Tipping system for creators & influencers
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                Community voting DAO (ISM holders decide the future)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                Exclusive NFT rewards for top social users
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                Auto-burn & scarcity model (More hype, more value)
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">🛣️ iShowMeet Roadmap – The Path to the Moon 🌕</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">🔥 Phase 1: Launch & Hype (0-10K Holders)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Website & whitepaper release</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Social media viral campaign (TikTok, Twitter, YouTube)</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> First exchange listings & DEX launch</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Meme contests & ISM airdrops</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">🚀 Phase 2: Growth & Expansion (10K-50K Holders)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Big influencer partnerships</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> DAO governance system launch</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> NFT collection for ISM holders</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> iShowMeet tipping system goes live</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">🌍 Phase 3: Mass Adoption (50K+ Holders)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> CEX Listings (Binance, KuCoin, OKX)</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> IRL events & sponsorships</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> iShowMeet mobile app for seamless social payments</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Meme culture domination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/50 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">📊 iShowMeet Tokenomics – The Perfect Meme Coin Formula</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                Total Supply: 1,000,000,000 ISM
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                50% Community Airdrops & Rewards
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                25% Liquidity & Exchange Listings
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                15% Marketing & Partnerships
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">🔹</span>
                10% Development & Innovation
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-400">
              🚀 "Join the ISM movement – Where memes meet money!" 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-yellow-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Coins className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold">iShowMeet</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Telegram</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Discord</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Medium</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Story Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto border border-yellow-500/20">
            <div className="p-6 relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                The Birth of SpeedCoin
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  One day, while scrolling through Twitter, Speed saw something wild—celebrities and influencers launching meme coins and making insane money. He laughed at the idea at first, but then he thought:
                </p>
                <p className="text-yellow-400 font-semibold italic">
                  "If they can do it… why can't I?"
                </p>
                <p>
                  Speed had always been about speed—fast reactions, fast gaming, fast life. So, he decided to launch SpeedCoin (SPDC), the fastest meme coin in history. He hopped on a live stream and, in true Speed fashion, screamed:
                </p>
                <p className="text-yellow-400 font-bold text-xl">
                  🚀 "YO CHAT, I'M MAKING MY OWN COIN, BRO! SPEEDCOIN! SIUUU!! 🚀"
                </p>
                <p>
                  The chat exploded. "W COIN!" "LFG!" "BUYING 1M SPEEDCOIN NOW!"
                </p>
                <p>
                  Speed had no idea how to actually make a coin, but he knew one thing—if he hyped it enough, his fans would make it happen. Within hours, crypto devs and fans flooded his DMs, ready to help launch SpeedCoin on the Binance Smart Chain.
                </p>
                <h3 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">
                  The $PEED Revolution
                </h3>
                <p>
                  Within a week, SpeedCoin ($SPDC) was live. Every time Speed went live, he'd yell about the coin, telling fans to buy and HODL. Memes flooded the internet:
                </p>
                <div className="bg-zinc-800/50 p-4 rounded-xl my-4">
                  <p className="text-yellow-400">🔥 "BUY SPEED, GO FAST OR GO BROKE"</p>
                  <p className="text-yellow-400">🔥 "SPDC TO THE MOON, BABY! SIUUU!"</p>
                </div>
                <p>
                  In just one month, SpeedCoin's value skyrocketed, gaining more traction than anyone expected. It wasn't just a meme—it became a movement.
                </p>
                <h3 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">
                  The Lesson of Speed
                </h3>
                <p>
                  Speed didn't just create a coin; he created history. He proved that passion, hype, and pure insanity could turn a wild idea into a real success.
                </p>
                <p>
                  And so, as Speed sat in his gaming chair, staring at the crazy success of SpeedCoin, he leaned back, smiled, and whispered:
                </p>
                <p className="text-yellow-400 font-bold text-xl text-center mt-4">
                  "SIUUUUUU!" 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;