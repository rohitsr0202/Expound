import React from 'react'

const Header = () => {
  return (
    <div className='flex h-14 bg-blue-950'>
    <div className='flex justify-between items-center p-4 gap-4'>
        <img className='h-10 w-10' src="https://img.icons8.com/?size=100&id=69906&format=png&color=FFFFFF" alt="grid" />
        <h1 className='text-white text-3xl font-semibold'>
            Expound Technivo
        </h1>
    </div>

    <div className='flex ml-auto items-center gap-7 pr-4'> 
        <img className='h-9 w-9 rounded-full' src="https://img.icons8.com/?size=100&id=12513&format=png&color=FFFFFF" alt="" />
        <div className='h-8 w-0.5 bg-gray-400'></div>
        <img className='h-5 w-5' src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=FFFFFF" alt="" />
        <img className='h-5 w-5' src="https://img.icons8.com/?size=100&id=842&format=png&color=FFFFFF" alt="" />
        <img className='h-5 w-5' src="https://img.icons8.com/?size=100&id=364&format=png&color=FFFFFF" alt="" />
        <div className='h-8 w-0.5 bg-gray-400'></div>
        <img className='h-8 w-8  rounded-full' src="https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg" alt="" />
    </div>
</div>

  )
}

export default Header