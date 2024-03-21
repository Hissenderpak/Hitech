import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Box() {
  return (
    <main className="w-full py-6">
        <div className="w-full mainPaddingX " >
            <div className="h-6 flex flex-row mb-5" >
                <div className="h-6 flex flex-row justify-center place-items-center px-3">
                    <a className="text-sm text-slate-400 font-sans">Нүүр хуудас</a>
                    <img src="/assets/icons/ic_chevron_right_gray.svg" 
                    width="12" 
                    height="12"  
                    data-nimg="1" 
                    class="ml-2"></img>
                </div>
                <div className="h-6 flex flex-row justify-center place-items-center px-3">
                    <a className="text-sm text-black-500 font-sans" href="">
                        ASUS VZ24EHF Eye Care Gaming Monitor – 24-inch (23.8-inch viewable), IPS, Full HD, Frameless, 100Hz, Adaptive-Sync, 1ms MPRT, HDMI
                    </a>
                </div>
            </div>
        </div>
    </main>
  );
}

