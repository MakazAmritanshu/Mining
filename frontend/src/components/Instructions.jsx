import React from 'react'

const Instructions = () => {
    const instructions = [
        "If the transfer time is up, Please fill out deposite from again.",
        "The transfer Amount must match the order you created, otherwise the money cannot be credited successfully.",
        "If you transfer the wrong amount, our company will not be responsible for the last amount!",
        "Scan the QR code or copy UPI id and make payment through your Phone Pay, Paytm, Google Pay or any of the application that you are using. After payment is successful copy UTR no and return to deposit section paste UTR no and press submit button",
        "if you are facing any issue in UPI id or QR code you can use Bank details to transfer the required amount through your mobile banking application. After payment is successful copy UTR no and return to deposit section paste UTR no and press submit button",
        "Note: do not cancel the deposit order after the money has been transferred."
      ];
  return (
    <div className='bg-white items-center justify-center  rounded-3xl   mt-4 shadow-lg'>
        <div className="max-w-3xl mx-auto  text-gray-600 p-6 rounded-3xl  shadow-lg">
      <ul className="space-y-4 list-none">
        {instructions.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-teal-500 mr-2 mt-1">◆</span>
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Instructions