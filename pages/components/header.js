import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });


export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full drop-shadow-md fixed">
      <div className="w-full h-20 px-4 flex items-center justify-between  md:px-12">
        <div onClick={() => router.push('/index.js')} className="w-fit flex items-center">
          <img src="https://www.hitech.mn/assets/icons/ic_logo.svg" alt="" className="w-[108px]" />
          <div className="h-full w-[48px] px-4 mr-[12px]">
            <img src="https://www.hitech.mn/assets/icons/ic_menu_closed.svg" className="w-[16px]"/>
          </div>
        </div>
        <div onClick={() => router.push('')} className="w-[84px] flex justify-center md:hidden">
          <img src="https://www.hitech.mn/assets/icons/ic_cart.svg" alt="" className="w-4"/>
        </div>
      </div>
    </div>
  );
}
