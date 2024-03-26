import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header";


const inter = Inter({ subsets: ["latin"] });

export default function Box() {
  return (
    <main className="w-full">
      <Header/>
        <div className="w-full pt-8 px-4 " >
            <div className="h-6 flex flex-row mb-5" >
                <div className="h-6 flex flex-row justify-center place-items-center px-3">
                    <a className="text-sm text-slate-400 font-sans" href="#">Нүүр хуудас</a>
                    <img 
                    src="https://www.hitech.mn/assets/icons/ic_chevron_right_gray.svg" 
                    width={12} 
                    height={12}
                    class="ml-2"
                    alt="arrow"
                    ></img>
                </div>
                <div className="h-6 flex flex-row justify-center place-items-center px-3">
                    <a className="text-sm text-black-500 font-sans" href="#">
                        ASUS VZ24EHF Eye Care Gaming Monitor – 24-inch (23.8-inch viewable), IPS, Full HD, Frameless, 100Hz, Adaptive-Sync, 1ms MPRT, HDMI
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 pb-6">
                <div className="w-full">
                <div className="w-full pb-3">
                    <div className="w-full bannerHeight mb-14 flex flex-col relative">
                        <div className="relative transition-transform duration-300 ease-in-out block w-full h-full z-0 overflow-hidden bg-transparent">
                            <img 
                            src="https://www.hitech.mn/_next/image?url=https://hitech-bc-main.s3.ap-southeast-1.amazonaws.com/cbb595fe-42cf-431d-9902-d96cc3880f06.jpg&w=3840&q=75" 
                            alt="product image"
                            className="object-contain bg-white cursor-zoom-in"
                            />

                        </div>
                    </div>
                    <div className="flex flex-1 overflow-scroll">
                        <div className="w-auto flex flex-row">
                            <div className="h-productXS w-productXS relative mr-6 last:mr-0 rounded border-orange-300  border hover:border-orange-300 transition-colors cursor-pointer">
                                <img
                                alt="product list image"
                                className="object-contain rounded"
                                src="https://www.hitech.mn/_next/image?url=https://hitech-bc-main.s3.ap-southeast-1.amazonaws.com/cbb595fe-42cf-431d-9902-d96cc3880f06_thumbs_medium.jpg&w=640&q=75"                                
                                />
                            </div>
                            <div className="h-productXS w-productXS relative mr-6 last:mr-0 rounded border-gray-200  border hover:border-orange-300 transition-colors cursor-pointer">
                                <img
                                alt="product list image"
                                className="object-contain rounded"
                                src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-main.s3.ap-southeast-1.amazonaws.com%2F739506a6-5428-4441-9aab-e5c19674acd3_thumbs_medium.jpg&w=3840&q=75"                                
                                />
                            </div>
                            <div className="h-productXS w-productXS relative mr-6 last:mr-0 rounded border-gray-200  border hover:border-orange-300 transition-colors cursor-pointer">
                                <img
                                alt="product list image"
                                className="object-contain rounded"
                                src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-main.s3.ap-southeast-1.amazonaws.com%2F739506a6-5428-4441-9aab-e5c19674acd3_thumbs_medium.jpg&w=3840&q=75"                                
                                />
                            </div>
                            <div className="h-productXS w-productXS relative mr-6 last:mr-0 rounded border-gray-200  border hover:border-orange-300 transition-colors cursor-pointer">
                                <img
                                alt="product list image"
                                className="object-contain rounded"
                                src="https://www.hitech.mn/_next/image?url=https://hitech-bc-main.s3.ap-southeast-1.amazonaws.com/cbb595fe-42cf-431d-9902-d96cc3880f06_thumbs_medium.jpg&w=640&q=75"                                
                                />
                            </div>
                            <div className="h-productXS w-productXS relative mr-6 last:mr-0 rounded border-gray-200  border hover:border-orange-300 transition-colors cursor-pointer">
                                <img
                                alt="product list image"
                                className="object-contain rounded"
                                src="https://www.hitech.mn/_next/image?url=https://hitech-bc-main.s3.ap-southeast-1.amazonaws.com/cbb595fe-42cf-431d-9902-d96cc3880f06_thumbs_medium.jpg&w=640&q=75"                                
                                />
                            </div>
                            <div className="h-productXS w-productXS relative mr-6 last:mr-0 rounded border-gray-200  border hover:border-orange-300 transition-colors cursor-pointer">
                                <img
                                alt="product list image"
                                className="object-contain rounded"
                                src="https://www.hitech.mn/_next/image?url=https://hitech-bc-main.s3.ap-southeast-1.amazonaws.com/cbb595fe-42cf-431d-9902-d96cc3880f06_thumbs_medium.jpg&w=640&q=75"                                
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-3">
                    <p className="italic font-sans mb-3 font-sans text-base text-slate-500">Үзүүлэлт:</p>
                    <div className="border rounded overflow-hidden">
                        <div className="w-full table-fixed">
                            <div className="divide-y divide-slate-400">
                                <thead>
                                <tr>
                                    <td className="px-5 py-2.5 font-sans text-base text-slate-500 bg-gray-100">Refresh Rate (Max)</td>
                                    <td className="px-5 py-2.5 font-sans text-base text-black-500 text-center">100hz</td>
                                </tr>
                                </thead>
                                <tr>
                                    <td className="px-5 py-2.5 font-sans text-base text-slate-500 bg-gray-100">Response Time</td>
                                    <td className="px-5 py-2.5 font-sans text-base text-black-500 text-center">1ms MPRT</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 font-sans text-base text-slate-500 bg-gray-100">Panel Type</td>
                                    <td className="px-5 py-2.5 font-sans text-base text-black-500 text-center">IPS</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 font-sans text-base text-slate-500 bg-gray-100">Backlight Type</td>
                                    <td className="px-5 py-2.5 font-sans text-base text-black-500 text-center">LED</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 font-sans text-base text-slate-500 bg-gray-100">Panel Size (inch)</td>
                                    <td className="px-5 py-2.5 font-sans text-base text-black-500 text-center">27</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 font-sans text-base text-slate-500 bg-gray-100">Resolution</td>
                                    <td className="px-5 py-2.5 font-sans text-base text-black-500 text-center">1920x1080</td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-full">
                    <div className="w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 mb-6">
                            <button className="rounded-full flex place-items-center justify-center baseText px-4 undefined text-black-500 h-8 hover:bg-gray-200 hover:underline transition-all ">
                            <img
                            alt="buttonIcon"
                            src="https://www.hitech.mn/assets/icons/ic_heart.svg"
                            width={16}
                            height={16}
                            decoding="async"
                            className="object-contain mr-2"
                            loading="lazy"
                            style={{ color: 'transparent' }}
                            />

                            "Хадгалах
                            </button>
                            <button className="rounded-full flex place-items-center justify-center baseText px-4 undefined text-black-500 h-8 hover:bg-gray-200 hover:underline transition-all ">
                            <img
                            alt="buttonIcon"
                            src="	https://www.hitech.mn/assets/icons/ic_chart.svg"
                            width={16}
                            height={16}
                            decoding="async"
                            className="object-contain mr-2"
                            loading="lazy"
                            style={{ color: 'transparent' }}
                            />

                                Харьцуулах
                            </button>
                            <button className="rounded-full flex place-items-center justify-center baseText px-4 undefined text-black-500 h-8 hover:bg-gray-200 hover:underline transition-all ">
                            <img
                            alt="buttonIcon"
                            src="	https://www.hitech.mn/assets/icons/ic_info.svg"
                            width={16}
                            height={16}
                            decoding="async"
                            className="object-contain mr-2"
                            loading="lazy"
                            style={{ color: 'transparent' }}
                            />

                                Төстэй
                            </button>
                            <button className="rounded-full flex place-items-center justify-center baseText px-4 undefined text-black-500 h-8 hover:bg-gray-200 hover:underline transition-all ">
                            <img
                            alt="buttonIcon"
                            src="	https://www.hitech.mn/assets/icons/ic_share.svg"
                            width={16}
                            height={16}
                            decoding="async"
                            className="object-contain mr-2"
                            loading="lazy"
                            style={{ color: 'transparent' }}
                            />

                                Хуваалцах
                            </button>
                        </div>
                        <p className="font-bold text-3xl font-medium leading-9 text-black-500 mb-6">ASUS - VZ27EHF Eye Care – 27 inch Full HD (1920 x 1080), IPS 100Hz</p>
                        <div className="w-full flex justify-between border-b border-gray-200 pb-3">
                            <div className="flex flex-row justify-center place-items-center">
                                <img
                                alt="buttonIcon"
                                src="https://www.hitech.mn/assets/icons/ic_star_outline.svg"
                                width={24}
                                height={24}
                                decoding="async"
                                className="object-contain"
                                loading="lazy"
                                style={{ color: 'transparent' }}
                                />
                                <img
                                alt="buttonIcon"
                                src="https://www.hitech.mn/assets/icons/ic_star_outline.svg"
                                width={24}
                                height={24}
                                decoding="async"
                                className="object-contain"
                                loading="lazy"
                                style={{ color: 'transparent' }}
                                />
                                <img
                                alt="buttonIcon"
                                src="https://www.hitech.mn/assets/icons/ic_star_outline.svg"
                                width={24}
                                height={24}
                                decoding="async"
                                className="object-contain"
                                loading="lazy"
                                style={{ color: 'transparent' }}
                                />
                                <img
                                alt="buttonIcon"
                                src="https://www.hitech.mn/assets/icons/ic_star_outline.svg"
                                width={24}
                                height={24}
                                decoding="async"
                                className="object-contain"
                                loading="lazy"
                                style={{ color: 'transparent' }}
                                />
                                <img
                                alt="buttonIcon"
                                src="https://www.hitech.mn/assets/icons/ic_star_outline.svg"
                                width={24}
                                height={24}
                                decoding="async"
                                className="object-contain"
                                loading="lazy"
                                style={{ color: 'transparent' }}
                                />
                                <p className="font-sans text-md font-medium ml-1">5.0</p>

                            </div>
                            <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 bg-opacityOrange-30">Шинэ</div>
                        </div>
                        <div className="w-full py-6 border-b border-gray-200">
                            <p className="italic font-sans mb-3 font-sans text-base text-opacityGray-64">Үнэ:</p>
                            <div className="w-full flex flex-col xl:flex-row justify-between">
                                <div className="flex place-items-start flex-col mb-3 xl:mb-0">
                                    <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 italic rounded-l-none bg-green-200 mb-3">
                                    Баталгаат хугацаа 6 сар
                                    </div>
                                    <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 italic rounded-l-none bg-orange-100">
                                    Хүргэлт Үнэгүй
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between xl:justify-end">
                                    <div className="flex flex-col place-items-end">
                                        <p className="italic font-sans font-sans text-sm text-opacityGray-64">НӨАТ ороогүй дүн</p>
                                        <p className="font-sans text-5xl font-bold text-black-500">460'000₮</p>
                                    </div>
                                </div>
                                
                            </div>
                            <p className="italic mb-3 font-sans text-base text-slate-500"> Бүтээгдэхүүний дэлгэрэнгүй:</p>
                            <div className="font-sans text-base text-black-500 text-justify leading-4">
                                <p className="">ASUS VZ27EHF Eye Care Gaming Monitor – 27 inch Full HD (1920 x 1080), IPS, Frameless, 100Hz, Adaptive-Sync, 1ms MPRT, HDMI, Low Blue Light, Flicker Free, Wall Mountable</p>
                                <ul>
                                    <li>
                                        <p>27-inch Full HD (1920 x 1080) IPS gaming monitor with stylish ultra-slim profile only 6.5mm thin</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p>SmoothMotion 100Hz refresh rate and 1ms MPRT delivers a seamless, tear-free visual experience by enabling VRR (variable refresh rate)</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p>VESA wall-mountable to save on desktop space</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p>TUV Rheinland Certification for Flicker-free and Low Blue Light technology to ensure a comfortable viewing experience</p>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full pb-3"></div>
                        <div className="w-full flex justify-between place-items-center py-3">
                            <div className="flex">
                                <p className="italic font-sans text-base text-opacityGray-64">Үлдэгдэл:</p>
                                <p className="font-sans text-base text-black-500 ml-1">5</p>
                            </div>
                            <div className="flex bg-gray-100 rounded-full px-3 py-1.5">
                                <button className="h-8 justify-center place-items-center px-4 rounded-full text-black-500 text-md hover:bg-gray-200 transition-colors opacity-100">-</button>
                                <div className="h-8 flex justify-center place-items-center px-4 text-black-500 text-md">1</div>
                                <button className="h-8 justify-center place-items-center px-4 rounded-full text-orange-300 text-md  hover:bg-gray-200 transition-colors opacity-100">+</button>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-2 pt-3 pb-6 gap-8 border-b border-gray-200">
                            <button className="rounded-full flex place-items-center justify-center px-4 undefined w-full h-14 bg-gray-200 text-md text-black-500 font-semibold">Сагслах</button>
                            <button className="rounded-full flex place-items-center justify-center px-4 undefined w-full h-14 bg-orange-500 text-md text-white font-semibold">Худалдан авах</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div className="flex w-full justify-between place-items-center mb-12">
                    <div className="flex justify-center place-items-end">
                        <p class="text-3xl font-bold leading-10">Адил төстэй бүтээгдэхүүнүүд</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="rounded-lg hover:shadow transition-all flex flex-col flex-1 relative">
  <div className="relative w-full rounded-lg">
    <a href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568">
      <img
        alt="productImage"
        src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-main.s3.ap-southeast-1.amazonaws.com%2F29a1bf52-27e4-4a7b-b287-ecfd06b93bf7_thumbs_medium.jpg&w=3840&q=75"
        data-nimg="fill"
      />
    </a>
    <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-colors flex flex-col">
      <a className="flex w-full flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
      <div className="flex w-full">
        <a className="flex flex-1" href="#"></a>
        <button className="rounded-full flex place-items-center justify-center baseText px-4 bg-white text-black-500 h-8 py-4 leading-3 hover:underline shadow-header transition-all">
          ХЯЛБАР ҮЗЭЛТ
        </button>
        <a className="flex flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
      </div>
      <a className="flex flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
    </div>
  </div>
  <div className="p-3 flex flex-col flex-1">
    <div className="flex flex-1 flex-col">
      <div className="flex w-full place-items-center justify-between mb-2">
        <div className="flex">
          <div className="hidden xl:flex flex-row justify-center place-items-center">
            <img
              alt="buttonIcon"
              src="/assets/icons/ic_star_outline.svg"
              width={24}
              height={24}
              decoding="async"
              data-nimg="1"
              className="object-contain"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
            <p className="bigText ml-1">5.0</p>
          </div>
          <div className="flex xl:hidden flex-row justify-center place-items-center">
            <img
              alt="buttonIcon"
              src="	https://www.hitech.mn/assets/icons/ic_star_outline.svg"
              width={24}
              height={24}
              decoding="async"
              data-nimg="1"
              className="object-contain"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
            <p className="bigText ml-1">5.0</p>
          </div>
        </div>
        <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 bg-opacityOrange-30">
          Шинэ
        </div>
      </div>
      <div className="flex flex-1 flex-col place-items-start">
        <a className="bigText text-black-500 leading-6 mb-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568">
          Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate
        </a>
        <div className="mb-1 w-full flex justify-between place-items-center">
          <p className="lgHeading font-bold leading-7">1'350'000₮</p>
          <p className="text-sm font-sans text-opacityGray-64 underline">Үлдэгдэл: 12</p>
        </div>
        <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 italic rounded-l-none bg-opacityOrange-30">
          Хүргэлт Үнэгүй
        </div>
      </div>
    </div>
    <div className="flex mt-3 w-full place-items-center justify-between">
      <button type="button" className="h-8 rounded-full flex place-items-center justify-center baseText text-opacityGray-64">
        <img
          alt="buttonIcon"
          src="https://www.hitech.mn/assets/icons/ic_checkbox.svg"
          width={16}
          height={16}
          decoding="async"
          data-nimg="1"
          className="object-contain mr-1 rounded-full bg-white-500"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        Харьцуулах
      </button>
      <button className="rounded-full flex place-items-center justify-center px-3 bg-orange-500 h-8">
        <img
          alt="buttonIcon"
          src="	https://www.hitech.mn/assets/icons/ic_bag_white.svg"
          width={16}
          height={16}
          decoding="async"
          data-nimg="1"
          className="object-contain"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        <p className="baseText text-white ml-2 flex lg:hidden xl:flex">Сагслах</p>
      </button>
    </div>
    <div className="absolute pointer-events-none rounded-lg inset-x-0 top-0 h-11 flex place-items-start justify-between">
      <div className="p-3 flex pointer-events-auto"></div>
      <button className="h-11 w-11 flex place-items-center justify-center pointer-events-auto">
        <img
          alt="buttonIcon"
          src="	https://www.hitech.mn/assets/icons/ic_heart.svg"
          width={24}
          height={24}
          decoding="async"
          data-nimg="1"
          className="object-contain hover:scale-125 transition-transform"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
      </button>
    </div>
  </div>
</div>
<div className="rounded-lg hover:shadow transition-all flex flex-col flex-1 relative">
  <div className="relative w-full rounded-lg">
    <a href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568">
      <img
        alt="productImage"
        src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-main.s3.ap-southeast-1.amazonaws.com%2F29a1bf52-27e4-4a7b-b287-ecfd06b93bf7_thumbs_medium.jpg&w=3840&q=75"
        data-nimg="fill"
      />
    </a>
    <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-colors flex flex-col">
      <a className="flex w-full flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
      <div className="flex w-full">
        <a className="flex flex-1" href="#"></a>
        <button className="rounded-full flex place-items-center justify-center baseText px-4 bg-white text-black-500 h-8 py-4 leading-3 hover:underline shadow-header transition-all">
          ХЯЛБАР ҮЗЭЛТ
        </button>
        <a className="flex flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
      </div>
      <a className="flex flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
    </div>
  </div>
  <div className="p-3 flex flex-col flex-1">
    <div className="flex flex-1 flex-col">
      <div className="flex w-full place-items-center justify-between mb-2">
        <div className="flex">
          <div className="hidden xl:flex flex-row justify-center place-items-center">
            <img
              alt="buttonIcon"
              src="/assets/icons/ic_star_outline.svg"
              width={24}
              height={24}
              decoding="async"
              data-nimg="1"
              className="object-contain"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
            <p className="bigText ml-1">5.0</p>
          </div>
          <div className="flex xl:hidden flex-row justify-center place-items-center">
            <img
              alt="buttonIcon"
              src="	https://www.hitech.mn/assets/icons/ic_star_outline.svg"
              width={24}
              height={24}
              decoding="async"
              data-nimg="1"
              className="object-contain"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
            <p className="bigText ml-1">5.0</p>
          </div>
        </div>
        <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 bg-opacityOrange-30">
          Шинэ
        </div>
      </div>
      <div className="flex flex-1 flex-col place-items-start">
        <a className="bigText text-black-500 leading-6 mb-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568">
          Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate
        </a>
        <div className="mb-1 w-full flex justify-between place-items-center">
          <p className="lgHeading font-bold leading-7">1'350'000₮</p>
          <p className="text-sm font-sans text-opacityGray-64 underline">Үлдэгдэл: 12</p>
        </div>
        <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 italic rounded-l-none bg-opacityOrange-30">
          Хүргэлт Үнэгүй
        </div>
      </div>
    </div>
    <div className="flex mt-3 w-full place-items-center justify-between">
      <button type="button" className="h-8 rounded-full flex place-items-center justify-center baseText text-opacityGray-64">
        <img
          alt="buttonIcon"
          src="https://www.hitech.mn/assets/icons/ic_checkbox.svg"
          width={16}
          height={16}
          decoding="async"
          data-nimg="1"
          className="object-contain mr-1 rounded-full bg-white-500"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        Харьцуулах
      </button>
      <button className="rounded-full flex place-items-center justify-center px-3 bg-orange-500 h-8">
        <img
          alt="buttonIcon"
          src="	https://www.hitech.mn/assets/icons/ic_bag_white.svg"
          width={16}
          height={16}
          decoding="async"
          data-nimg="1"
          className="object-contain"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        <p className="baseText text-white ml-2 flex lg:hidden xl:flex">Сагслах</p>
      </button>
    </div>
    <div className="absolute pointer-events-none rounded-lg inset-x-0 top-0 h-11 flex place-items-start justify-between">
      <div className="p-3 flex pointer-events-auto"></div>
      <button className="h-11 w-11 flex place-items-center justify-center pointer-events-auto">
        <img
          alt="buttonIcon"
          src="	https://www.hitech.mn/assets/icons/ic_heart.svg"
          width={24}
          height={24}
          decoding="async"
          data-nimg="1"
          className="object-contain hover:scale-125 transition-transform"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
      </button>
    </div>
  </div>
</div>
                    

                <div className="rounded-lg hover:shadow transition-all flex flex-col flex-1 relative">
  <div className="relative w-full rounded-lg">
    <a href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568">
      <img
        alt="productImage"
        src="https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-main.s3.ap-southeast-1.amazonaws.com%2F29a1bf52-27e4-4a7b-b287-ecfd06b93bf7_thumbs_medium.jpg&w=3840&q=75"
        data-nimg="fill"
      />
    </a>
    <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-colors flex flex-col">
      <a className="flex w-full flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
      <div className="flex w-full">
        <a className="flex flex-1" href="#"></a>
        <button className="rounded-full flex place-items-center justify-center baseText px-4 bg-white text-black-500 h-8 py-4 leading-3 hover:underline shadow-header transition-all">
          ХЯЛБАР ҮЗЭЛТ
        </button>
        <a className="flex flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
      </div>
      <a className="flex flex-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568"></a>
    </div>
  </div>
  <div className="p-3 flex flex-col flex-1">
    <div className="flex flex-1 flex-col">
      <div className="flex w-full place-items-center justify-between mb-2">
        <div className="flex">
          <div className="hidden xl:flex flex-row justify-center place-items-center">
            <img
              alt="buttonIcon"
              src="/assets/icons/ic_star_outline.svg"
              width={24}
              height={24}
              decoding="async"
              data-nimg="1"
              className="object-contain"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
            <p className="bigText ml-1">5.0</p>
          </div>
          <div className="flex xl:hidden flex-row justify-center place-items-center">
            <img
              alt="buttonIcon"
              src="	https://www.hitech.mn/assets/icons/ic_star_outline.svg"
              width={24}
              height={24}
              decoding="async"
              data-nimg="1"
              className="object-contain"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
            <p className="bigText ml-1">5.0</p>
          </div>
        </div>
        <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 bg-opacityOrange-30">
          Шинэ
        </div>
      </div>
      <div className="flex flex-1 flex-col place-items-start">
        <a className="bigText text-black-500 leading-6 mb-1" href="/product/c3b9185d-dc40-47b3-9a7c-a7977d6b4568">
          Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate
        </a>
        <div className="mb-1 w-full flex justify-between place-items-center">
          <p className="lgHeading font-bold leading-7">1'350'000₮</p>
          <p className="text-sm font-sans text-opacityGray-64 underline">Үлдэгдэл: 12</p>
        </div>
        <div className="font-sans rounded-lg flex place-items-center justify-center py-1 px-2 text-sm leading-4 italic rounded-l-none bg-opacityOrange-30">
          Хүргэлт Үнэгүй
        </div>
      </div>
    </div>
    <div className="flex mt-3 w-full place-items-center justify-between">
      <button type="button" className="h-8 rounded-full flex place-items-center justify-center baseText text-opacityGray-64">
        <img
          alt="buttonIcon"
          src="https://www.hitech.mn/assets/icons/ic_checkbox.svg"
          width={16}
          height={16}
          decoding="async"
          data-nimg="1"
          className="object-contain mr-1 rounded-full bg-white-500"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        Харьцуулах
      </button>
      <button className="rounded-full flex place-items-center justify-center px-3 bg-orange-500 h-8">
        <img
          alt="buttonIcon"
          src="	https://www.hitech.mn/assets/icons/ic_bag_white.svg"
          width={16}
          height={16}
          decoding="async"
          data-nimg="1"
          className="object-contain"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        <p className="baseText text-white ml-2 flex lg:hidden xl:flex">Сагслах</p>
      </button>
    </div>
    <div className="absolute pointer-events-none rounded-lg inset-x-0 top-0 h-11 flex place-items-start justify-between">
      <div className="p-3 flex pointer-events-auto"></div>
      <button className="h-11 w-11 flex place-items-center justify-center pointer-events-auto">
        <img
          alt="buttonIcon"
          src="	https://www.hitech.mn/assets/icons/ic_heart.svg"
          width={24}
          height={24}
          decoding="async"
          data-nimg="1"
          className="object-contain hover:scale-125 transition-transform"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
      </button>
    </div>
  </div>
</div>



                </div>
                
            </div>
            <div className="w-full rounded-lg bg-blue-950 px-16 py-6 flex flex-col-reverse md:flex-row cursor-pointer">
                <div className="flex flex-col flex-1 justify-center place-items-start mr-3 md:mr-0 mt-0 md:mt-3">
                    <p className="text-4xl font-bold text-white mb-4 leading-10">BUILD A CUSTOM PC</p>
                    <p className="text-md text-white leading-6">We build custom PCs around your budget, optimized for the games you love, all protected by a 2-year warranty.</p>
                </div>
                    <div className="w-full md:w-1/2 h-64 relative">
                        <img
                        src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_build.png&w=2048&q=75"
                        className="min-[220px]:mt-28 min-[420px]:mt-12 sm:mt-0 md:mt-6 lg:mt-4"
                        alt="Custom PC Image"
                        />
                </div>
            </div>
            <footer className="mainPaddingX mainPaddingY bg-white-400">
  <section className="grid grid-cols-2 lg:grid-cols-7 pb-6 w-full gap-8">
    <div className="col-span-2">
      <div>
        <p className="baseText text-black font-bold mb-4">ХОЛБООСУУД</p>
        <div className="flex flex-col w-full">
          <a href="https://www.youtube.com/watch?v=OLf8sTEfAlM" className="text-sm font-sans text-black-500 mb-3 last:mb-0">Хэрхэн PC Format хийх вэ?</a>
          <a href="https://www.youtube.com/watch?v=elIJIbR35N4" className="text-sm font-sans text-black-500 mb-3 last:mb-0">Gaming Mouse-уудын Tier List!!!</a>
          <a href="https://www.youtube.com/watch?v=uIMBkoD3rIg" className="text-sm font-sans text-black-500 mb-3 last:mb-0">EVGA RTX 3080 Build</a>
          <a href="/faq" className="text-sm font-sans text-black-500 mb-3 last:mb-0">Түгээмэл Асуулт Хариулт</a>
          <a href="/privacy" className="text-sm font-sans text-black-500 mb-3 last:mb-0">Үйлчилгээний Нөхцөл</a>
        </div>
      </div>
    </div>
    <div className="col-span-3">
      <p className="baseText text-black font-bold mb-4">ХОЛБОО БАРИХ</p>
      <div className="flex w-full mb-3">
        <p className="text-sm font-sans flex flex-shrink-0 text-black-500">Салбар дэлгүүрийн дугаар:</p>
        <p className="ml-3 text-sm font-sans text-opacityGray-64">7000-1311 (Хүннү 2222), 7000-0090 (Computer Mall)</p>
      </div>
      <div className="flex w-full mb-3">
        <p className="text-sm font-sans flex flex-shrink-0 text-black-500">Имэйл хаяг:</p>
        <p className="ml-3 text-sm font-sans text-opacityGray-64">info@hitech.mn</p>
      </div>
      <div className="flex w-full">
        <p className="text-sm font-sans flex flex-shrink-0 text-black-500">Бидэнтэй хамтарч ажиллах:</p>
        <div className="ml-3">
          <p className="text-sm font-sans text-opacityGray-64">8092-0044</p>
          <p className="text-sm font-sans text-opacityGray-64">info@hitech.mn</p>
        </div>
      </div>
    </div>
    <div className="col-span-2">
      <p className="baseText text-black font-bold mb-4">СОШИАЛ СУВГУУД</p>
      <a href="https://www.youtube.com/@HiTechMN" target="_blank" rel="noopener noreferrer" className="flex items-center mb-3 last:mb-0">
        <div className="h-6 w-6 flex justify-center items-center">
          <img src="/assets/icons/ic_youtube.svg" alt="logo" width="24" height="24" className="object-contain cursor-pointer" loading="lazy" style={{ color: 'transparent' }} />
        </div>
        <p className="ml-3 text-sm font-sans text-black-500">Hitech</p>
      </a>
      <a href="https://www.facebook.com/hitechcomputershop" target="_blank" rel="noopener noreferrer" className="flex items-center mb-3 last:mb-0">
        <div className="h-6 w-6 flex justify-center items-center">
          <img src="/assets/icons/ic_facebook.svg" alt="logo" width="24" height="24" className="object-contain cursor-pointer" loading="lazy" style={{ color: 'transparent' }} />
        </div>
        <p className="ml-3 text-sm font-sans text-black-500">Hitech Computer Store</p>
      </a>
      <a href="https://www.instagram.com/hitech_tips/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center mb-3 last:mb-0">
        <div className="h-6 w-6 flex justify-center items-center">
          <img src="/assets/icons/ic_instagram.svg" alt="logo" width="24" height="24" className="object-contain cursor-pointer" loading="lazy" style={{ color: 'transparent' }} />
        </div>
        <p className="ml-3 text-sm font-sans text-black-500">Hitech_tips</p>
      </a>
    </div>
  </section>
  <section className="w-full border-t border-gray-400 pt-4 flex flex-col-reverse sm:flex-row">
    <div className="flex flex-col flex-1 mt-6 sm:mt-0">
      <p className="text-opacityGray-64 font-sans text-sm mb-3">2023 © “hitech”, “hitech.mn” лого, таних тэмдэг нь Монгол улсын зохиогчийн эрхийн хуулиар хамгаалагдсан болно.</p>
      <a href="mailto:magnai103019@gmail.com" className="text-opacityGray-64 font-sans text-sm">POWERED BY PRIME</a>
    </div>
    <div className="flex justify-center sm:justify-end flex-1">
      <a href="https://www.youtube.com/@HiTechMN" target="_blank" rel="noopener noreferrer" className="h-12 w-12 border border-gray-400 flex rounded-full justify-center items-center mr-4 last:mr-0">
        <img src="/assets/icons/ic_youtube.svg" alt="logo" width="36" height="36" className="object-contain cursor-pointer rounded-full" loading="lazy" style={{ color: 'transparent' }} />
      </a>
      <a href="https://www.facebook.com/hitechcomputershop" target="_blank" rel="noopener noreferrer" className="h-12 w-12 border border-gray-400 flex rounded-full justify-center items-center mr-4 last:mr-0">
        <img src="/assets/icons/ic_facebook.svg" alt="logo" width="36" height="36" className="object-contain cursor-pointer rounded-full" loading="lazy" style={{ color: 'transparent' }} />
      </a>
      <a href="https://www.instagram.com/hitech_tips/?hl=en" target="_blank" rel="noopener noreferrer" className="h-12 w-12 border border-gray-400 flex rounded-full justify-center items-center mr-4 last:mr-0">
        <img src="/assets/icons/ic_instagram.svg" alt="logo" width="36" height="36" className="object-contain cursor-pointer rounded-full" loading="lazy" style={{ color: 'transparent' }} />
      </a>
    </div>
  </section>
</footer>



        </div>
    </main>
  );
}

