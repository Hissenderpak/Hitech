import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Header() {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="w-full fixed shadow flex flex-col relative items-center">
      <div className="w-full h-20 px-4 flex items-center justify-between  md:px-12 xl:px-28 ">

        <div  className="w-fit flex items-center xl:flex-row-reverse">
          <img onClick={() => router.push('./index.js')} src="https://www.hitech.mn/assets/icons/ic_logo.svg" alt="" className="w-[108px]" />
          <button onClick={() => setDropDown(!dropDown)} className="h-full w-[48px] px-4 mr-[12px]">
            {
              dropDown ? (
                <img src="https://www.hitech.mn/assets/icons/ic_menu_closed.svg" className="w-[16px]"/>
              ) : (
                <img src="https://www.hitech.mn/assets/icons/ic_close.svg"/>
              )
            }
          </button>
        </div>
        
        <div onClick={() => router.push('')} className="w-[84px] flex justify-center md:hidden">
          <img src="https://www.hitech.mn/assets/icons/ic_cart.svg" alt="" className="w-4"/>
        </div>
        
        <div className="hidden h-full mx-8 xl:mr-14 md:flex flex-1 items-center relative ">
          <input placeholder="Хайлт жишээ нь : RTX 2080" className="h-8 w-full rounded-full bg-gray-100 flex text-black-500 focus:bg-gray-200 pl-4 pr-14 text-sm outline-none"/>
          <div className="absolute rounded-full right-0 flex items-center">
            <div className="w-auto h-fit rounded-full hidden xl:flex px-3 py-[3px] text-xs items-center bg-gray-50 mr-3 underline text-gray-500">KEYBOARD</div>
            <div className="w-auto h-fit rounded-full hidden xl:flex px-3 py-[3px] text-xs items-center bg-gray-50 mr-3 underline text-gray-500">MOUSE</div>
            <div className="w-auto h-fit rounded-full hidden xl:flex px-3 py-[3px] text-xs items-center bg-gray-50 mr-3 underline text-gray-500">APPLE</div>
            <button className="rounded-full bg-orange-600 h-8 flex justify-center items-center px-4">
              <img className="h-4 w-4" src="https://www.hitech.mn/assets/icons/ic_search_white.svg"/>
            </button>
          </div>
        </div>

        <div className="hidden h-full pl-6 md:flex items-center w-[262px]">
          <div className="h-full flex items-center px-4 mr-6">
            <img src="https://www.hitech.mn/assets/icons/ic_cart.svg" className="w-4 mr-2" />
            <div className="text-sm">Сагс (0)</div>
          </div>
          <div className="h-full flex items-center px-4">
            <img src="https://www.hitech.mn/assets/icons/ic_user.svg" className="w-4 mr-2" />
            <div className="text-sm">Нэвтрэх</div>
          </div>
        </div>

      </div>

      <div className="h-[1px] w-full bg-gray-200"></div>

      {!dropDown && (
        <div className="absolute p-[20px] bg-gray-200 rounded-lg mt-[85px] grid grid-cols-4">
          <div className="px-2 py-1 flex items-center hover:bg-white rounded xl:px-2 xl:py-4 relative">
            <img className="w-6 mr-[6px]" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/6367cd4f988c93bf0e8bcbf30618e715.svg"/>
            <span className="text-sm text-black-500 hover:text-orange-600 mr-4 text-clip">Суурин Компьютерын эд анги</span>
            <img className=" flex h-[8px] flex justify-center items-center" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
          </div>
        </div>
      )}


      <div className="hidden md:flex justify-center h-[32px]">
        <div className="h-full w-fit px-4 text-sm flex items-center text-black-500">Бэлэн Компьютер</div>
        <div className="h-full w-fit px-4 text-sm flex items-center text-black-500">PC Build</div>
        <div className="h-full w-fit px-4 text-sm flex items-center text-black-500">LVL Up!</div>
        <div onClick={() => router.push('/pcCare.js')} className="h-full w-fit px-4 text-sm flex items-center text-black-500">PC Care+</div>
        <div className="h-full w-fit px-4 text-sm flex items-center text-black-500">Холбоо барих</div>
      </div>
    </div>
  );
}
