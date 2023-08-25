/* import { ConnectButton } from "web3uikit"
import React, { Component } from "react"
import ReactDOM from "react-dom" */
import Image from "next/image"

export default function Header() {
  return (
    <nav className="z-10 font-kake flex flex-row justify-center sticky top-0 bg-gradient-to-r from-slate-200 to-slate-500 border-b-2 overflow-hidden">
      <div className="p-2 mr-auto">
        <Image src="logo.png" width={72} height={72} alt="Logo"></Image>
      </div>

      <div className="flex flex-col justify-center text-[#b16541] mr-auto lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl">
        OnlyFrens.tech
      </div>

      <div className="mr-2 flex flex-col justify-center">
        <button
          className="p-2 bg-[#69974f] hover:text-[#b16541] text-[#234afd] rounded-2xl"
          onClick={async () =>
            window.open(
              "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x52e8336322C8fD0f99000e80F8C5EB0acD1C9Bc3"
            )
          }
        >
          Buy on UniSwap
        </button>
      </div>
    </nav>
  )
}
