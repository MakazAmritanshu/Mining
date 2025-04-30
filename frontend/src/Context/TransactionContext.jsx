
import React,{useState} from 'react'
import {createContext,useContext} from 'react'

export const userTransactionData=createContext()


const TransactionContext=({children})=>{

    const[userTransaction,setUserTransaction]=useState({
          balance:0,
          miningRate:0,
          depositHistory:[],
          withdrawalHistory:[],
          activeAccounts:[],
          selectedAccount:null,
          totalMined:0,
          withdrawableAmount: 0,

    })
    


    return(

     
       
 )
}
export default TransactionContext