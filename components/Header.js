import { ConnectButton } from "web3uikit"
import Image from "next/image"

export default function Header() {
  return (
    <nav className="z-10 flex flex-row justify-center sticky top-0 bg-gradient-to-r from-slate-200 to-slate-500 border-b-2 overflow-hidden">
      <div className="p-2 mr-auto">
        <Image src="logo.png" width={72} height={72} alt="Logo"></Image>
      </div>
      <div className="ml-2 flex flex-col justify-center font-kake text-[#b16541] mr-auto lg:text-5xl md:text-4xl sm:text-xl font-semibold">
        OnlyFrens.tech
      </div>
      <div className="flex flex-col justify-center">
        <ConnectButton />
      </div>
    </nav>
  )
}
