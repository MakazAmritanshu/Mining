import React from 'react'

function Btn({type="Button"}) {
  return (
    <div>
        <button className='bg-[#009494] text-sm font-medium text-white  rounded-xl p-4 flex justify-center items-center cursor-pointer'>
            {type}
        </button>
    </div>
  )
}

export default Btn