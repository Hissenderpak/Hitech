import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FooterMenu() {
  return (
    <div className="px-10 h-16 z-100 md:hidden flex justify-center fixed bottom-0 border-t w-full bg-white">
      <div className="max-w-lg w-full  grid grid-cols-4">
      <div className="px-5 inline-flex flex-col items-center max-w-[128px] text-orange-600 justify-center cursor-point py-1">
          <svg width="25" height="25" class="mb-1 text-opacityGray-40 text-orange-600 flex items-center justify-center " viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 20.5003C21.5 20.7655 21.3946 21.0198 21.2071 21.2074C21.0196 21.3949 20.7652 21.5003 20.5 21.5003H4.5C4.23478 21.5003 3.98043 21.3949 3.79289 21.2074C3.60536 21.0198 3.5 20.7655 3.5 20.5003V9.99027C3.49989 9.83788 3.53462 9.68749 3.60152 9.55057C3.66841 9.41365 3.76572 9.29384 3.886 9.20027L11.886 2.97827C12.0615 2.84172 12.2776 2.76758 12.5 2.76758C12.7224 2.76758 12.9385 2.84172 13.114 2.97827L21.114 9.20027C21.2343 9.29384 21.3316 9.41365 21.3985 9.55057C21.4654 9.68749 21.5001 9.83788 21.5 9.99027V20.5003ZM19.5 19.5003V10.4783L12.5 5.03427L5.5 10.4783V19.5003H19.5Z" fill="currentColor"></path></svg>
          <span className="text-xs">Нүүр</span>
        </div>
        <div className="px-5 inline-flex flex-col items-center max-w-[128px] text-gray-400 hover:text-orange-600 cursor-point justify-center py-1">
          <svg class="mb-1 text-opacityGray-40 group-hover:text-orange-300 false" fill="none" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 4.5H21.5V6.5H3.5V4.5ZM3.5 11.5H21.5V13.5H3.5V11.5ZM3.5 18.5H21.5V20.5H3.5V18.5Z" fill="currentColor"></path></svg>
          <span className="text-xs">Ангилал</span>
        </div>
        <div className="px-5 inline-flex flex-col items-center max-w-[128px] text-gray-400 hover:text-orange-600 cursor-point justify-center py-1">
          <svg width="25" height="25" class="mb-1 text-opacityGray-40 group-hover:text-orange-300 false" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.531 17.117L22.814 21.399L21.399 22.814L17.117 18.531C15.5237 19.8082 13.542 20.5029 11.5 20.5C6.532 20.5 2.5 16.468 2.5 11.5C2.5 6.532 6.532 2.5 11.5 2.5C16.468 2.5 20.5 6.532 20.5 11.5C20.5029 13.542 19.8082 15.5237 18.531 17.117ZM16.525 16.375C17.7941 15.0699 18.5029 13.3204 18.5 11.5C18.5 7.632 15.367 4.5 11.5 4.5C7.632 4.5 4.5 7.632 4.5 11.5C4.5 15.367 7.632 18.5 11.5 18.5C13.3204 18.5029 15.0699 17.7941 16.375 16.525L16.525 16.375Z" fill="currentColor"></path></svg>
          <span className="text-xs">Хайлт</span>
        </div>
        <div className="px-5 inline-flex flex-col items-center max-w-[128px] text-gray-400 hover:text-orange-600 cursor-point justify-center py-1">
          <svg width="25" class="mb-1 text-opacityGray-40 group-hover:text-orange-300 false" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 22.5C4.5 20.3783 5.34285 18.3434 6.84315 16.8431C8.34344 15.3429 10.3783 14.5 12.5 14.5C14.6217 14.5 16.6566 15.3429 18.1569 16.8431C19.6571 18.3434 20.5 20.3783 20.5 22.5H18.5C18.5 20.9087 17.8679 19.3826 16.7426 18.2574C15.6174 17.1321 14.0913 16.5 12.5 16.5C10.9087 16.5 9.38258 17.1321 8.25736 18.2574C7.13214 19.3826 6.5 20.9087 6.5 22.5H4.5ZM12.5 13.5C9.185 13.5 6.5 10.815 6.5 7.5C6.5 4.185 9.185 1.5 12.5 1.5C15.815 1.5 18.5 4.185 18.5 7.5C18.5 10.815 15.815 13.5 12.5 13.5ZM12.5 11.5C14.71 11.5 16.5 9.71 16.5 7.5C16.5 5.29 14.71 3.5 12.5 3.5C10.29 3.5 8.5 5.29 8.5 7.5C8.5 9.71 10.29 11.5 12.5 11.5Z" fill="currentColor"></path></svg>
          <span className="text-xs">Нэвтрэх</span>
        </div>
      </div>
    </div>
  );
}
