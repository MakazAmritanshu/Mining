import React,{useState} from 'react'
import PaymentType from '../../components/PaymentType'
import BalanceCard from '../../components/BalanceCard'
import AddAccount from '../../components/Account/AddAccount'
import AddUsdtAccount from '../../components/Account/AddUsdtAccount'
const Withdraw = () => {
  const [selectedPayment, setSelectedPayment] = useState('Wallet')
  return (
    <div className='mt-4'>
        <BalanceCard/>
        <PaymentType selected={selectedPayment} setSelected={setSelectedPayment}/>
        {/* Conditional rendering based on selected payment type */}
      {selectedPayment === 'Wallet' ? <AddAccount /> : <AddUsdtAccount />}
    </div>
  )
}

export default Withdraw