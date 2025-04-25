import React from 'react'
import Header from '../../components/Header'
import BalanceCard from '../../components/BalanceCard'
import CoinsCard from '../../components/CoinsCard'
import SpeedCard from '../../components/SpeedCard'
import Mining from '../../components/Mining'
import Footer from '../../components/Footer'
function Home() {
    return (
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Header />
            <BalanceCard />
            <div className="flex  justify-between mt-4">
              <CoinsCard />
              <SpeedCard />
            </div>
            <Mining />
          </main>
        </div>
      )
}

export default Home