import React, { useRef, useState } from 'react'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    weight: ['100','300','400',],
    style: ['normal',],
    subsets: ['latin'],
  })

type Props = { text: string, children: any}

const Tooltip = ({ text, children }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);
    const showTooltip = isHovered || isFocused

  return (
    <div className='inline-flex relative'> {/* TooltipWrapper */}
        <div
            className='border-none bg-none p-1 m-[-1px] flex'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >{children}</div>
        {showTooltip && (
            <div className={`absolute w-[200px] ml-[-100px] flex justify-center items-center left-[50%] bottom-[calc(100%+5px)] pointer-events-none top-[calc(100%+5px)]`}>
                <div className={`relative bg-transparent text-white font-light text-center text-[18px] animate-heroSocialAnimation z-20 ${roboto.className}`}>
                    {text}
                </div>
            </div>
        )}
    </div>
  )
}

export default Tooltip