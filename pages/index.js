import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/header";
import FooterMenu from "./components/footerMenu";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="h-full w-full">
      <Header/>
      <FooterMenu/>
    </main>
  );
}
