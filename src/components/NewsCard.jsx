import React from 'react'

const NewsCard = () => {
  return (
    
    <main className='flex flex-col bg-white rounded-[10px]'>
        {/* Image */}
        <img className='rounded-t-[10px]' src="https://assets1.cbsnewsstatic.com/hub/i/r/2022/07/26/1aeae926-e3f1-449d-8195-5f3b2e20d0cd/thumbnail/1200x630/26735ad956949285745a379abad6ca54/dallas-love-field-airport-shooting.png" alt="" />
        {/* Info Container */}
        <div className='flex flex-col gap-2 w-[100%] p-[10px]'>
        {/* Title */}
        <h1 className='text-[20px] font-[600] leading-6'>Police release videos of Dallas Love Field Airport shooting; suspect charged with aggravated assault - CBS News</h1>

        <hr className='border-[3px] rounded-[5px]'/>
        {/* Description */}
        <h4 className='text-[15px]'>
        The suspect could face additional federal charges for allegedly opening fire at Dallas Love Field Airport on Monday.
        </h4>
        </div>
        
    </main>



  )
}

export default NewsCard