import { ConnectButton } from "web3uikit"
import Image from "next/image"

export default function Header() {
  return (
    <nav className="z-10 flex flex-row justify-center sticky top-0 bg-gradient-to-r from-slate-400 to-slate-800 border-b-2 overflow-hidden">
      <div className="mr-auto">
        <Image src="logohex.png" width={128} height={128} alt="Logo"></Image>
      </div>
      <div className=" ml-2 flex flex-col justify-center text-[#0af58e] mr-auto lg:text-5xl md:text-4xl sm:text-xl font-semibold">
        BaseDev Token
      </div>
      <div className="flex flex-col justify-center">
        <ConnectButton />
      </div>
    </nav>
  )
}
