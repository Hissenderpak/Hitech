import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Router, { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
export default function pcCare() {
  const  router = useRouter ();
  return (
    <main>
     <Header/>
    <div className="w-full py-6">
      <div className="w-full lg:pl-20 lg:pr-20 md:pl-12 md:pr-12 pr-4 pl-4 pb-6">
        <div className="h-6 flex flex-row mb-5">
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
           <p className="font-black mb-12 lg:mb-24 xl:text-[128px] lg:text-[88px] md:text-[68px] text-[28px]">“PC Care+”-г сонгосон танд баярлалаа. </p>
           <p className="text-md font-medium text-justify">Бидний санал болгож буй үйлчилгээ нь PC, Laptop-д тань шаардлагатай тусламжийг чанарын өндөр түвшинд шуурхай гүйцэтгэж өгнө. 🖥️✨ "PC Care+"-д дараах тусламжууд багтсан. Үүнд:</p>
          </div>
          <div className="relative">
           <img className="object-contain lg:w-[1024px] md:w-[384px] w-[384px] h-[587px]" alt="caringImage" sizes="100vw" srcset="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccare.png&w=1920&q=75"></img>
          </div>
        </div>
        <div className="flex flex-col w-full mb-12">
          <p className="text-[19px] font-bold">• Бүрэн Цэвэрлэгээ</p>
          <p className="text-[16px] text-justify p-2">Бүрэн цэвэрлэгээ дотор таны процессорын CPU paste солих, тоосыг үлээлгэж, гадна дотно арчилгаа хийгдэнэ. Сэнсний тоо ширхэг болон хөргүүрийн хэмжээнээс хамаарч арчилгаанд орох хугацаа өөрчлөгдөнө. Сэнсний, радиаторын, Кейсний урд ба хойд тасгийн цэвэрлэгээг үйлчилгээ хийх зориулалтын автомашины хажуу хийж гүйцэтгэнэ. CPU ний дулаан дамжуулах тосны хэвийн хэрэглээний хугацаа нэг жил байдаг учир түүнээс их хугацаагаар ашиглаж байгаа процессорын халалт нормоос өндөр болсон, потенциалны ажиллах хурднаас багассан байх магадлалтай байдаг. Цэвэрлэгээнд CPU-ны дулаан дамжуулагч Thermalright TF7 тосыг ашиглана. График картын лацыг хөндөхгүйгээр үлээлэг болон арчилгаа гадна талаас хийгдэнэ. График картын нарийн цэвэрлэгээний үйлчилгээний хөлс тусдаа. Ажлын хөлс 35000, CPU paste Thermalright TF7 нэг удаагийн түрхлэг 15000</p>
          <p className="text-[19px] font-bold">• GPU Re-Paste</p>
          <p className="text-[16px] text-justify p-2">GPU Re-Paste үйлчилгээ дотор график картын лацыг хөндөж, хөргүүр болон сэнснүүдийг салгана. Түүний дараа дулаан дамжуулалтын хуучин тосыг спиртээр арилгаж шинээр Arctic MX-4 ийн дулаан дамжуулагч тос түрхэгдэнэ. Хөргүүр болон сэнснүүд тус бүр салгагдаж үлээлгэсний дараа нойтон цэвэрлэгээ хийнэ. Палат хавтангийн дагтаршсан тоосон дээр нойтон цэвэрлэгээ хийж гүйцэтгэнэ. Ажлын хөлс 25000, Дулаан дамжуулагч Arctic MX-4 тос нэг удаагийн түрхлэг 15000</p>
          <p className="text-[19px] font-bold">• Fan Optimization</p>
          <p className="text-[16px] text-justify p-2">BIOS буюу эх хавтангийн тохиргоогоор эх хавтантай холбогдсон сэнсний хурдны тохиргоог тааруулж чимээгүй болгох боломжтой. Өөр багцтай цуг авч байгаа тохиолдолд 10000. Дан үйлчилгээ 25000.</p>
          <p className="text-[19px] font-bold">• Формат </p>
          <p className="text-[16px] text-justify p-2">Компьютер формат үйлчилгээ авахын тулд та юуны өмнө өөрийн авч үлдэх бүх файлыг өөрийн мэдлийн багтаамжид хуулсан, компьютерыг форматлахад бэлдсэн байх шаардлагатай. Манай ажилтан танд илүү багтаамж байвал салгаж Зөвхөн Local Disk C: болж үлдэх багтаамжийг форматалж, Microsoft Office 2019 ба таны эд ангид таарсан драйверуудыг суулгана. Түүний дараа таны нэмэлт багтаамжуудыг холбон танд хүлээлгэж өгнө. SSD – Solid State Drive дээр хийхэд 25000 (Хурдан багтаамж) – гүйцэтгэх хугацаа 10-25 минут, HDD – Hard Disk Drive дээр хийхэд 30000 – гүйцэтгэх хугацаа 15-40 минут (Удаан багтаамж)</p>
          <p className="text-[19px] font-bold">• Кабел менежмент </p>
          <p className="text-[16px] text-justify p-2">Кабел менежмент. Процессорын эд ангийн холболт задгай, буруу холбсон эд ангийн холболтын асуудалтай байгаа тохиолдолд компьютерийн кейсд тааруулж забараагүй утаснуудыг багцлагчаар цэгцлэж, кейсний бэхэлгээний цэгүүдийг ашиглаж компьютерний агааржуулалтад нөлөөлөхүйц хөглөрсөн утаснуудыг цэгцэлнэ. Сэнс буруу харсан байх, сэнс болон холболтын утаснуудыг зөв газраар гаргах, RGB гэрэл асаах үйлчилгээ орсон байна. Үйлчилгээний хөлс 20000 • Дуудлагаар PC угсрах, Part солих Таньд байгаа эд ангиар компьютерийг тань угсарч, форматлаж өгнө.</p>
          <p className="text-[19px] font-bold">• Зөвлөгөө</p>
          <p className="text-[16px] text-justify p-2">Үйлчилгээ авч байгаа бол зөвлөгөө үнэгүй PC-дээ зориулан тусламж авах бол өөрийн холбогдох утас, хаяг байршлаа бичиж үлдээнэ үү.</p>
        </div>
        <section className="w-full flex flex-col pt-16">
          <div className="flex w-full justify-between place-items-center mb-6">
            <div className="flex justify-center place-items-end">
              <p className="text-[28px] font-bold leading-10 undefined">Үйлчилгээний төрлүүд</p>
            </div>
          </div>
          <div className="pt-4 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">50'000₮</p>
                </div>
              </div>
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">70'000₮</p>
                </div>
              </div>
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">100'000₮</p>
                </div>
              </div>
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">150'000₮</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col pt-16">
        <div className="flex w-full justify-between place-items-center mb-6">
            <div className="flex justify-center place-items-end">
              <p className="text-[28px] font-bold leading-10 undefined">Үйлчилгээний төрлүүд</p>
            </div>
          </div>
          <div className="pt-4 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">50'000₮</p>
                </div>
              </div>
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">70'000₮</p>
                </div>
              </div>
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">100'000₮</p>
                </div>
              </div>
              <div className="border-2 hover:bg-shadow-500 border-slate-200 rounded-md  transition-all flex flex-col flex-1 relative">
                <div className="relative h-[140px] w-full rounded-lg">
                 <img alt="image" sizes="100vw" src="https://www.hitech.mn/_next/image?url=%2Fassets%2Fimages%2Fimg_pccareitem.png&w=2048&q=75" decoding="async"  className="h-[140px] object-contain ml-[25%] rounded-lg bg-cover" loading="lazy"></img>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex flex-1 flex-col place-items-start">
                    <p className="text-lg font-bold text-black-500 leading-7 mb-3">Бүрэн цэвэрлэгээ 1</p>
                    <p className="text-[16px] leading-6">1-3 Сэнс бүхий дуудлагын компьютер угсралтын үйлчилгээ</p>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Бүрэн цэвэрлэгээ & Rebuild</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Оношилгоо, зөвлөгөө</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">CPU thermal солих /Thermalright TF8/</p>
                    </div>
                    <div className="flex w-full justify-start place-items-center">
                     <img alt="buttonIcon" src="https://www.hitech.mn/assets/icons/ic_check_white.svg" width="16" height="16" decoding="async" data-nimg="1" className="object-contain mr-3 rounded-full bg-orange-500" loading="lazy"></img>
                     <p className="text-[14px] text-slate-400 leading-6">Компьютерийн кабель эмхлэх /Cable Management/</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col place-items-end pb-3">
                  <p className="text-3xl font-bold text-black-500 leading-7">150'000₮</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-t border-gray-400 pt-4 flex flex-col-reverse sm:flex-row">
          <div className="flex flex-col flex-1 mt-6 sm:mt-0">
            <p className="text-slate-500 font-sans text-sm mb-3">2023 © “hitech”, “hitech.mn” лого, таних тэмдэг нь Монгол улсын зохиогчийн эрхийн хуулиар хамгаалагдсан болно.</p>
            <a target="_blank" rel="noopener noreferrer" class="text-slate-500 font-sans text-sm" onClick={() => router.push("mailto:magnai103019@gmail.com")}>POWERED BY PRIME</a>
          </div>
          <div className="flex justify-center sm:justify-end flex-1">
            <a target="_blank" className="h-12 w-12 border border-gray-400 flex rounded-full justify-center place-items-center mr-4 last:mr-0" href="https://www.youtube.com/@HiTechMN">
             <img alt="logo" src="https://www.hitech.mn/assets/icons/ic_youtube.svg" width="36" height="36" decoding="async" data-nimg="1" class="object-contain cursor-pointer rounded-full" loading="lazy"></img>
            </a>
            <a target="_blank" className="h-12 w-12 border border-gray-400 flex rounded-full justify-center place-items-center mr-4 last:mr-0" href="https://www.youtube.com/@HiTechMN">
             <img alt="logo" src="https://www.hitech.mn/assets/icons/ic_facebook.svg" width="36" height="36" decoding="async" data-nimg="1" class="object-contain cursor-pointer rounded-full" loading="lazy"></img>
            </a>
            <a target="_blank" className="h-12 w-12 border border-gray-400 flex rounded-full justify-center place-items-center mr-4 last:mr-0" href="https://www.youtube.com/@HiTechMN">
             <img alt="logo" src="https://www.hitech.mn/assets/icons/ic_instagram.svg" width="36" height="36" decoding="async" data-nimg="1" class="object-contain cursor-pointer rounded-full" loading="lazy"></img>
            </a>
          </div>
        </section>
      </div>
    </div>
    </main>
  );
}
