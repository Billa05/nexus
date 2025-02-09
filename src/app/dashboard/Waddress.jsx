import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'

function Waddress() {

    const address = "0x1234567890";

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        alert("Address copied to clipboard!");
    };

    return (
    <div className="flex w-full justify-between py-4">
        <Image
          src="/images/hud/Untitled-1_06.jpg"
          width={300}
          height={300}
          className='mix-blend-screen shadow-yellow-500'
        />

        <div className="flex flex-col items-center justify-between">
          <AnimatedText text="WALLET ADDRESS" time="0.5" className="font-cyberalert text-5xl text-yellow-500" customText="日本語組版処理" />
          <div onClick={handleCopy} className='cursor-pointer'>
              <AnimatedText text={address} time="0.5" className="text-3xl font-cyberalert" customText="x?▂▄▆█" preStyle='text-3xl font-cyberalert text-yellow-300' />
          </div>
        </div>
        <Image
          src="/images/hud/Untitled-1_14.jpg"
          width={300}
          height={300}
          className='mix-blend-screen shadow-yellow-500'
        />
    </div>
  )
}

export default Waddress