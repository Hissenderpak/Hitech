import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Header() {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(true);

  return (
    <div className="w-full fixed shadow flex flex-col relative items-center">
      <div className=" w-full h-20 px-4 flex items-center justify-between md:px-12 xl:px-28 ">

          <div  className="w-fit flex items-center flex-row-reverse">
            <img onClick={() => router.push('./index')} src="https://www.hitech.mn/assets/icons/ic_logo.svg" alt="" className="w-[108px] cursor-pointer" />
            <button onClick={() => setDropDown(!dropDown)} className="h-full w-[48px] px-4 mr-[12px] hidden md:flex">
              {
                dropDown ? (
                  <img src="https://www.hitech.mn/assets/icons/ic_menu_closed.svg" className="w-[16px] hidden md:flex"/>
                ) : (
                  <img src="https://www.hitech.mn/assets/icons/ic_close.svg" className="w-[16px] hidden md:flex"/>
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
              <div className="w-auto h-fit rounded-full hidden xl:flex px-3 py-[3px] text-xs items-center bg-gray-50 mr-3 underline text-gray-500 cursor-pointer">KEYBOARD</div>
              <div className="w-auto h-fit rounded-full hidden xl:flex px-3 py-[3px] text-xs items-center bg-gray-50 mr-3 underline text-gray-500 cursor-pointer">MOUSE</div>
              <div className="w-auto h-fit rounded-full hidden xl:flex px-3 py-[3px] text-xs items-center bg-gray-50 mr-3 underline text-gray-500 cursor-pointer">APPLE</div>
              <button className="rounded-full bg-orange-600 h-8 flex justify-center items-center px-4">
                <img className="h-4 w-4" src="https://www.hitech.mn/assets/icons/ic_search_white.svg"/>
              </button>
            </div>
          </div>

          <div className="hidden h-full pl-6 md:flex items-center w-[262px]">
            <div className="h-full flex items-center px-4 cursor-pointer mr-6">
              <img src="https://www.hitech.mn/assets/icons/ic_cart.svg" className="w-4 mr-2" />
              <div className="text-sm">Сагс (0)</div>
            </div>
            <div className="h-full flex items-center px-4 cursor-pointer">
              <img src="https://www.hitech.mn/assets/icons/ic_user.svg" className="w-4 mr-2" />
              <div className="text-sm">Нэвтрэх</div>
            </div>
          </div>

        </div>

        <div className="h-[1px] w-full bg-gray-200"></div>

        {!dropDown && (
          <div className="hidden md:grid absolute p-[20px] bg-gray-100 rounded-lg mt-[87px]  grid-cols-4 mx-4 lg:mx-20 2xl:mx- z-20 ">
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/6367cd4f988c93bf0e8bcbf30618e715.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Суурин компьютер эд анги</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/c6ee3cd271bb3eeb560fb7839da7210b.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Компьютерын дагалдах хэрэгсэл</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/e0a6f85e189a11fc27b009c360a61713.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Ширээ / Сандал / Гэрэл</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/4b3189bd171a9640e6e433a87f4c2f84.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Компьютерын дэлгэц</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/d719eee66d476b7791dc738bc35a157d.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Бэлэн компьютер</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/db974f85efd6e4ed5feb5965aa884651.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Зөөврийн компьютер / Дагалдах хэрэгсэл</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-categories.s3.ap-southeast-1.amazonaws.com%2FSmartphone-1618934806605841691-original.png&w=32&q=75"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Гар утас, Таблет / Дагалдах хэрэгсэл</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-categories.s3.ap-southeast-1.amazonaws.com%2FConsole-1622554218475530105-original.png&w=32&q=75"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Консоль</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/dc95a943f35d833f4785aea8648620b4.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Сүлжээний төхөөрөмж</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/6367cd4f988c93bf0e8bcbf30618e715.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Принтер / Сканнер</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-categories.s3.ap-southeast-1.amazonaws.com%2Fcamera-1627164869115536692-original.png&w=32&q=75"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Камер / Дуран</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/2822b50bc5c6fa6de43e70f35865db6e.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Үйлдлийн систем / Лиценз</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-categories.s3.ap-southeast-1.amazonaws.com%2Ffigure-1627491458269595657-original.png&w=32&q=75"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Фигур / Сувинер</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer">
              <img className="mr-3 w-6 h-6" src="https://hitech-bc-categories.s3.ap-southeast-1.amazonaws.com/3b8d9d2d4c1c4d9ccd185efccc1f8aab.svg"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Фигур / Сувинер</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
            <div className="px-2 py-1 rounded flex h-full items-center hover:bg-white min-h-[56px] hover:text-orange-600 text-clip cursor-pointer ">
              <img className="mr-3 w-6 h-6" src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-categories.s3.ap-southeast-1.amazonaws.com%2F152314932_890965088371357_1292868159020091712_n-1617035274012827452-full.png&w=32&q=75"/>
              <span className="mr-3 text-black-500 text-sm flex-1">Бусад</span>
              <img className="w-[4px] mx-[10px]" src="https://www.hitech.mn/assets/icons/ic_chevron_right_black.svg"/>
            </div>
          </div>
        )}

        <div className="hidden md:flex justify-center h-[32px] bg-white w-full">
          <div onClick={() => router.push('./pcCare')} className="h-full w-fit px-4 text-sm flex items-center text-black-500 cursor-pointer">Бэлэн Компьютер</div>
          <div onClick={() => router.push('./pcCare')} className="h-full w-fit px-4 text-sm flex items-center text-black-500 cursor-pointer">PC Build</div>
          <div onClick={() => router.push('./pcCare')} className="h-full w-fit px-4 text-sm flex items-center text-black-500 cursor-pointer">LVL Up!</div>
          <div onClick={() => router.push('./pcCare')} className="h-full w-fit px-4 text-sm flex items-center text-black-500 cursor-pointer">PC Care+</div>
          <div onClick={() => router.push('./pcCare')} className="h-full w-fit px-4 text-sm flex items-center text-black-500 cursor-pointer">Холбоо барих</div>
        </div>
      </div>
    </div>
  );
}
