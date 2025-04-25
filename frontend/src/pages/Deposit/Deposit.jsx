import React,{useState} from 'react'
import BalanceCard from '../../components/BalanceCard'
import DepositAmount from '../../components/DepositAmount'
import Logout from '../../components/Logout'
import Instructions from '../../components/Instructions'
import ImageUploader from '../../components/ImageUploader'
import QrCard from '../../components/QrCard'
import DepositType from '../../components/DepositType'
import AddUsdtDeposit from '../../components/Account/AddUsdtDeposit'
import UpiDeposit from '../../components/QrRequest/UpiDeposit'
import UsdtDeposit from '../../components/QrRequest/UsdtDeposit'
const Deposit = () => {
   const [selecteddeposit, setSelectedDeposit] = useState('UPI')
   const [isSubmitted, setIsSubmitted] = useState(false)
   const [isUsdtSubmitted, setIsUsdtSubmitted] = useState(false)
   const [amount,setAmount]=useState("")
   const [usdtAmount,setUsdtAmount]=useState("")
   
   const handleAmountSubmit = (amount) => {
    console.log("Submitted amount:", amount)
    setAmount(amount)
    setIsSubmitted(true)
  }

  const handleUsdtAmountSubmit = (amount) => {
    console.log("Submitted usdt amount:", amount)
    setUsdtAmount(amount)
    setIsUsdtSubmitted(true)
  }
//<AddUsdtDeposit />
  return (
    <div className='mt-4'>
        <BalanceCard/>
        <DepositType select={selecteddeposit} setSelect={setSelectedDeposit}/>
        {/* Conditional rendering based on selected payment type */}
      {selecteddeposit === 'UPI' ?
      (
        isSubmitted?<UpiDeposit amount={amount}/>:<DepositAmount onSubmit={handleAmountSubmit} />
        ): (isUsdtSubmitted?<UsdtDeposit usdamount={usdtAmount}/>:<AddUsdtDeposit  onSubmit={handleUsdtAmountSubmit} />)}
    
        <Instructions/>
    </div>
  )
}

export default Deposit