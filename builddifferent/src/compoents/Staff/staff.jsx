import React from 'react'

const staff = () => {
  return (
    <div className='flex flex-col h-[800px] w-full justify-center items-center text-center bg-slate-100'>
        <div>
          
            <h1 className='text-lg text-custom-yellow font-bold'>
            TEAM & STAFF<br />
          <span className='text-5xl text-black font-semibold'>Qualified Engineers</span>
        </h1>
        </div>
        <div>
            <div className='flex flex-row mt-6'>
               
            <img src="/eng1.png" alt="" className='h-[700px] '  />
            <img src="/eng3.png" alt="" className='h-[700px] mx-7' />
            <img src="/eng2.png" alt="" className='h-[700px] ' />
            </div>
        </div>
      
    </div>
  )
}

export default staff
