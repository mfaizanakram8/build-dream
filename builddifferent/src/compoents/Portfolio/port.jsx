import React from 'react'
import { FaSearch } from 'react-icons/fa'

const port = () => {
  return (
    <div className="flex flex-col h-[900px] w-full justify-center items-center text-center bg-slate-100">
      <div>
        <h1 className="text-lg text-custom-yellow font-bold">
          Portfolio<br />
          <span className="text-5xl text-black font-semibold">Projects</span>
        </h1>
      </div>
      
      <div className="flex flex-row mt-16">
        <div className="relative group">
          <img src="/2.png" alt="" className="w-[440px]" />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
          <h3 className="text-white text-xl font-bold mt-48   mr-9 text-start" > BUILDINGS <br /><span className=' text-3xl'>HIGH TOWER WORKS</span></h3>
          </div>
        </div>
        
        <div className="relative group">
          <img src="/1.png" alt="" className="w-[440px]" />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
          <h3 className="text-white text-xl font-bold mt-48   mr-9 text-start" > BUILDINGS <br /><span className=' text-3xl'>HIGH TOWER WORKS</span></h3>
          </div>
        </div>
        
        <div className="relative group">
          <img src="/3.png" alt="" className="w-[390px]" />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
          <h3 className="text-white text-xl font-bold mt-48  mr-9 text-start" > BUILDINGS <br /><span className=' text-3xl'>HIGH TOWER WORKS</span></h3>
          </div>
        </div>
      </div>
      
      <div className="flex flex-row ">
        <div className="relative group">
          <img src="/5.png" alt="" className="w-[440px]" />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
          <h3 className="text-white text-xl font-bold mt-48   mr-9 text-start" > BUILDINGS <br /><span className=' text-3xl'>HIGH TOWER WORKS</span></h3>
  
          </div>
        </div>
        
        <div className="relative group">
          <img src="/6.png" alt="" className="w-[440px]" />
         
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
           
            <h3 className="text-white text-xl font-bold mt-48  mr-9 text-start" > BUILDINGS <br /><span className=' text-3xl'>HIGH TOWER WORKS</span></h3>
            
          </div>
        </div>
        
        <div className="relative group">
          <img src="/7.png" alt="" className="w-[390px]" />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
          <h3 className="text-white text-xl font-bold mt-48 mr-9 text-start" > BUILDINGS <br /><span className=' text-3xl'>HIGH TOWER WORKS</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default port
