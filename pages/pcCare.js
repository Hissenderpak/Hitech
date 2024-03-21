import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });
export default function pcCare() {
  return (
    <main className="w-full py-6">
      <div className="w-full h-screen px-16">
        <div className="h-6 flex flex-row mb-12">
          <div className="h-6 flex flex-row justify-center place-items-center px-3">
            <a className="text-xs opacity-40 font-sans">Нүүр хуудас</a>
            <img className="ml-3 opacity-60"width="8" height="8" alt="arrow"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chevron_right.svg/1024px-Chevron_right.svg.png"></img>
          </div>
          <div className="h-6 flex flex-row justify-center place-items-center px-3">
            <a className="text-xs text-black-500 font-sans">PC Care +</a>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between mb-8">
          <div className="flex flex-col">
           <p class="text-9xl font-bold mb-12 lg:mb-24">“PC Care+”-г сонгосон танд баярлалаа. </p>
           <p className="text-md font-semibold text-justify">Бидний санал болгож буй үйлчилгээ нь PC, Laptop-д тань шаардлагатай тусламжийг чанарын өндөр түвшинд шуурхай гүйцэтгэж өгнө. 🖥️✨ "PC Care+"-д дараах тусламжууд багтсан. Үүнд:</p>
          </div>
          <div className="relative h-mainBanner5XL min-w-96 md:min-w-caring mb-12 lg:mb-0">
           <img className="object-contain" decoding="async" data-nimg="fill" loading="lazy" style="h-100% w-100%" alt="caringImage" sizes="100vw" srcset="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccare.png&w=1920&q=75"></img>
          </div>
        </div>
      </div>
    </main>
  );
}
